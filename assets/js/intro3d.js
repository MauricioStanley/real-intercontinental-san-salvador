/* ============================================================
   Apertura 3D — solo portada, una vez por sesión.
   Un "gema" facetada en degradado dorado (Three.js) que se
   forma y gira antes de revelar el sitio. Se omite por completo
   si: ya se vio en esta sesión, el usuario pide menos movimiento,
   pide ahorrar datos, o Three.js/WebGL no están disponibles —
   en cualquiera de esos casos el hero real aparece de inmediato,
   sin overlay.
   ============================================================ */
(function () {
  "use strict";

  var root = document.getElementById("intro3d");
  if (!root) return; // solo existe en index.html

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  var seen = false;
  try { seen = sessionStorage.getItem("ic_intro_seen") === "1"; } catch (e) {}

  function remove() {
    if (root && root.parentNode) root.parentNode.removeChild(root);
    document.body.style.overflow = "";
  }
  function markSeen() {
    try { sessionStorage.setItem("ic_intro_seen", "1"); } catch (e) {}
  }

  if (reduce || saveData || seen) { remove(); return; }

  document.body.style.overflow = "hidden";
  root.classList.add("is-active");

  var canvas = document.getElementById("intro3d-canvas");
  var mark = root.querySelector(".intro3d__mark");
  var skipBtn = root.querySelector(".intro3d__skip");
  var raf = null;
  var done = false;

  function finish() {
    if (done) return;
    done = true;
    if (raf) cancelAnimationFrame(raf);
    markSeen();
    root.classList.add("is-done");
    root.style.transition = "opacity .5s ease";
    root.style.opacity = "0";
    setTimeout(remove, 520);
  }

  setTimeout(function () { if (!done) skipBtn.classList.add("show"); }, 900);
  skipBtn.addEventListener("click", finish);
  document.addEventListener("keydown", function onKey(e) {
    if (e.key === "Escape") { finish(); document.removeEventListener("keydown", onKey); }
  });
  // un toque en cualquier parte, pasado el primer segundo, también omite
  setTimeout(function () {
    if (!done) root.addEventListener("click", finish, { once: true });
  }, 1000);

  var HAS_3D = !!(window.THREE && canvas && canvas.getContext && (function () {
    try { return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))); }
    catch (e) { return false; }
  })());

  if (!HAS_3D) {
    // sin Three.js/WebGL: igual se disfruta la marca y el fundido, sin geometría 3D
    mark.classList.add("show");
    setTimeout(finish, 2000);
    return;
  }

  try {
    var THREE = window.THREE;
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    var dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0c2c24, 1);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 7.4);

    scene.add(new THREE.HemisphereLight(0xe7cd93, 0x0c2c24, 0.6));
    var key = new THREE.DirectionalLight(0xffe9bd, 1.8); key.position.set(4, 5, 6); scene.add(key);
    var rim = new THREE.DirectionalLight(0xd6b568, 1.0); rim.position.set(-5, -2, -4); scene.add(rim);

    var geo = new THREE.IcosahedronGeometry(1.9, 1);
    var mat = new THREE.MeshStandardMaterial({
      color: 0xc2993f, metalness: 0.86, roughness: 0.26,
      emissive: 0x2a1c06, emissiveIntensity: 0.35, flatShading: true
    });
    var gem = new THREE.Mesh(geo, mat);
    var edgesGeo = new THREE.EdgesGeometry(geo);
    var edges = new THREE.LineSegments(edgesGeo, new THREE.LineBasicMaterial({ color: 0xf3e3bb, transparent: true, opacity: 0.55 }));
    edges.scale.setScalar(1.004);
    gem.add(edges);
    gem.scale.setScalar(0.0001);
    gem.rotation.set(0.4, -0.6, 0.15);
    scene.add(gem);

    function easeOutBack(t) { var c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }

    var DUR_IN = 950, DUR_HOLD = 1450, DUR_OUT = 650;
    var TOTAL = DUR_IN + DUR_HOLD + DUR_OUT;
    var start = null;

    function tick(ts) {
      if (done) return;
      if (!start) start = ts;
      var el = ts - start;

      if (el < DUR_IN) {
        var p = Math.min(el / DUR_IN, 1);
        gem.scale.setScalar(Math.max(0.0001, easeOutBack(p)));
        gem.rotation.y = -0.6 + p * 1.1;
        gem.rotation.x = 0.4 - p * 0.25;
      } else if (el < DUR_IN + DUR_HOLD) {
        gem.scale.setScalar(1);
        var hp = (el - DUR_IN) / DUR_HOLD;
        gem.rotation.y = 0.5 + hp * 1.5;
        gem.rotation.x = 0.15 + Math.sin(hp * Math.PI) * 0.08;
        if (!mark.classList.contains("show")) mark.classList.add("show");
      } else if (el < TOTAL) {
        gem.rotation.y += 0.018;
      } else {
        finish();
        renderer.dispose();
        return;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }

    function onResize() {
      var w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onResize);

    raf = requestAnimationFrame(tick);
  } catch (e) {
    mark.classList.add("show");
    setTimeout(finish, 1400);
  }
})();
