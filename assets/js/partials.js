/* Footer compartido — se inyecta en [data-footer] */
(function () {
  var el = document.querySelector("[data-footer]");
  if (!el) return;
  el.innerHTML = '' +
  '<div class="wrap">' +
    '<div class="footer-grid">' +
      '<div>' +
        '<a class="brand" href="index.html">' +
          '<span class="brand__mark" aria-hidden="true"><svg viewBox="0 0 30 42"><path d="M15 1c5 6 9 10 9 20s-4 14-9 20C10 35 6 31 6 21S10 7 15 1Z" fill="#c2993f"/><path d="M11 15h8v2h-2.5v8H19v2h-8v-2h2.5v-8H11Z" fill="#0d2820"/></svg></span>' +
          '<span class="brand__word"><b>InterContinental</b><span>San Salvador</span></span>' +
        '</a>' +
        '<p class="muted" style="margin-top:16px;max-width:34ch">Boulevard de los Héroes y Calle Sisimiles, San Salvador 0544, El Salvador.</p>' +
        '<div class="footer-social">' +
          '<a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.5C22 1.4 20.6 1 19 1c-3 0-5 2-5 5v4h-3v4h3v8z"/></svg></a>' +
          '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
          '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 22 10.8 22 14.2V21h-4v-6c0-1.43-.03-3.28-2-3.28-2 0-2.3 1.56-2.3 3.17V21H9z"/></svg></a>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<h4>Hotel</h4>' +
        '<ul>' +
          '<li><a href="habitaciones.html">Habitaciones</a></li>' +
          '<li><a href="gastronomia.html">Gastronomía</a></li>' +
          '<li><a href="spa-bienestar.html">Spa &amp; Bienestar</a></li>' +
          '<li><a href="eventos.html">Eventos y bodas</a></li>' +
          '<li><a href="galeria.html">Galería</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h4>Reservas</h4>' +
        '<ul>' +
          '<li><a href="reservar.html">Reservar en línea</a></li>' +
          '<li><a href="ofertas.html">Ofertas y paquetes</a></li>' +
          '<li>Reservas: <a href="tel:21367606">213 67606</a></li>' +
          '<li>Recepción: <a href="tel:+50322113333">+503 2211 3333</a></li>' +
          '<li><a href="mailto:inter.sal@r-hr.com">inter.sal@r-hr.com</a></li>' +
        '</ul>' +
      '</div>' +
      '<div>' +
        '<h4>Boletín</h4>' +
        '<p class="muted" style="margin-bottom:14px">Ofertas exclusivas y novedades del hotel, un correo al mes.</p>' +
        '<form data-demo class="stack" style="gap:10px">' +
          '<input style="width:100%;border:1px solid rgba(255,255,255,.2);background:transparent;padding:12px 14px;color:#fff" type="email" required placeholder="Tu correo electrónico" aria-label="Tu correo electrónico">' +
          '<button class="btn btn--gold btn--sm btn--block" type="submit">Suscribirme</button>' +
          '<small data-demo-msg hidden style="color:var(--gold-soft)"></small>' +
        '</form>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<p>© <span data-year>2026</span> Real InterContinental San Salvador. Operado bajo licencia de IHG Hotels &amp; Resorts.</p>' +
      '<nav><a href="privacidad.html">Privacidad</a><a href="privacidad.html">Términos</a><a href="ubicacion.html">Contacto</a></nav>' +
    '</div>' +
  '</div>';
})();
