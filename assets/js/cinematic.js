/* ============================================================
   Real InterContinental San Salvador — capa cinemática
   GSAP + ScrollTrigger: parallax de fondo y expansión suave
   de las imágenes al hacer scroll.

   Degradación limpia:
   · prefers-reduced-motion  -> no se activa nada.
   · GSAP no carga (CDN)     -> parallax ligero de respaldo y
                                se quita la clase .cinematic
                                (las imágenes vuelven a su
                                estado normal).
   No toca el "transform" de las imágenes que ya tienen zoom
   en hover (feature / card / offer): esas se expanden con
   clip-path, así el hover sigue intacto.
   ============================================================ */
(function () {
  "use strict";

  var docEl = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Respaldo sin GSAP: parallax ligero ---------- */
  function lightParallax() {
    var els = [].slice.call(document.querySelectorAll("[data-parallax]"));
    if (!els.length || reduce) return;
    var ticking = false;
    function apply() {
      var y = window.scrollY;
      els.forEach(function (el) {
        var s = parseFloat(el.getAttribute("data-parallax")) || 0.12;
        el.style.transform = "translate3d(0," + (y * s).toFixed(2) + "px,0)";
      });
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(apply); ticking = true; }
    }, { passive: true });
    apply();
  }

  if (reduce) { docEl.classList.remove("cinematic"); return; }

  if (!window.gsap || !window.ScrollTrigger) {
    docEl.classList.remove("cinematic");   // revierte los estados iniciales del CSS
    lightParallax();
    return;
  }

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  var mm = gsap.matchMedia();

  mm.add(
    { isMobile: "(max-width: 740px)", isDesktop: "(min-width: 741px)" },
    function (ctx) {
      var k = ctx.conditions.isMobile ? 0.55 : 1;   // amplitudes más discretas en móvil

      /* ---------- 1. HERO / PAGEHERO: parallax del fondo ---------- */
      gsap.utils.toArray(".hero__media img, .pagehero__media img").forEach(function (img) {
        var scene = img.closest(".hero, .pagehero") || img.parentElement;
        gsap.fromTo(
          img,
          { yPercent: 0, scale: 1.08 },
          {
            yPercent: 10 * k,
            scale: 1.18,
            ease: "none",
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

      /* ---------- 2. Entrada del texto del hero (una sola vez) ---------- */
      var heroInner = document.querySelector(".hero__inner");
      if (heroInner && heroInner.children.length) {
        gsap.from(heroInner.children, {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          delay: 0.15
        });
      }

      /* ---------- 3. Imágenes que se EXPANDEN al entrar ----------
         El contenedor recorta el desborde (overflow:hidden), así
         la escala se lee como una expansión fluida. Se añade una
         deriva vertical mínima para dar profundidad. */
      gsap.utils.toArray(".split__media img").forEach(function (img) {
        var box = img.closest(".split__media") || img;
        gsap.fromTo(
          img,
          { scale: 1.16, transformOrigin: "50% 50%" },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: box, start: "top 96%", end: "center 62%", scrub: true }
          }
        );
        gsap.fromTo(
          img,
          { yPercent: -5 * k },
          {
            yPercent: 5 * k,
            ease: "none",
            immediateRender: false,
            scrollTrigger: { trigger: box, start: "top bottom", end: "bottom top", scrub: true }
          }
        );
      });

      /* ---------- 4. Tarjetas con zoom en hover: expansión con clip-path ----------
         No se toca "transform" para no pisar el hover. */
      gsap.utils.toArray(
        ".feature img, .card__media img, .offer__media img, .exp__media img, .gallery-grid img"
      ).forEach(function (img) {
        var box =
          img.closest(
            ".feature, .card__media, .offer__media, .exp__media, .gallery-grid button"
          ) || img;
        gsap.fromTo(
          img,
          { clipPath: "inset(7% 7% 7% 7%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: { trigger: box, start: "top 96%", end: "center 66%", scrub: true }
          }
        );
      });
    }
  );

  /* ---------- Recalcular tras cargar imágenes / fuentes ---------- */
  window.addEventListener("load", function () { window.ScrollTrigger.refresh(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { window.ScrollTrigger.refresh(); });
  }
})();
