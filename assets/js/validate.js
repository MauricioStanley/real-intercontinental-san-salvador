/* ============================================================
   Validación de formularios en vivo
   Real InterContinental San Salvador — vanilla JS, sin dependencias.

   Marca cada campo como válido (check dorado/esmeralda junto a la
   etiqueta) o inválido (aviso en rojo ladrillo bajo el campo) mientras
   el huésped escribe. Se activa en: el asistente de reserva, el
   formulario de eventos, el de contacto y el boletín del footer.
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = function () { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; };

  /* ---------- textos por idioma (independiente del motor de i18n: el
     texto se genera en tiempo real, así que se resuelve directo contra
     window.IC_LANG en vez de pasar por el TreeWalker) ---------- */
  var DICT = {
    es: {
      required: "Este campo es obligatorio.",
      email: "Escribe un correo válido, como nombre@correo.com.",
      tel: "Escribe un teléfono válido (7 a 15 dígitos).",
      name: "Usa solo letras, mínimo 2 caracteres.",
      minlength: "Cuéntanos un poco más.",
      dateOrder: "La salida debe ser posterior a la entrada.",
      number: "Escribe un número válido.",
      roomRate: "Elige una habitación y una tarifa para continuar."
    },
    en: {
      required: "This field is required.",
      email: "Enter a valid email, like name@email.com.",
      tel: "Enter a valid phone number (7–15 digits).",
      name: "Letters only, at least 2 characters.",
      minlength: "Tell us a little more.",
      dateOrder: "Check-out must be after check-in.",
      number: "Enter a valid number.",
      roomRate: "Choose a room and a rate to continue."
    },
    pt: {
      required: "Este campo é obrigatório.",
      email: "Digite um e-mail válido, como nome@email.com.",
      tel: "Digite um telefone válido (7 a 15 dígitos).",
      name: "Somente letras, mínimo de 2 caracteres.",
      minlength: "Conte-nos um pouco mais.",
      dateOrder: "A saída deve ser depois da entrada.",
      number: "Digite um número válido.",
      roomRate: "Escolha um quarto e uma tarifa para continuar."
    }
  };
  function t(k) { return (DICT[window.IC_LANG] || DICT.es)[k] || k; }

  var ICON_OK = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.4 6.3 12 13 4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var ICON_ERR = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.3" stroke="currentColor" stroke-width="1.3"/><path d="M8 5.2v3.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="10.8" r=".85" fill="currentColor"/></svg>';

  var RE_EMAIL = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  var RE_NAME = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;

  function digitsOf(v) { var m = v.match(/\d/g); return m ? m.length : 0; }

  function statusDot(input) {
    var wrap = input.closest(".field");
    var label = wrap ? wrap.querySelector("label") : null;
    if (!label) return null;
    var dot = label.querySelector(".field-status");
    if (!dot) {
      dot = document.createElement("span");
      dot.className = "field-status";
      dot.setAttribute("aria-hidden", "true");
      label.appendChild(dot);
    }
    return dot;
  }

  function msgEl(input) {
    var next = input.nextElementSibling;
    if (next && next.classList && next.classList.contains("field-msg")) return next;
    var el = document.createElement("div");
    el.className = "field-msg";
    el.setAttribute("aria-live", "polite");
    el.innerHTML = "<span></span>";
    input.insertAdjacentElement("afterend", el);
    return el;
  }

  function kindOf(input) {
    if (input.dataset.validate) return input.dataset.validate;
    if (input.dataset.compareAfter) return "date-after";
    if (input.tagName === "SELECT") return input.required ? "required" : "";
    if (input.type === "email") return "email";
    if (input.type === "tel") return "tel";
    if (input.type === "number") return "number";
    if (input.tagName === "TEXTAREA") return (input.required || input.minLength > 0) ? "text" : "";
    if (input.required) return "text";
    return "";
  }

  function check(input) {
    var kind = kindOf(input);
    if (!kind) return null;
    var v = (input.value || "").trim();
    var required = input.required;

    if (kind === "date-after") {
      var other = $(input.dataset.compareAfter);
      if (!v || !other || !other.value) return null;
      var a = new Date(other.value + "T00:00:00"), b = new Date(v + "T00:00:00");
      return b > a ? { ok: true } : { ok: false, msg: t("dateOrder") };
    }

    if (!v) return required ? { ok: false, msg: t("required") } : null;

    switch (kind) {
      case "email":
        return RE_EMAIL.test(v) ? { ok: true } : { ok: false, msg: t("email") };
      case "tel":
        var d = digitsOf(v);
        return (d >= 7 && d <= 15) ? { ok: true } : { ok: false, msg: t("tel") };
      case "name":
        return RE_NAME.test(v) ? { ok: true } : { ok: false, msg: t("name") };
      case "number":
        var n = parseFloat(v);
        if (isNaN(n)) return { ok: false, msg: t("number") };
        if (input.min !== "" && n < parseFloat(input.min)) return { ok: false, msg: t("number") };
        if (input.max !== "" && n > parseFloat(input.max)) return { ok: false, msg: t("number") };
        return { ok: true };
      case "text":
        if (input.minLength > 0 && v.length < input.minLength) return { ok: false, msg: t("minlength") };
        return { ok: true };
      case "required":
        return { ok: true };
      default:
        return { ok: true };
    }
  }

  function applyState(input, result, showError) {
    var dot = statusDot(input);
    var msg = msgEl(input);
    input.classList.remove("is-valid", "is-invalid");
    if (dot) dot.className = "field-status";
    msg.classList.remove("show", "err");
    input.removeAttribute("aria-invalid");

    if (result === null) return;

    if (result.ok) {
      input.classList.add("is-valid");
      if (dot) { dot.className = "field-status ok"; dot.innerHTML = ICON_OK; }
      input.setAttribute("aria-invalid", "false");
    } else if (showError) {
      input.classList.add("is-invalid");
      if (dot) { dot.className = "field-status err"; dot.innerHTML = ICON_ERR; }
      input.setAttribute("aria-invalid", "true");
      msg.classList.add("show", "err");
      msg.querySelector("span").innerHTML = ICON_ERR + "<em>" + result.msg + "</em>";
    }
  }

  function wire(input) {
    if (input.__icWired) return;
    input.__icWired = true;
    var touched = false;

    function run(showErr) {
      var r = check(input);
      applyState(input, r, showErr);
      return r;
    }
    input.__icRun = run;

    input.addEventListener("input", function () { run(touched || input.classList.contains("is-invalid")); });
    input.addEventListener("change", function () { run(touched); });
    input.addEventListener("blur", function () { touched = true; run(true); });

    // pinta el estado inicial (útil si el paso trae valores ya guardados)
    run(false);
  }

  function wireAll(root) {
    $$("input, select, textarea", root).forEach(function (el) { if (kindOf(el)) wire(el); });
  }

  function refresh(root) {
    $$("input, select, textarea", root).forEach(function (el) { if (el.__icRun) el.__icRun(false); });
  }

  function validateForm(form) {
    var ok = true, first = null;
    $$("input, select, textarea", form).forEach(function (el) {
      if (!kindOf(el)) return;
      wire(el);
      var r = el.__icRun(true);
      if (r && r.ok === false && !first) first = el;
      if (r && r.ok === false) ok = false;
    });
    if (!ok && first) {
      focusInvalid(first);
    }
    return ok;
  }

  function focusInvalid(field) {
    field.focus({ preventScroll: true });
    field.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "center" });
    var group = field.closest(".field") || field.parentElement;
    if (group && !reduceMotion()) {
      group.classList.remove("ic-shake");
      void group.offsetWidth;
      group.classList.add("ic-shake");
    }
  }

  window.ICValidate = { wireAll: wireAll, refresh: refresh, validateForm: validateForm, wire: wire, focusInvalid: focusInvalid, t: t, ICON_ERR: ICON_ERR, ICON_OK: ICON_OK };

  /* Se ejecuta de forma síncrona (igual que main.js), NO en
     DOMContentLoaded: este script se carga antes que main.js en cada
     página, así que el listener de "submit" que registra aquí queda
     primero en la cola del formulario. Si el formulario es inválido,
     detiene la propagación y el handler de main.js (que simula el envío)
     nunca llega a ejecutarse. */
  wireAll(document);
  $$("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!validateForm(form)) { e.preventDefault(); e.stopImmediatePropagation(); }
    });
  });
})();
