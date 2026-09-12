# Real InterContinental San Salvador — sitio web

Sitio estático multi-página para la propiedad **Real InterContinental San Salvador**
(Boulevard de los Héroes, San Salvador, El Salvador).

Construido sin frameworks: HTML + CSS + JavaScript vanilla. No requiere build.
Instalable como app (PWA) y con carga offline básica.

## Cómo verlo

Cualquier servidor estático sirve. Por ejemplo:

```bash
python -m http.server 4321
```

Y abrir <http://localhost:4321/index.html>.

## Estructura

```
index.html            Inicio: hero, barra de reserva, destacados, reserva directa,
                      confianza, experiencias, preguntas frecuentes
habitaciones.html     Listado de habitaciones + comparador (render desde data.js)
habitacion.html       Detalle de habitación  (?id=classic|superior|family|junior-suite|club|suite)
gastronomia.html      Dining Gallery: Faísca do Brasil, Picasso, NAU, Azul
spa-bienestar.html    Piscina, InterContinental Spa, fitness center
eventos.html          Salones, capacidades, celebraciones sociales y cotización
ofertas.html          Paquetes y tarifas (render desde data.js)
experiencias.html     Descubre El Salvador: Surf City, volcanes, Ruta de las Flores…
galeria.html          Grid con lightbox accesible (teclado + flechas)
ubicacion.html        Mapa, distancias, datos de contacto y formulario
reservar.html         Motor de reservas de demostración (5 pasos + calendario de tarifas)
privacidad.html       Aviso de privacidad y términos (placeholder)

assets/
  css/styles.css      Sistema de diseño completo (tokens, componentes, utilidades)
  js/data.js          Contenido: habitaciones, restaurantes, ofertas, tarifas, extras
  js/main.js          Header al hacer scroll, menú móvil, scroll-reveal, contadores,
                      barra de reserva, lightbox, FAQ, comparador, service worker
  js/booking.js       Motor de reservas (5 pasos, calendario de tarifas, total)
  js/partials.js      Footer + barra de anuncio + barra fija de reserva + WhatsApp
  js/i18n.js          Traducción ligera de interfaz: ES (base) · EN · PT
  img/hotel/*.jpg     Fotografía oficial de la propiedad (IHG)
  img/icons/*.png     Iconos de la PWA (generados)
  img/brand/*         Logotipos InterContinental
favicon.svg           Marca "diamante" InterContinental
manifest.json · sw.js PWA (instalable, caché offline)
```

## Funcionalidades

- **Apertura 3D** en la portada (Three.js): una gema facetada dorada se forma y gira
  antes de revelar el sitio — una sola vez por sesión, omitible, y se salta sola si
  el navegador pide menos movimiento, ahorra datos o no soporta WebGL.
- **Validación de formularios en vivo**: cada campo muestra un check dorado al
  quedar válido y un aviso en rojo ladrillo si hay un error, mientras se escribe.
  Cubre el asistente de reserva, el formulario de eventos, el de contacto y el
  boletín — sin `alert()` nativos.
- **Barra de reserva fija** que aparece al hacer scroll en todas las páginas.
- **Motor de reservas** de 5 pasos con **calendario de tarifas indicativas** por día
  (temporada alta/baja y fin de semana), resumen de precio en vivo e impuestos.
- **Comparador de habitaciones** en `habitaciones.html`.
- **Reserva directa**: bloque de ventajas frente a las OTA (mejor precio, sin cargos,
  cancelación flexible, mejora de categoría, bebida de bienvenida, late check-out).
- **Barra de confianza** (Google, Tripadvisor, Booking, IHG Torch Bearer).
- **Preguntas frecuentes** con acordeón y datos estructurados `FAQPage`.
- **Descubre El Salvador**: página de experiencias con la conserjería como gancho.
- **WhatsApp** flotante (recepción) y en el footer — canal clave en la región.
- **Barra de anuncio** descartable (recordada en `localStorage`).
- **Idiomas ES · EN · PT** sin recargar, con memoria de preferencia.
- **PWA**: `manifest.json` + service worker (carga instantánea / uso sin conexión).
- SEO: `Hotel` + `FAQPage` en JSON-LD, `sitemap.xml`, Open Graph, `theme-color`.

## Datos de la propiedad

- 226 habitaciones y suites
- Restaurantes: Faísca do Brasil (rodizio — único del país), Picasso (horno de piedra),
  NAU Sushi Lounge & Bar; bar de piscina Azul
- InterContinental Spa, piscina renovada, sauna finlandés, fitness center 24 h
- Club InterContinental Lounge
- Check-in 15:00 · Check-out 12:00 · edad mínima 18
- Recepción +503 2211 3333 · Reservas 213 67606 · inter.sal@r-hr.com
- Calificación de huéspedes 4.6/5 · IHG Torch Bearer Award 2021

## Notas para producción

- El **motor de reservas es una maqueta**: no procesa pagos ni se conecta a IHG.
  El **calendario de tarifas** usa precios calculados, no disponibilidad real.
  Debe integrarse con el booking engine oficial de IHG antes de publicar.
- Los **precios** de `assets/js/data.js` son de referencia; sustituir por tarifas reales.
- Los **formularios** (`data-demo`) solo simulan el envío. Conectar a un backend o servicio de correo.
- El **número de WhatsApp** en `assets/js/partials.js` (`WA`) apunta al fijo de recepción;
  cambiar por la línea de WhatsApp real del hotel.
- Las **reseñas y calificaciones** de la barra de confianza son de ejemplo; enlazar a los
  perfiles reales de Google/Tripadvisor/Booking.
- La página **`experiencias.html`** usa texto sin fotos para cada plan; añadir fotografía
  con licencia (o del banco de imágenes de MITUR / la propiedad).
- Sustituir `https://www.example.com` en `robots.txt` y `sitemap.xml` por el dominio final,
  y actualizar las URLs `og:image` a rutas absolutas.
- Revisar los textos legales de `privacidad.html` con IHG y asesoría legal local;
  añadir banner de consentimiento de cookies.
- Fuentes vía Google Fonts (Newsreader + Figtree). Se pueden autoalojar.
- Imágenes: considerar variantes `webp`/`avif` y `srcset` para rendimiento.
- Los iconos de `assets/img/icons/` son generados; reemplazar por el arte oficial de la marca.
