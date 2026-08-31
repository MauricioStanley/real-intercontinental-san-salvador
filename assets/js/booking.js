/* ============================================================
   Motor de reservas (maqueta) — 5 pasos, sin backend.
   Real InterContinental San Salvador
   ============================================================ */
(function () {
  "use strict";
  var D = window.IC_DATA;
  if (!D || !document.getElementById("wizard")) return;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var money = function (n) { return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }); };

  var params = new URLSearchParams(location.search);
  var state = {
    step: 1,
    checkin: params.get("checkin") || "",
    checkout: params.get("checkout") || "",
    adults: +(params.get("adults") || 2),
    children: +(params.get("children") || 0),
    rooms: +(params.get("rooms") || 1),
    promo: params.get("promo") || "",
    roomId: null,
    rateId: null,
    addons: {},
    guest: {},
  };

  /* --- fechas por defecto --- */
  var fmt = function (d) { return d.toISOString().slice(0, 10); };
  if (!state.checkin) { var t = new Date(); t.setDate(t.getDate() + 1); state.checkin = fmt(t); }
  if (!state.checkout) { var c = new Date(state.checkin); c.setDate(c.getDate() + 2); state.checkout = fmt(c); }

  var nights = function () {
    var a = new Date(state.checkin), b = new Date(state.checkout);
    return Math.max(1, Math.round((b - a) / 86400000));
  };
  var guestCount = function () { return state.adults + state.children; };

  var room = function () { return D.rooms.filter(function (r) { return r.id === state.roomId; })[0]; };
  var rate = function () { return D.rateTypes.filter(function (r) { return r.id === state.rateId; })[0]; };

  var roomNightly = function () {
    var r = room(), rt = rate();
    if (!r || !rt) return 0;
    return Math.round(r.from * rt.factor);
  };

  var addonsTotal = function () {
    var n = nights(), g = guestCount(), rm = state.rooms, sum = 0;
    D.addons.forEach(function (a) {
      if (!state.addons[a.id]) return;
      if (a.per === "pppn") sum += a.price * g * n;
      else if (a.per === "pn") sum += a.price * rm * n;
      else sum += a.price;
    });
    return sum;
  };

  var subtotal = function () { return roomNightly() * nights() * state.rooms + addonsTotal(); };
  var taxes = function () {
    var iva = Math.round(roomNightly() * nights() * state.rooms * D.hotel.taxRate);
    var tourism = D.hotel.tourismFee * nights() * state.rooms;
    return iva + tourism;
  };
  var grandTotal = function () { return subtotal() + taxes(); };

  /* ============================================================
     Render
     ============================================================ */
  var panels = $("#wizard-panels");

  function stepper() {
    var labels = ["Fechas", "Habitación", "Extras", "Datos", "Confirmación"];
    return '<ol class="steps">' + labels.map(function (l, i) {
      var n = i + 1;
      var cls = n === state.step ? "active" : (n < state.step ? "done" : "");
      return '<li class="' + cls + '"><i>' + (n < state.step ? "✓" : n) + "</i>" + l + "</li>";
    }).join("") + "</ol>";
  }

  function dateHuman(s) {
    try {
      var loc = { en: "en-US", pt: "pt-BR" }[window.IC_LANG] || "es-ES";
      return new Date(s + "T00:00:00").toLocaleDateString(loc, { weekday: "short", day: "numeric", month: "short" });
    } catch (e) { return s; }
  }

  function summary() {
    var r = room(), rt = rate();
    var rows = "";
    rows += row("Entrada", dateHuman(state.checkin));
    rows += row("Salida", dateHuman(state.checkout));
    rows += row("Noches", nights());
    var W = { es: ["adultos", "niños"], en: ["adults", "children"], pt: ["adultos", "crianças"] }[window.IC_LANG] || ["adultos", "niños"];
    rows += row("Huéspedes", state.adults + " " + W[0] + (state.children ? " · " + state.children + " " + W[1] : ""));
    rows += row("Habitaciones", state.rooms);
    if (r) rows += row(r.name, rt ? rt.name : "");
    if (r && rt) rows += row(money(roomNightly()) + " × " + nights() + " noche(s) × " + state.rooms, money(roomNightly() * nights() * state.rooms));
    D.addons.forEach(function (a) {
      if (state.addons[a.id]) {
        var line = a.per === "pppn" ? a.price * guestCount() * nights()
          : a.per === "pn" ? a.price * state.rooms * nights() : a.price;
        rows += row(a.name, money(line));
      }
    });
    if (r && rt) {
      rows += row("Impuestos y tasa turística", money(taxes()));
      rows += '<div class="summary__row total"><span>Total estimado</span><b>' + money(grandTotal()) + "</b></div>";
    }
    return '<div class="summary"><h3>Tu estancia</h3><div class="summary__body">' + rows + "</div></div>";
  }
  function row(k, v) { return '<div class="summary__row"><span>' + k + "</span><span>" + v + "</span></div>"; }

  /* ---- Paso 1: fechas y huéspedes ---- */
  function panel1() {
    return '' +
      '<div class="wizard-panel active"><h2 class="h-md">Fechas y huéspedes</h2><hr class="goldrule" style="margin:18px 0 28px">' +
      '<div class="form-grid">' +
        field("Entrada", '<input type="date" id="w-checkin" value="' + state.checkin + '">') +
        field("Salida", '<input type="date" id="w-checkout" value="' + state.checkout + '">') +
        field("Adultos", numSelect("w-adults", 1, 6, state.adults)) +
        field("Niños", numSelect("w-children", 0, 4, state.children)) +
        field("Habitaciones", numSelect("w-rooms", 1, 4, state.rooms)) +
        field("Código promocional", '<input type="text" id="w-promo" value="' + state.promo + '" placeholder="Opcional">') +
      '</div>' +
      '<p class="form-note" style="margin-top:18px">Mejor tarifa garantizada al reservar directo. Precios en USD; los impuestos se calculan en el paso final.</p>' +
      '<div class="wizard-nav"><span></span><button class="btn btn--gold" data-next>Elegir habitación</button></div>' +
      '</div>';
  }

  /* ---- Paso 2: elegir habitación + tarifa ---- */
  function panel2() {
    var n = nights();
    var cards = D.rooms.filter(function (r) {
      // filtro simple por ocupación
      return capacity(r) >= guestCount();
    });
    if (!cards.length) cards = D.rooms;
    var html = cards.map(function (r) {
      var rates = D.rateTypes.map(function (rt) {
        var price = Math.round(r.from * rt.factor);
        var checked = (state.roomId === r.id && state.rateId === rt.id) ? "checked" : "";
        return '<label class="rate-option">' +
          '<span><input type="radio" name="rate" value="' + r.id + "|" + rt.id + '" ' + checked + '> <b>' + rt.name + '</b><br><small>' + rt.note + '</small></span>' +
          '<span class="price"><b>' + money(price) + '</b><br><small>por noche</small></span>' +
        '</label>';
      }).join("");
      return '<article class="rate-room">' +
        '<img src="' + r.img + '" alt="' + r.name + '" loading="lazy">' +
        '<div class="rate-room__body">' +
          '<h3>' + r.name + '</h3>' +
          '<div class="card__meta" style="margin:8px 0 4px">' +
            '<span>' + r.size + '</span><span>' + r.bed + '</span><span>' + r.occupancy + '</span>' +
          '</div>' +
          '<p style="color:var(--ink-soft);font-size:.92rem">' + r.short + '</p>' +
          rates +
        '</div>' +
      '</article>';
    }).join("");
    return '<div class="wizard-panel active"><h2 class="h-md">Elige tu habitación</h2>' +
      '<p class="form-note" style="margin:10px 0 24px">' + dateHuman(state.checkin) + ' – ' + dateHuman(state.checkout) + ' · ' + n + ' noche(s) · ' + guestCount() + ' huésped(es)</p>' +
      html +
      '<div class="wizard-nav"><button class="btn btn--ghost" data-back>Volver</button><button class="btn btn--gold" data-next>Continuar</button></div>' +
      '</div>';
  }
  function capacity(r) {
    var m = /(\d+)/.exec(r.occupancy); return m ? +m[1] : 2;
  }

  /* ---- Paso 3: extras ---- */
  function panel3() {
    var list = D.addons.map(function (a) {
      var unit = a.per === "pppn" ? "/persona/noche" : a.per === "pn" ? "/noche" : "único";
      return '<label class="addon">' +
        '<input type="checkbox" data-addon="' + a.id + '" ' + (state.addons[a.id] ? "checked" : "") + '>' +
        '<span><b>' + a.name + ' · ' + money(a.price) + ' <small style="font-weight:400;color:var(--ink-soft)">' + unit + '</small></b>' +
        '<span>' + a.note + '</span></span>' +
      '</label>';
    }).join("");
    return '<div class="wizard-panel active"><h2 class="h-md">Personaliza tu estancia</h2><hr class="goldrule" style="margin:18px 0 24px">' +
      '<div style="border:1px solid var(--line)">' + list + '</div>' +
      '<div class="wizard-nav"><button class="btn btn--ghost" data-back>Volver</button><button class="btn btn--gold" data-next>Datos del huésped</button></div>' +
      '</div>';
  }

  /* ---- Paso 4: datos del huésped ---- */
  function panel4() {
    var g = state.guest;
    return '<div class="wizard-panel active"><h2 class="h-md">Datos del huésped</h2><hr class="goldrule" style="margin:18px 0 28px">' +
      '<form id="guest-form" novalidate><div class="form-grid">' +
        field("Nombre", '<input type="text" id="g-first" value="' + (g.first || "") + '" required>') +
        field("Apellido", '<input type="text" id="g-last" value="' + (g.last || "") + '" required>') +
        field("Correo electrónico", '<input type="email" id="g-email" value="' + (g.email || "") + '" required>') +
        field("Teléfono", '<input type="tel" id="g-phone" value="' + (g.phone || "") + '" required>') +
        field("País de residencia", '<input type="text" id="g-country" value="' + (g.country || "") + '">') +
        field("Hora estimada de llegada", numSelectHours("g-eta", g.eta)) +
      '</div>' +
      '<div class="field" style="margin-top:20px">' +
        '<label for="g-notes">Solicitudes especiales</label>' +
        '<textarea id="g-notes" placeholder="Cama adicional, piso alto, celebración…">' + (g.notes || "") + '</textarea>' +
      '</div>' +
      '<p class="form-note" style="margin-top:18px">No se requiere pago ahora. La reserva se garantiza con tus datos de contacto y se liquida directamente en el hotel al momento del check-in. Aplica la política de cancelación de la tarifa elegida.</p>' +
      '<div class="wizard-nav"><button type="button" class="btn btn--ghost" data-back>Volver</button><button type="submit" class="btn btn--gold">Revisar y confirmar</button></div>' +
      '</form></div>';
  }

  /* ---- Paso 5: confirmación ---- */
  function panel5() {
    var code = "IC-SAL-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    var r = room(), rt = rate(), g = state.guest;
    return '<div class="wizard-panel active">' +
      '<div class="confirm-box">' +
        '<div class="tick">✓</div>' +
        '<h2 class="h-md">Reserva confirmada</h2>' +
        '<p class="lede" style="margin:10px 0 18px">Hemos enviado los detalles a ' + (g.email || "tu correo") + '.</p>' +
        '<p style="font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3);font-weight:600;margin-bottom:4px">Código de reserva</p>' +
        '<p class="code">' + code + '</p>' +
        '<div style="max-width:420px;margin:26px auto 0;text-align:left">' +
          row("Huésped", (g.first || "") + " " + (g.last || "")) +
          row("Habitación", r ? r.name : "") +
          row("Tarifa", rt ? rt.name : "") +
          row("Entrada", dateHuman(state.checkin)) +
          row("Salida", dateHuman(state.checkout)) +
          '<div class="summary__row total"><span>Total estimado</span><b>' + money(grandTotal()) + '</b></div>' +
        '</div>' +
        '<div class="wizard-nav" style="justify-content:center;margin-top:32px"><a class="btn btn--ghost" href="index.html">Volver al inicio</a><a class="btn btn--gold" href="reservar.html">Nueva reserva</a></div>' +
      '</div>' +
    '</div>';
  }

  /* ---- helpers de campos ---- */
  function field(label, control) {
    return '<div class="field"><label>' + label + "</label>" + control + "</div>";
  }
  function numSelect(id, min, max, val) {
    var o = "";
    for (var i = min; i <= max; i++) o += '<option value="' + i + '" ' + (i === val ? "selected" : "") + ">" + i + "</option>";
    return '<select id="' + id + '">' + o + "</select>";
  }
  function numSelectHours(id, val) {
    var o = '<option value="">Selecciona…</option>';
    for (var h = 12; h <= 23; h++) { var s = h + ":00"; o += '<option ' + (s === val ? "selected" : "") + ">" + s + "</option>"; }
    return '<select id="' + id + '">' + o + "</select>";
  }

  /* ============================================================
     Ciclo de render
     ============================================================ */
  function render() {
    $("#wizard-steps").innerHTML = stepper();
    var body;
    if (state.step === 1) body = panel1();
    else if (state.step === 2) body = panel2();
    else if (state.step === 3) body = panel3();
    else if (state.step === 4) body = panel4();
    else body = panel5();
    panels.innerHTML = body;

    var sumMount = $("#wizard-summary");
    if (sumMount) sumMount.innerHTML = state.step === 5 ? "" : summary();

    bind();
    window.scrollTo({ top: $(".site-header").offsetHeight, behavior: "smooth" });
  }

  function bind() {
    var next = $("[data-next]"), back = $("[data-back]");
    if (next) next.addEventListener("click", onNext);
    if (back) back.addEventListener("click", function () { state.step--; render(); });

    if (state.step === 1) {
      ["w-checkin", "w-checkout", "w-adults", "w-children", "w-rooms", "w-promo"].forEach(function (id) {
        var el = $("#" + id);
        if (el) el.addEventListener("change", readStep1);
      });
    }
    if (state.step === 2) {
      $$('input[name="rate"]').forEach(function (r) {
        r.addEventListener("change", function () {
          var v = r.value.split("|");
          state.roomId = v[0]; state.rateId = v[1];
          $("#wizard-summary").innerHTML = summary();
        });
      });
    }
    if (state.step === 3) {
      $$("[data-addon]").forEach(function (c) {
        c.addEventListener("change", function () {
          state.addons[c.getAttribute("data-addon")] = c.checked;
          $("#wizard-summary").innerHTML = summary();
        });
      });
    }
    if (state.step === 4) {
      $("#guest-form").addEventListener("submit", function (e) {
        e.preventDefault();
        state.guest = {
          first: val("g-first"), last: val("g-last"), email: val("g-email"),
          phone: val("g-phone"), country: val("g-country"), eta: val("g-eta"), notes: val("g-notes"),
        };
        if (!state.guest.first || !state.guest.last || !state.guest.email || !state.guest.phone) {
          alert("Por favor completa nombre, apellido, correo y teléfono.");
          return;
        }
        state.step = 5; render();
      });
    }
  }
  function val(id) { var el = $("#" + id); return el ? el.value.trim() : ""; }

  function readStep1() {
    state.checkin = val("w-checkin") || state.checkin;
    state.checkout = val("w-checkout") || state.checkout;
    if (new Date(state.checkout) <= new Date(state.checkin)) {
      var d = new Date(state.checkin); d.setDate(d.getDate() + 1);
      state.checkout = fmt(d);
      if ($("#w-checkout")) $("#w-checkout").value = state.checkout;
    }
    state.adults = +val("w-adults") || 2;
    state.children = +val("w-children") || 0;
    state.rooms = +val("w-rooms") || 1;
    state.promo = val("w-promo");
    $("#wizard-summary").innerHTML = summary();
  }

  function onNext() {
    if (state.step === 1) { readStep1(); state.step = 2; }
    else if (state.step === 2) {
      if (!state.roomId || !state.rateId) { alert("Elige una habitación y una tarifa para continuar."); return; }
      state.step = 3;
    }
    else if (state.step === 3) { state.step = 4; }
    render();
  }

  render();
})();
