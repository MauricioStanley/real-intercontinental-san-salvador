/* ============================================================
   Encuentra tu habitación ideal — quiz interactivo de 2 pasos.
   Real InterContinental San Salvador
   ============================================================ */
(function () {
  "use strict";
  var D = window.IC_DATA;
  var root = document.getElementById("finder");
  if (!D || !root) return;

  var $ = function (s, c) { return (c || root).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || root).querySelectorAll(s)); };
  var money = function (n) { return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 }); };

  var answers = {};

  /* travelers × preferencia -> id de habitación, con el porqué de la recomendación */
  var MATRIX = {
    "solo|esencial":  { room: "classic",       why: "Todo lo que necesitas, sin pagar de más: cama de diseño y ventanas insonorizadas." },
    "solo|espacio":   { room: "superior",      why: "Pisos altos, más luz natural y una zona de estar aparte para trabajar o descansar." },
    "solo|club":      { room: "club",          why: "Acceso al Club InterContinental Lounge: desayuno, cóctel y check-in privado." },
    "solo|lujo":      { room: "suite",         why: "Sala independiente y todos los privilegios del Club, para una estancia sin límites." },
    "familia|esencial": { room: "family",      why: "Dos camas Queen y espacio real para toda la familia, a pasos de Metrocentro." },
    "familia|espacio": { room: "family",       why: "Es la categoría con más metros cuadrados pensada para viajar en grupo." },
    "familia|club":    { room: "junior-suite", why: "Dormitorio y sala integrados — pide el Club Lounge como extra al reservar." },
    "familia|lujo":    { room: "suite",        why: "Sala independiente y comedor para seis: espacio de sobra sin perder el lujo." },
    "negocios|esencial": { room: "classic",    why: "Escritorio funcional, wifi de alta velocidad y descanso garantizado antes de tu reunión." },
    "negocios|espacio":  { room: "superior",   why: "Una zona de estar separada de la cama, ideal para trabajar sin salir de la habitación." },
    "negocios|club":     { room: "club",       why: "Check-in prioritario y el Lounge para trabajar o recibir a un cliente con calma." },
    "negocios|lujo":     { room: "suite",      why: "Sala independiente para reunirte en privado, con el servicio completo del Club." }
  };

  var LABELS = {
    "travelers:solo": "Solo o en pareja",
    "travelers:familia": "En familia",
    "travelers:negocios": "Por negocios",
    "pref:esencial": "Lo esencial, bien hecho",
    "pref:espacio": "Espacio y luz extra",
    "pref:club": "Acceso al Club Lounge",
    "pref:lujo": "El máximo lujo"
  };

  var steps = $$("[data-finder-step]");
  var dots = $$("[data-finder-dot]");
  var resultBox = $('[data-finder-step="3"]');

  function showStep(n) {
    steps.forEach(function (s) {
      var isThis = s.getAttribute("data-finder-step") === String(n);
      s.hidden = !isThis;
    });
    dots.forEach(function (d) {
      var i = +d.getAttribute("data-finder-dot");
      d.classList.toggle("active", i === n);
      d.classList.toggle("done", i < n);
    });
  }

  function pick(btn, group) {
    $$('[data-answer^="' + group + ':"]').forEach(function (b) { b.classList.remove("picked"); });
    btn.classList.add("picked");
  }

  function reveal() {
    var key = answers.travelers + "|" + answers.pref;
    var pickd = MATRIX[key] || MATRIX["solo|esencial"];
    var room = D.rooms.filter(function (r) { return r.id === pickd.room; })[0];
    if (!room) return;

    resultBox.innerHTML =
      '<div class="finder__result-wrap">' +
        '<p class="eyebrow">Para ti, según ' + LABELS["travelers:" + answers.travelers].toLowerCase() + ' y ' + LABELS["pref:" + answers.pref].toLowerCase() + '</p>' +
        '<div class="finder__result">' +
          '<img src="' + room.img + '" alt="' + room.name + '" loading="lazy">' +
          '<div>' +
            '<h3 class="h-md">' + room.name + '</h3>' +
            '<p class="card__meta" style="margin:8px 0 0">' + room.size + ' · ' + room.bed + ' · ' + room.occupancy + '</p>' +
            '<div class="finder__why">' + pickd.why + '</div>' +
            '<p class="finder__price">' + money(room.from) + ' <span>por noche, antes de impuestos</span></p>' +
            '<div class="finder__cta">' +
              '<a class="btn btn--ghost" href="habitacion.html?id=' + room.id + '">Ver detalle</a>' +
              '<a class="btn btn--gold" href="reservar.html?room=' + room.id + '">Reservar esta habitación</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<button type="button" class="finder__restart btn--sm link-arrow" data-finder-restart>Empezar de nuevo</button>' +
      '</div>';

    showStep(3);
    setTimeout(function () {
      var r = $(".finder__result");
      if (r) r.classList.add("show");
    }, 20);

    var restart = $("[data-finder-restart]");
    if (restart) restart.addEventListener("click", function () {
      answers = {};
      $$('[data-answer]').forEach(function (b) { b.classList.remove("picked"); });
      showStep(1);
    });
  }

  $$("[data-answer]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parts = btn.getAttribute("data-answer").split(":");
      var group = parts[0], value = parts[1];
      answers[group] = value;
      pick(btn, group);
      setTimeout(function () {
        if (group === "travelers") showStep(2);
        else reveal();
      }, 220);
    });
  });

  var back = $("[data-finder-back]");
  if (back) back.addEventListener("click", function () { showStep(1); });

  showStep(1);
})();
