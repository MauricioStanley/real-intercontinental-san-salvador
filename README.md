# Real InterContinental San Salvador — sitio web

Sitio estático multi-página para la propiedad **Real InterContinental San Salvador**
(Boulevard de los Héroes, San Salvador, El Salvador).

Construido sin frameworks: HTML + CSS + JavaScript vanilla. No requiere build.

## Cómo verlo

Cualquier servidor estático sirve. Por ejemplo:

```bash
python -m http.server 4321
```

Y abrir <http://localhost:4321/index.html>.

## Estructura

```
index.html            Inicio (hero, barra de reserva, secciones destacadas)
habitaciones.html     Listado de habitaciones (render desde data.js)
habitacion.html       Detalle de habitación  (?id=classic|superior|family|junior-suite|club|suite)
gastronomia.html      Dining Gallery: Faísca do Brasil, Picasso, NAU, Azul
spa-bienestar.html    Piscina, InterContinental Spa, fitness center
eventos.html          Salones, tabla de capacidades y formulario de cotización
ofertas.html          Paquetes y tarifas (render desde data.js)
galeria.html          Grid con lightbox accesible (teclado + flechas)
ubicacion.html        Mapa, distancias, datos de contacto y formulario
reservar.html         Motor de reservas de demostración (5 pasos)
privacidad.html       Aviso de privacidad y términos (placeholder)

assets/
  css/styles.css      Sistema de diseño completo (tokens, componentes, utilidades)
  js/data.js          Contenido: habitaciones, restaurantes, ofertas, tarifas, extras
  js/main.js          Header al hacer scroll, menú móvil, scroll-reveal, contadores,
                      barra de reserva, lightbox, formularios demo
  js/booking.js       Lógica del motor de reservas (5 pasos, cálculo de total)
  js/partials.js      Footer compartido (se inyecta en [data-footer])
  img/hotel/*.jpg     Fotografía oficial de la propiedad (IHG)
  img/brand/*         Logotipos InterContinental
favicon.svg           Marca "diamante" InterContinental
```

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
  Debe integrarse con el booking engine oficial de IHG antes de publicar.
- Los **precios** de `assets/js/data.js` son de referencia; sustituir por tarifas reales.
- Los **formularios** (`data-demo`) solo simulan el envío. Conectar a un backend o servicio de correo.
- Sustituir `https://www.example.com` en `robots.txt` y `sitemap.xml` por el dominio final,
  y actualizar las URLs `og:image` a rutas absolutas.
- Revisar los textos legales de `privacidad.html` con IHG y asesoría legal local.
- Fuentes vía Google Fonts (Cormorant Garamond + Inter + Jost). Se pueden autoalojar.
- Imágenes: considerar generar variantes `webp`/`avif` y `srcset` para rendimiento.
