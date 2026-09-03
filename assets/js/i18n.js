/* ============================================================
   i18n ligero — Español (base) · English · Português
   Sin dependencias. Traduce por coincidencia exacta de texto,
   guarda el original y reacciona al contenido renderizado por JS.
   ============================================================ */
(function () {
  "use strict";

  var LANGS = { es: "ES", en: "EN", pt: "PT" };
  var STORE = "ic_lang";

  /* --- Diccionarios. Clave = texto en español tal cual aparece. --- */
  var EN = {
    // Navegación y marca
    "Habitaciones": "Rooms",
    "Gastronomía": "Dining",
    "Bienestar": "Wellness",
    "Eventos": "Events",
    "Ofertas": "Offers",
    "Galería": "Gallery",
    "Ubicación": "Location",
    "Reservar": "Book",
    "Reservar ahora": "Book now",
    "San Salvador": "San Salvador",
    "Saltar al contenido": "Skip to content",
    "Inicio": "Home",
    "Abrir menú": "Open menu",

    // Home · hero + intro
    "El lugar para estar": "The place to be",
    "Lujo sofisticado en el corazón de la ciudad: a pasos de Metrocentro Mall, del distrito financiero y del centro histórico. Descanso profundo, gastronomía de autor y el servicio InterContinental.":
      "Sophisticated luxury in the heart of the city: steps from Metrocentro Mall, the business district and the historic center. Deep rest, signature dining and InterContinental service.",
    "Ver habitaciones": "View rooms",
    "Descubre": "Discover",
    "El lobby": "The lobby",
    "Una tradición de hospitalidad, renovada": "A tradition of hospitality, renewed",
    "Desde 1996, el Real InterContinental es el punto de encuentro de San Salvador. Hoy, tras la renovación de sus áreas sociales y de su piscina, combina la calidez local con los estándares de la marca en 111 países.":
      "Since 1996, the Real InterContinental has been San Salvador's meeting point. Today, after the renovation of its social areas and pool, it blends local warmth with the brand's standards across 111 countries.",
    "Habitaciones insonorizadas, tres restaurantes en la Dining Gallery —incluido el único rodizio del país—, spa, fitness center 24 horas y el Club InterContinental para quienes buscan un nivel más de servicio.":
      "Soundproofed rooms, three restaurants in the Dining Gallery —including the only rodizio in the country—, a spa, a 24-hour fitness center and the Club InterContinental for guests who want one more level of service.",
    "Recorrer el hotel": "Tour the hotel",
    "Habitaciones y suites": "Rooms and suites",
    "Restaurantes de autor": "Signature restaurants",
    "Calificación de huéspedes": "Guest rating",
    "Cuatro maneras de vivir el hotel": "Four ways to experience the hotel",
    "De la Clásica a la Suite InterContinental, con ropa de cama de diseño y ventanas insonorizadas.":
      "From the Classic to the InterContinental Suite, with designer bedding and soundproofed windows.",
    "Faísca do Brasil, Picasso y NAU Sushi Lounge & Bar en una sola Dining Gallery.":
      "Faísca do Brasil, Picasso and NAU Sushi Lounge & Bar in a single Dining Gallery.",
    "Spa & Bienestar": "Spa & Wellness",
    "Piscina renovada, InterContinental Spa, sauna finlandés y fitness center 24 horas.":
      "Renovated pool, InterContinental Spa, Finnish sauna and 24-hour fitness center.",
    "Eventos y bodas": "Events and weddings",
    "Bodas, congresos y juntas directivas con catering propio y planificación dedicada.":
      "Weddings, conferences and board meetings with in-house catering and dedicated planning.",
    "Tu espacio en la ciudad": "Your space in the city",
    "226 habitaciones y suites con clima individual, minibar, cafetera e internet de velocidad para streaming. Precios de referencia por noche, sin impuestos.":
      "226 rooms and suites with individual climate control, minibar, coffee maker and streaming-speed internet. Reference prices per night, taxes not included.",
    "Ver detalle": "View details",
    "Ver detalle y reservar": "View details and book",
    "Desde": "From",
    "desde": "from",
    "Detalle de habitación": "Room details",
    "Hotel de lujo junto a Metrocentro": "Luxury hotel next to Metrocentro",
    "1 King o 2 Queen": "1 King or 2 Queen",
    "Ver todas las habitaciones": "View all rooms",
    "Ver menús y horarios": "View menus and hours",
    "Explorar el spa": "Explore the spa",
    "Ver todas las ofertas": "View all offers",
    "En el centro de todo": "At the center of it all",
    "Cómo llegar": "Directions",
    "Tu estancia empieza aquí": "Your stay begins here",
    "Mejor tarifa garantizada, cancelación flexible y atención personalizada cuando reservas en el sitio oficial del hotel.":
      "Best rate guaranteed, flexible cancellation and personal attention when you book on the hotel's official site.",
    "Comprobar disponibilidad": "Check availability",

    // Barra de reserva
    "Entrada": "Check-in",
    "Salida": "Check-out",
    "Huéspedes": "Guests",
    "2 adultos · 0 niños · 1 habitación": "2 adults · 0 children · 1 room",
    "Adultos": "Adults",
    "Niños": "Children",
    "Código / Tarifa": "Code / Rate",
    "Opcional": "Optional",
    "Consultar": "Search",
    "Buscar disponibilidad": "Search availability",

    // Reseñas
    "4.6 / 5 · 1,622 opiniones": "4.6 / 5 · 1,622 reviews",
    "Distinguido con el Torch Bearer Award 2021 de IHG, la máxima distinción de servicio de la compañía.":
      "Awarded IHG's 2021 Torch Bearer Award, the company's highest service distinction.",
    "\"Ubicación inmejorable y un servicio que se siente genuino. El desayuno en Picasso es de otro nivel.\"":
      "\"Unbeatable location and service that feels genuine. Breakfast at Picasso is on another level.\"",
    "Huésped de negocios · Guatemala": "Business guest · Guatemala",
    "\"La piscina renovada es un remanso en plena ciudad. Volveríamos solo por eso.\"":
      "\"The renovated pool is an oasis in the middle of the city. We would come back just for that.\"",
    "Escapada de fin de semana · San Salvador": "Weekend getaway · San Salvador",
    "\"Nos casamos en el salón y el equipo de eventos cuidó cada detalle. Impecable.\"":
      "\"We got married in the ballroom and the events team took care of every detail. Flawless.\"",
    "Boda de 180 invitados": "Wedding for 180 guests",

    // Footer
    "Boulevard de los Héroes y Calle Sisimiles, San Salvador 0544, El Salvador.":
      "Boulevard de los Héroes and Calle Sisimiles, San Salvador 0544, El Salvador.",
    "Hotel": "Hotel",
    "Reservas": "Reservations",
    "Reservar en línea": "Book online",
    "Ofertas y paquetes": "Offers and packages",
    "Reservas:": "Reservations:",
    "Recepción:": "Front desk:",
    "Boletín": "Newsletter",
    "Ofertas exclusivas y novedades del hotel, un correo al mes.":
      "Exclusive offers and hotel news, one email a month.",
    "Tu correo electrónico": "Your email address",
    "Suscribirme": "Subscribe",
    "Real InterContinental San Salvador. Operado bajo licencia de IHG Hotels & Resorts.":
      "Real InterContinental San Salvador. Operated under license from IHG Hotels & Resorts.",
    "Privacidad": "Privacy",
    "Términos": "Terms",
    "Contacto": "Contact",
    "Gracias. Hemos recibido tu solicitud; un ejecutivo del hotel te contactará dentro de las próximas 24 horas.":
      "Thank you. We have received your request; a hotel representative will contact you within the next 24 hours.",
    "Gracias. Hemos recibido tu solicitud; un ejecutivo del hotel te contactará dentro de las próximas 24 horas.":
      "Thank you. We have received your request; a hotel representative will contact you within the next 24 hours.",

    // Habitaciones (página + tarjetas de data.js)
    "Habitaciones y Suites": "Rooms and Suites",
    "Descanso que se nota al día siguiente": "Rest you feel the next day",
    "Todas nuestras habitaciones incluyen ropa de cama de diseño, almohadas de pluma, ventanas insonorizadas, clima individual, minibar, cafetera, caja fuerte e internet de velocidad para streaming. Precios en USD por noche, sin impuestos, sujetos a disponibilidad.":
      "Every room includes designer bedding, feather pillows, soundproofed windows, individual climate control, minibar, coffee maker, safe and streaming-speed internet. Prices in USD per night, taxes not included, subject to availability.",
    "Wi-Fi para streaming": "Streaming Wi-Fi",
    "Punto de acceso individual en cada habitación": "Individual access point in every room",
    "Clima individual": "Individual climate control",
    "Control de temperatura en cada llave": "Temperature control in every room",
    "Ventanas insonorizadas": "Soundproofed windows",
    "Silencio en plena ciudad": "Quiet in the middle of the city",
    "Servicio a la habitación": "Room service",
    "Carta disponible las 24 horas": "Menu available 24 hours",
    "¿Lista tu fecha?": "Dates ready?",
    "Consulta disponibilidad y tarifas en tiempo real. Mejor precio garantizado en el sitio oficial.":
      "Check availability and rates in real time. Best price guaranteed on the official site.",
    "/ noche": "/ night",
    "/ noche · sin impuestos": "/ night · taxes not included",
    "1 King / 2 Queen": "1 King / 2 Queen",
    "2 huéspedes": "2 guests",
    "3 huéspedes": "3 guests",
    "4 huéspedes": "4 guests",
    "1 King": "1 King",
    "2 Queen": "2 Queen",
    "1 King + sofá": "1 King + sofa",
    "1 King + sofá cama": "1 King + sofa bed",
    "1 King + sala independiente": "1 King + separate living room",
    "Ciudad o jardín": "City or garden view",
    "Ciudad, pisos altos": "City, high floors",
    "Panorámica de la ciudad": "Panoramic city view",
    "Lounge privado": "Private lounge",
    "Habitación Clásica": "Classic Room",
    "Habitación Superior": "Superior Room",
    "Habitación Familiar (2 Queen)": "Family Room (2 Queen)",
    "Junior Suite": "Junior Suite",
    "Habitación Club InterContinental": "Club InterContinental Room",
    "Club InterContinental": "Club InterContinental",
    "Suite InterContinental": "InterContinental Suite",
    "Confort esencial InterContinental con escritorio funcional y ventanas insonorizadas.":
      "Essential InterContinental comfort with a functional desk and soundproofed windows.",
    "Confort esencial InterContinental: cama de diseño, ventanas insonorizadas e internet de alta velocidad.":
      "Essential InterContinental comfort: designer bed, soundproofed windows and high-speed internet.",
    "Nuestras habitaciones Clásicas combinan el descanso profundo con un escritorio funcional para el viajero de negocios. Edredones de diseño, almohadas de pluma, ventanas insonorizadas, minibar, cafetera y punto de acceso individual a internet para streaming.":
      "Our Classic rooms pair deep rest with a functional desk for the business traveler. Designer duvets, feather pillows, soundproofed windows, minibar, coffee maker and an individual internet access point for streaming.",
    "En pisos altos, con más luz natural y una zona de estar para trabajar o descansar.":
      "On high floors, with more natural light and a sitting area to work or relax.",
    "Ubicadas en los niveles superiores de la torre, ofrecen vistas abiertas de San Salvador y el volcán. Incluyen sillón de lectura, estación de trabajo ampliada y acceso preferente al fitness center 24 horas.":
      "Located on the upper levels of the tower, they offer open views of San Salvador and the volcano. They include a reading chair, an expanded workstation and priority access to the 24-hour fitness center.",
    "Dos camas Queen, espacio para toda la familia y a pasos de Metrocentro.":
      "Two Queen beds, room for the whole family and steps from Metrocentro.",
    "Pensada para familias: dos camas Queen con ropa de cama de diseño, espacio de guardado amplio y baño con tina. A pocos metros del centro comercial Metrocentro y con parqueo en el hotel.":
      "Designed for families: two Queen beds with designer bedding, ample storage and a bathroom with a tub. A few meters from Metrocentro mall, with on-site parking.",
    "Dormitorio y sala integrados, con comedor privado y detalles de bienvenida.":
      "Integrated bedroom and living area, with a private dining table and welcome amenities.",
    "Dormitorio y sala integrados, con comedor privado y amenidad de bienvenida.":
      "Integrated bedroom and living area, with a private dining table and a welcome amenity.",
    "Un ambiente amplio con dormitorio King, sala de estar con sofá y comedor privado para reuniones informales. Incluye amenidad de bienvenida, prensa digital y late check-out sujeto a disponibilidad.":
      "A spacious layout with a King bedroom, a living area with a sofa and a private dining table for informal meetings. Includes a welcome amenity, digital press and late check-out subject to availability.",
    "Con acceso al Club InterContinental Lounge: desayuno, hora del cóctel y check-in privado.":
      "With access to the Club InterContinental Lounge: breakfast, cocktail hour and private check-in.",
    "Acceso al lounge con desayuno, hora del cóctel y check-in privado.":
      "Lounge access with breakfast, cocktail hour and private check-in.",
    "La experiencia más completa del hotel. Acceso al Club InterContinental Lounge con desayuno continental, aperitivos durante la tarde y hora del cóctel con hors d'oeuvres. Check-in y check-out privados y conserjería dedicada.":
      "The hotel's most complete experience. Access to the Club InterContinental Lounge with continental breakfast, afternoon snacks and cocktail hour with hors d'oeuvres. Private check-in and check-out and a dedicated concierge.",
    "Sala independiente, comedor para seis y todos los privilegios del Club InterContinental.":
      "Separate living room, dining for six and all the privileges of the Club InterContinental.",
    "Nuestra suite insignia: dormitorio King separado, sala de estar independiente, comedor para seis personas y medio baño para visitas. Incluye todos los beneficios del Club InterContinental y traslado de cortesía dentro de la ciudad.":
      "Our flagship suite: separate King bedroom, independent living room, dining for six and a half bath for guests. Includes all Club InterContinental benefits and a complimentary transfer within the city.",
    // amenidades de habitación (data.js)
    "Wi-Fi de alta velocidad": "High-speed Wi-Fi",
    "Aire acondicionado individual": "Individual air conditioning",
    "TV de pantalla plana": "Flat-screen TV",
    "Minibar y cafetera": "Minibar and coffee maker",
    "Caja fuerte": "Safe",
    "Amenidades de baño premium": "Premium bath amenities",
    "Zona de estar": "Sitting area",
    "Vistas a la ciudad y al volcán": "City and volcano views",
    "Dos camas Queen": "Two Queen beds",
    "Baño con tina": "Bathroom with tub",
    "Cuna disponible sin costo": "Crib available at no charge",
    "Menú infantil en el restaurante": "Children's menu at the restaurant",
    "Sala de estar y comedor": "Living and dining area",
    "Amenidad de bienvenida": "Welcome amenity",
    "Bata y pantuflas": "Robe and slippers",
    "Late check-out sujeto a disponibilidad": "Late check-out subject to availability",
    "Prensa digital": "Digital press",
    "Acceso al Club Lounge": "Club Lounge access",
    "Desayuno y hora del cóctel": "Breakfast and cocktail hour",
    "Check-in / check-out privado": "Private check-in / check-out",
    "Conserjería dedicada": "Dedicated concierge",
    "Prensado de 2 prendas al día": "Pressing of 2 garments per day",
    "Sala de reuniones (2 h) sujeta a disponibilidad": "Meeting room (2 h) subject to availability",
    "Sala y comedor independientes": "Separate living and dining rooms",
    "Todos los beneficios Club": "All Club benefits",
    "Medio baño para visitas": "Half bath for guests",
    "Traslado de cortesía en la ciudad": "Complimentary transfer within the city",
    "Amenidad premium de bienvenida": "Premium welcome amenity",
    "Planchado ilimitado": "Unlimited pressing",
    "Incluye": "Includes",
    "Superficie": "Size",
    "Camas": "Beds",
    "Capacidad": "Capacity",
    "Reservar esta habitación": "Book this room",
    "Ver otras habitaciones": "View other rooms",

    // Gastronomía
    "Probar, saborear, repetir": "Taste, savor, repeat",
    "En una sola planta reunimos el único rodizio del país, un horno de piedra mediterráneo, una barra de sushi de estándar japonés y un bar de piscina. Reservas al":
      "On a single floor we bring together the only rodizio in the country, a Mediterranean stone oven, a Japanese-standard sushi bar and a pool bar. Reservations at",
    "Desayuno buffet en Picasso": "Buffet breakfast at Picasso",
    "Estación de huevos al momento, panadería propia, fruta de temporada y especialidades salvadoreñas. Incluido en varias de nuestras tarifas.":
      "Made-to-order egg station, in-house bakery, seasonal fruit and Salvadoran specialties. Included in several of our rates.",
    "Ver tarifas con desayuno": "View rates with breakfast",
    "Reservar mesa": "Book a table",
    "Faísca do Brasil": "Faísca do Brasil",
    "Rodizio brasileño": "Brazilian rodizio",
    "Almuerzo y cena · 12:00 – 23:00": "Lunch and dinner · 12:00 – 23:00",
    "El único rodizio auténtico del país: cortes a la brasa servidos en la mesa sin límite.":
      "The country's only authentic rodizio: grilled cuts served at your table without limit.",
    "El único rodizio auténtico del país. Cortes a la brasa servidos en la mesa, sin límite.":
      "The country's only authentic rodizio. Grilled cuts served at your table, without limit.",
    "Passadores recorren el salón con espadas de picaña, maminha, cordero y piña asada. Acompaña con una barra de ensaladas y guarniciones de inspiración sudamericana. Reserva recomendada para cenas de fin de semana.":
      "Passadores move through the room with skewers of picanha, maminha, lamb and grilled pineapple. Pair it with a salad bar and South American-inspired sides. Reservation recommended for weekend dinners.",
    "Picasso": "Picasso",
    "Horno de piedra y parrilla": "Stone oven and grill",
    "Horno de piedra y parrilla mediterránea. Desayuno buffet y cena a la carta.":
      "Stone oven and Mediterranean grill. Buffet breakfast and à la carte dinner.",
    "Desayuno buffet y cena · 6:00 – 10:30 / 18:00 – 22:30": "Buffet breakfast and dinner · 6:00 – 10:30 / 18:00 – 22:30",
    "Cocina mediterránea de horno de leña, pizzas artesanales y desayuno buffet.":
      "Wood-fired Mediterranean cuisine, artisan pizzas and a buffet breakfast.",
    "El restaurante todo-día del hotel. Por la mañana, un desayuno buffet completo con estación de huevos y panadería propia; por la noche, pizzas de horno de piedra, pastas frescas y pescados a la llama.":
      "The hotel's all-day restaurant. In the morning, a full buffet breakfast with an egg station and in-house bakery; in the evening, stone-oven pizzas, fresh pasta and flame-grilled fish.",
    "NAU Sushi Lounge & Bar": "NAU Sushi Lounge & Bar",
    "Barra de sushi y coctelería": "Sushi bar and cocktails",
    "Cena y bar · 17:00 – 00:00": "Dinner and bar · 17:00 – 00:00",
    "Nigiri de estándar japonés, rolls de autor y coctelería de barra en un ambiente lounge.":
      "Japanese-standard nigiri, signature rolls and bar cocktails in a lounge setting.",
    "Nigiri de estándar japonés, rolls de autor y coctelería de barra.":
      "Japanese-standard nigiri, signature rolls and bar cocktails.",
    "Barra de sushi con producto del día, combinaciones de nigiri y rolls de autor. La carta de cócteles rinde homenaje a los destilados de la región. Música en vivo los jueves.":
      "Sushi bar with catch of the day, nigiri combinations and signature rolls. The cocktail list pays tribute to the region's spirits. Live music on Thursdays.",
    "Azul Pool Bar": "Azul Pool Bar",
    "Bar de piscina": "Pool bar",
    "Todos los días · 10:00 – 19:00": "Daily · 10:00 – 19:00",
    "Cócteles, ceviches y bowls ligeros junto a la piscina rodeada de maquilíshuat.":
      "Cocktails, ceviches and light bowls by the pool, surrounded by maquilíshuat trees.",
    "El rincón más relajado del hotel. Aguas frescas, cócteles clásicos y una carta ligera de ceviches, tostadas y bowls para disfrutar en las tumbonas.":
      "The most relaxed corner of the hotel. Fresh waters, classic cocktails and a light menu of ceviches, tostadas and bowls to enjoy on the loungers.",

    // Bienestar
    "Tiempo para ti": "Time for yourself",
    "Un oasis en plena ciudad": "An oasis in the middle of the city",
    "La piscina al aire libre fue rediseñada para ofrecer un oasis de calma de la mañana a la noche. El InterContinental Spa suma masajes, envolturas corporales, manicura, pedicura y sauna finlandés.":
      "The outdoor pool was redesigned to offer an oasis of calm from morning to night. The InterContinental Spa adds massages, body wraps, manicures, pedicures and a Finnish sauna.",
    "La piscina al aire libre fue rediseñada para ofrecer un ambiente de calma de la mañana a la noche: nuevas tumbonas, sombra generosa y jardín tropical con maquilíshuat, el árbol nacional de El Salvador.":
      "The outdoor pool was redesigned to offer a calm setting from morning to night: new loungers, generous shade and a tropical garden with maquilíshuat, El Salvador's national tree.",
    "Piscina renovada": "Renovated pool",
    "La piscina": "The pool",
    "Piscina al aire libre y Azul Pool Bar": "Outdoor pool and Azul Pool Bar",
    "Fitness center abierto 24 horas": "Fitness center open 24 hours",
    "Rituales de spa para pareja y cabinas individuales": "Couples spa rituals and individual cabins",
    "Explorar el spa": "Explore the spa",
    "Abierta todos los días de 6:00 a 21:00": "Open daily from 6:00 to 21:00",
    "Azul Pool Bar: cócteles, ceviches y bowls ligeros": "Azul Pool Bar: cocktails, ceviches and light bowls",
    "Toallas y servicio de tumbona incluidos para huéspedes": "Towels and lounger service included for guests",
    "InterContinental Spa": "InterContinental Spa",
    "El spa": "The spa",
    "Rituales que reinician el cuerpo": "Rituals that reset the body",
    "Cabinas individuales y de pareja, con una carta de masajes, envolturas corporales y tratamientos de manos y pies. Completa la experiencia con el sauna finlandés.":
      "Individual and couples cabins, with a menu of massages, body wraps and hand and foot treatments. Complete the experience with the Finnish sauna.",
    "Masajes": "Massages",
    "Relajante, descontracturante y de piedras calientes.": "Relaxing, deep-tissue and hot stone.",
    "Envolturas": "Body wraps",
    "Corporales hidratantes y detoxificantes.": "Hydrating and detoxifying body wraps.",
    "Manicura y pedicura": "Manicure and pedicure",
    "Servicio spa completo.": "Full spa service.",
    "Sauna finlandés": "Finnish sauna",
    "Acceso incluido con cualquier tratamiento.": "Access included with any treatment.",
    "Reservar tratamiento": "Book a treatment",
    "Entrena en tu horario": "Train on your schedule",
    "Fitness center abierto las 24 horas, con equipo cardiovascular, peso libre y zona funcional. Acceso sin costo para huéspedes.":
      "Fitness center open 24 hours, with cardio equipment, free weights and a functional area. Free access for guests.",
    "Cardio y fuerza": "Cardio and strength",
    "Cintas, elípticas, bicicletas y peso libre": "Treadmills, ellipticals, bikes and free weights",
    "Abierto 24/7": "Open 24/7",
    "Acceso con tu llave de habitación": "Access with your room key",
    "Zona funcional": "Functional area",
    "Colchonetas, TRX y kettlebells": "Mats, TRX and kettlebells",
    "Agua y toallas": "Water and towels",
    "Estación de hidratación y toallas frías": "Hydration station and cold towels",
    "Dos noches para desconectar": "Two nights to unwind",
    "Cóctel de bienvenida, desayuno diario y late check-out según disponibilidad con nuestra Escapada de Placer.":
      "Welcome cocktail, daily breakfast and late check-out subject to availability with our Leisure Escape.",
    "Ver la oferta": "View the offer",

    // Ofertas
    "Ofertas y Paquetes": "Offers and Packages",
    "Reserva directo y aprovecha más": "Book direct and get more",
    "La mejor tarifa está siempre aquí. Estas son algunas de nuestras experiencias empaquetadas.":
      "The best rate is always here. These are some of our packaged experiences.",
    "Siempre conviene reservar aquí": "It always pays to book here",
    "Si encuentras una tarifa pública más baja para las mismas fechas y condiciones, la igualamos y aplicamos un descuento adicional. Precios en USD por noche, sin impuestos.":
      "If you find a lower public rate for the same dates and conditions, we match it and apply an additional discount. Prices in USD per night, taxes not included.",
    "Grupos, larga estancia y corporativo": "Groups, long stay and corporate",
    "Escríbenos para tarifas de grupo, convenios de empresa y estancias prolongadas.":
      "Write to us for group rates, corporate agreements and extended stays.",
    "Contactar al hotel": "Contact the hotel",
    "Tarifa Club InterContinental": "Club InterContinental Rate",
    "Sube de categoría a la experiencia Club, con lounge privado y desayuno incluido.":
      "Upgrade to the Club experience, with a private lounge and breakfast included.",
    "Acceso al Club InterContinental Lounge": "Access to the Club InterContinental Lounge",
    "Desayuno continental y hora del cóctel diaria": "Continental breakfast and daily cocktail hour",
    "Check-out desde el lounge": "Check-out from the lounge",
    "por noche · impuestos no incluidos": "per night · taxes not included",
    "Cena, Alojamiento y Desayuno": "Dinner, Bed and Breakfast",
    "Tarifa totalmente flexible con desayuno y cena de tres tiempos en un restaurante del hotel.":
      "Fully flexible rate with breakfast and a three-course dinner at a hotel restaurant.",
    "Desayuno buffet para dos": "Buffet breakfast for two",
    "Cena de menú fijo o buffet en restaurante designado": "Set-menu or buffet dinner at a designated restaurant",
    "Cancelación flexible": "Flexible cancellation",
    "Escapada de Placer": "Leisure Escape",
    "Dos noches para desconectar, con cóctel de bienvenida y late check-out.":
      "Two nights to unwind, with a welcome cocktail and late check-out.",
    "Cóctel de bienvenida para dos": "Welcome cocktail for two",
    "Desayuno buffet completo cada día": "Full buffet breakfast every day",
    "Desayuno buffet cada día": "Buffet breakfast every day",
    "Late check-out y parqueo según disponibilidad": "Late check-out and parking subject to availability",
    "Late check-out según disponibilidad": "Late check-out subject to availability",
    "Estancia mínima de 2 noches": "Minimum stay of 2 nights",
    "por noche · mínimo 2 noches": "per night · minimum 2 nights",
    "/ noche · mín. 2": "/ night · min. 2",
    "Family Getaway": "Family Getaway",
    "Los niños se hospedan y desayunan gratis; ubicación ideal junto a Metrocentro.":
      "Kids stay and eat breakfast free; ideal location next to Metrocentro.",
    "Hasta 2 menores sin costo en la habitación de los padres": "Up to 2 children free in the parents' room",
    "Desayuno gratis para menores de 12 años": "Free breakfast for children under 12",
    "Regalo de bienvenida infantil": "Children's welcome gift",

    // Eventos
    "Eventos y Bodas": "Events and Weddings",
    "Congresos y galas": "Conferences and galas",
    "Un solo lugar para toda la producción": "One place for the whole production",
    "Salones modulares con luz natural, foyer independiente, catering propio de la Dining Gallery y 226 habitaciones para tus invitados. A un costado de Metrocentro y del distrito financiero.":
      "Modular ballrooms with natural light, an independent foyer, in-house catering from the Dining Gallery and 226 rooms for your guests. Next to Metrocentro and the business district.",
    "Coordinador de eventos dedicado de principio a fin": "A dedicated events coordinator from start to finish",
    "Menús de banquete, coffee breaks y estaciones de autor": "Banquet menus, coffee breaks and signature stations",
    "Equipo audiovisual, escenario y pantallas": "Audiovisual equipment, stage and screens",
    "Tarifas preferenciales de alojamiento para grupos": "Preferential room rates for groups",
    "Salones y montajes": "Ballrooms and setups",
    "Capacidad aproximada por salón según el tipo de montaje. Los salones Gran Salón A+B+C se combinan para eventos de hasta 600 personas.":
      "Approximate capacity per ballroom by setup type. The Grand Ballroom A+B+C combine for events of up to 600 people.",
    "Salón": "Ballroom",
    "Banquete": "Banquet",
    "Cóctel": "Cocktail",
    "Auditorio": "Theater",
    "Escuela": "Classroom",
    "Gran Salón (A+B+C)": "Grand Ballroom (A+B+C)",
    "Salón A": "Ballroom A",
    "Salón B": "Ballroom B",
    "Salón C": "Ballroom C",
    "Sala Junta Directiva": "Boardroom",
    "14 (mesa U)": "14 (U-shape)",
    "Terraza Jardín": "Garden Terrace",
    "Bodas": "Weddings",
    "El día perfecto, cuidado al detalle": "The perfect day, cared for down to the detail",
    "Desde la ceremonia civil en la terraza jardín hasta la fiesta en el Gran Salón. Nuestro equipo se encarga del montaje, el menú, la pastelería y la noche de bodas de cortesía para los novios.":
      "From the civil ceremony on the garden terrace to the party in the Grand Ballroom. Our team handles the setup, the menu, the pastry and a complimentary wedding night for the couple.",
    "Menús de degustación previos con el chef": "Tasting menus with the chef beforehand",
    "Suite nupcial con amenidad especial": "Bridal suite with a special amenity",
    "Tarifas de grupo y bloque de habitaciones para invitados": "Group rates and a room block for guests",
    "Cuéntanos sobre tu evento": "Tell us about your event",
    "Responde en menos de 24 horas hábiles con una propuesta a la medida.":
      "We reply in under 24 business hours with a tailored proposal.",
    "Nombre y apellido": "First and last name",
    "Correo electrónico": "Email address",
    "Teléfono": "Phone",
    "Tipo de evento": "Event type",
    "Boda": "Wedding",
    "Congreso o convención": "Conference or convention",
    "Reunión corporativa": "Corporate meeting",
    "Celebración social": "Social celebration",
    "Otro": "Other",
    "Fecha tentativa": "Tentative date",
    "Número de invitados": "Number of guests",
    "Detalles adicionales": "Additional details",
    "Solicitar cotización": "Request a quote",
    "Horario, montaje, requerimientos de audio, alojamiento…": "Schedule, setup, audio requirements, accommodation…",

    // Ubicación
    "Ubicación y Contacto": "Location and Contact",
    "Boulevard de los Héroes": "Boulevard de los Héroes",
    "Dirección": "Address",
    "Boulevard de los Héroes y Calle Sisimiles, San Salvador 0544, El Salvador":
      "Boulevard de los Héroes and Calle Sisimiles, San Salvador 0544, El Salvador",
    "Blvd. de los Héroes y Calle Sisimiles, San Salvador 0544, El Salvador":
      "Blvd. de los Héroes and Calle Sisimiles, San Salvador 0544, El Salvador",
    "Metrocentro": "Metrocentro",
    "Contiguo al centro comercial más grande de la ciudad": "Next to the largest mall in the city",
    "Contiguo al centro comercial más grande de la ciudad, un puente peatonal conecta el hotel con Metrocentro":
      "Next to the largest mall in the city; a pedestrian bridge connects the hotel with Metrocentro",
    "Centro histórico": "Historic center",
    "A 10 minutos: Plaza Libertad y Catedral Metropolitana": "10 minutes away: Plaza Libertad and the Metropolitan Cathedral",
    "Aeropuerto": "Airport",
    "SAL — Monseñor Óscar Arnulfo Romero, aprox. 45 min": "SAL — Monseñor Óscar Arnulfo Romero, approx. 45 min",
    "Coordenadas": "Coordinates",
    "Recepción": "Front desk",
    "Correo": "Email",
    "Check-in": "Check-in",
    "3:00 p. m. · Check-out 12:00 m. d. · Edad mínima 18": "3:00 p.m. · Check-out 12:00 noon · Minimum age 18",
    "Cómo llegar en auto": "Driving directions",
    "Abrir en Waze": "Open in Waze",
    "Todo a la mano": "Everything within reach",
    "0 min": "0 min",
    "10 min": "10 min",
    "12 min": "12 min",
    "45 min": "45 min",
    "Metrocentro Mall (contiguo)": "Metrocentro Mall (adjacent)",
    "Centro histórico y catedral": "Historic center and cathedral",
    "Zona Rosa y San Benito": "Zona Rosa and San Benito",
    "Aeropuerto Internacional (SAL)": "International Airport (SAL)",
    "Traslado privado al aeropuerto disponible bajo reserva (sedán, tarifa por trayecto). Solicítalo en recepción o al reservar.":
      "Private airport transfer available on request (sedan, fare per trip). Request it at the front desk or when booking.",
    "Consultas generales": "General inquiries",
    "Este formulario es para consultas generales, grupos y prensa.": "This form is for general inquiries, groups and press.",
    "¿Vas a reservar? Usa el": "Booking a stay? Use the",
    "motor en línea": "online engine",
    "Nombre": "Name",
    "Asunto": "Subject",
    "Consulta general": "General inquiry",
    "Grupos y convenios": "Groups and agreements",
    "Prensa": "Press",
    "Empleo": "Careers",
    "Mensaje": "Message",
    "Enviar mensaje": "Send message",

    // Privacidad
    "Privacidad y Términos": "Privacy and Terms",
    "Privacidad y términos": "Privacy and terms",
    "Volver al inicio": "Back to home",

    // Reservar (wizard)
    "Reserva tu estancia": "Book your stay",
    "Fechas y huéspedes": "Dates and guests",
    "Elige tu habitación": "Choose your room",
    "Personaliza tu estancia": "Customize your stay",
    "Datos del huésped": "Guest details",
    "Reserva confirmada": "Booking confirmed",
    "Fechas": "Dates",
    "Habitación": "Room",
    "Extras": "Extras",
    "Datos": "Details",
    "Confirmación": "Confirmation",
    "Código promocional": "Promo code",
    "Habitaciones": "Rooms",
    "Mejor tarifa garantizada al reservar directo. Precios en USD; los impuestos se calculan en el paso final.":
      "Best rate guaranteed when you book direct. Prices in USD; taxes are calculated in the final step.",
    "Elegir habitación": "Choose room",
    "Continuar": "Continue",
    "Volver": "Back",
    "Tu estancia": "Your stay",
    "Noches": "Nights",
    "Impuestos y tasa turística": "Taxes and tourism fee",
    "Total estimado": "Estimated total",
    "Tarifa Flexible": "Flexible Rate",
    "Cancelación gratuita hasta 48 h antes": "Free cancellation up to 48 h before",
    "Pago Anticipado": "Advance Purchase",
    "No reembolsable · ahorra 15 %": "Non-refundable · save 15%",
    "Incluye lounge, desayuno y hora del cóctel": "Includes lounge, breakfast and cocktail hour",
    "por noche": "per night",
    "Desayuno buffet": "Buffet breakfast",
    "Por persona, por día": "Per person, per day",
    "Parqueo en el hotel": "On-site parking",
    "Por vehículo, por día": "Per vehicle, per day",
    "Traslado aeropuerto (ida)": "Airport transfer (one way)",
    "Sedán privado · SAL": "Private sedan · SAL",
    "Crédito de Spa": "Spa credit",
    "Válido en InterContinental Spa": "Valid at the InterContinental Spa",
    "Late check-out 16:00": "Late check-out 16:00",
    "Sujeto a disponibilidad": "Subject to availability",
    "Datos del huésped": "Guest details",
    "Revisar y confirmar": "Review and confirm",
    "Apellido": "Last name",
    "País de residencia": "Country of residence",
    "Hora estimada de llegada": "Estimated arrival time",
    "Selecciona…": "Select…",
    "Solicitudes especiales": "Special requests",
    "Cama adicional, piso alto, celebración…": "Extra bed, high floor, celebration…",
    "No se requiere pago ahora. La reserva se garantiza con tus datos de contacto y se liquida directamente en el hotel al momento del check-in. Aplica la política de cancelación de la tarifa elegida.":
      "No payment is required now. The booking is held with your contact details and settled directly at the hotel upon check-in. The cancellation policy of the chosen rate applies.",
    "Por favor completa nombre, apellido, correo y teléfono.": "Please complete first name, last name, email and phone.",
    "Elige una habitación y una tarifa para continuar.": "Choose a room and a rate to continue.",
    "noche(s)": "night(s)",
    "huésped(es)": "guest(s)",
    "Hemos enviado los detalles a": "We have sent the details to",
    "tu correo": "your email",
    "Código de reserva": "Booking code",
    "Huésped": "Guest",
    "Tarifa": "Rate",
    "Volver al inicio": "Back to home",
    "Nueva reserva": "New booking",
    "Esta es una maqueta de demostración: no se procesa ningún pago ni se envía información a IHG. Los precios son de referencia en USD e incluyen el cálculo estimado de IVA (13 %) y tasa turística. La disponibilidad y las tarifas reales se confirman con el hotel.":
      "This is a demo mockup: no payment is processed and no information is sent to IHG. Prices are for reference in USD and include an estimated calculation of VAT (13%) and tourism fee. Real availability and rates are confirmed with the hotel."
  };

  var PT = {
    "Habitaciones": "Quartos", "Gastronomía": "Gastronomia", "Bienestar": "Bem-estar",
    "Eventos": "Eventos", "Ofertas": "Ofertas", "Galería": "Galeria", "Ubicación": "Localização",
    "Reservar": "Reservar", "Reservar ahora": "Reservar agora", "Saltar al contenido": "Ir para o conteúdo",
    "Inicio": "Início", "Abrir menú": "Abrir menu", "San Salvador": "San Salvador",

    "El lugar para estar": "O lugar para estar",
    "Lujo sofisticado en el corazón de la ciudad: a pasos de Metrocentro Mall, del distrito financiero y del centro histórico. Descanso profundo, gastronomía de autor y el servicio InterContinental.":
      "Luxo sofisticado no coração da cidade: a poucos passos do Metrocentro Mall, do distrito financeiro e do centro histórico. Descanso profundo, gastronomia autoral e o serviço InterContinental.",
    "Ver habitaciones": "Ver quartos", "Descubre": "Descubra", "El lobby": "O lobby",
    "Una tradición de hospitalidad, renovada": "Uma tradição de hospitalidade, renovada",
    "Desde 1996, el Real InterContinental es el punto de encuentro de San Salvador. Hoy, tras la renovación de sus áreas sociales y de su piscina, combina la calidez local con los estándares de la marca en 111 países.":
      "Desde 1996, o Real InterContinental é o ponto de encontro de San Salvador. Hoje, após a reforma das áreas sociais e da piscina, une o calor local aos padrões da marca em 111 países.",
    "Habitaciones insonorizadas, tres restaurantes en la Dining Gallery —incluido el único rodizio del país—, spa, fitness center 24 horas y el Club InterContinental para quienes buscan un nivel más de servicio.":
      "Quartos com isolamento acústico, três restaurantes na Dining Gallery —incluindo o único rodízio do país—, spa, fitness center 24 horas e o Club InterContinental para quem busca um nível a mais de serviço.",
    "Recorrer el hotel": "Conhecer o hotel",
    "Habitaciones y suites": "Quartos e suítes", "Restaurantes de autor": "Restaurantes autorais",
    "Calificación de huéspedes": "Avaliação dos hóspedes",
    "Cuatro maneras de vivir el hotel": "Quatro formas de viver o hotel",
    "De la Clásica a la Suite InterContinental, con ropa de cama de diseño y ventanas insonorizadas.":
      "Do Clássico à Suíte InterContinental, com roupa de cama de design e janelas com isolamento acústico.",
    "Faísca do Brasil, Picasso y NAU Sushi Lounge & Bar en una sola Dining Gallery.":
      "Faísca do Brasil, Picasso e NAU Sushi Lounge & Bar em uma só Dining Gallery.",
    "Spa & Bienestar": "Spa & Bem-estar",
    "Piscina renovada, InterContinental Spa, sauna finlandés y fitness center 24 horas.":
      "Piscina renovada, InterContinental Spa, sauna finlandesa e fitness center 24 horas.",
    "Eventos y bodas": "Eventos e casamentos",
    "Bodas, congresos y juntas directivas con catering propio y planificación dedicada.":
      "Casamentos, congressos e reuniões de diretoria com catering próprio e planejamento dedicado.",
    "Tu espacio en la ciudad": "Seu espaço na cidade",
    "226 habitaciones y suites con clima individual, minibar, cafetera e internet de velocidad para streaming. Precios de referencia por noche, sin impuestos.":
      "226 quartos e suítes com climatização individual, frigobar, cafeteira e internet com velocidade para streaming. Preços de referência por noite, sem impostos.",
    "Ver detalle": "Ver detalhes", "Ver detalle y reservar": "Ver detalhes e reservar",
    "Ver todas las habitaciones": "Ver todos os quartos", "Ver menús y horarios": "Ver cardápios e horários",
    "Explorar el spa": "Explorar o spa", "Ver todas las ofertas": "Ver todas as ofertas",
    "En el centro de todo": "No centro de tudo", "Cómo llegar": "Como chegar",
    "Tu estancia empieza aquí": "Sua estadia começa aqui",
    "Mejor tarifa garantizada, cancelación flexible y atención personalizada cuando reservas en el sitio oficial del hotel.":
      "Melhor tarifa garantida, cancelamento flexível e atendimento personalizado ao reservar no site oficial do hotel.",
    "Comprobar disponibilidad": "Ver disponibilidade",

    "Entrada": "Check-in", "Salida": "Check-out", "Huéspedes": "Hóspedes",
    "2 adultos · 0 niños · 1 habitación": "2 adultos · 0 crianças · 1 quarto",
    "Adultos": "Adultos", "Niños": "Crianças", "Código / Tarifa": "Código / Tarifa",
    "Opcional": "Opcional", "Consultar": "Buscar", "Buscar disponibilidad": "Buscar disponibilidade",

    "4.6 / 5 · 1,622 opiniones": "4.6 / 5 · 1.622 avaliações",
    "Distinguido con el Torch Bearer Award 2021 de IHG, la máxima distinción de servicio de la compañía.":
      "Reconhecido com o Torch Bearer Award 2021 da IHG, a maior distinção de serviço da empresa.",
    "Huésped de negocios · Guatemala": "Hóspede a negócios · Guatemala",
    "Escapada de fin de semana · San Salvador": "Escapada de fim de semana · San Salvador",
    "Boda de 180 invitados": "Casamento para 180 convidados",

    "Hotel": "Hotel", "Reservas": "Reservas", "Reservar en línea": "Reservar online",
    "Ofertas y paquetes": "Ofertas e pacotes", "Reservas:": "Reservas:", "Recepción:": "Recepção:",
    "Boletín": "Newsletter", "Ofertas exclusivas y novedades del hotel, un correo al mes.":
      "Ofertas exclusivas e novidades do hotel, um e-mail por mês.",
    "Tu correo electrónico": "Seu e-mail", "Suscribirme": "Assinar",
    "Real InterContinental San Salvador. Operado bajo licencia de IHG Hotels & Resorts.":
      "Real InterContinental San Salvador. Operado sob licença da IHG Hotels & Resorts.",
    "Privacidad": "Privacidade", "Términos": "Termos", "Contacto": "Contato",

    "Habitaciones y Suites": "Quartos e Suítes",
    "Descanso que se nota al día siguiente": "Um descanso que se nota no dia seguinte",
    "Ver todas las habitaciones": "Ver todos os quartos",
    "/ noche": "/ noite", "/ noche · sin impuestos": "/ noite · sem impostos",
    "2 huéspedes": "2 hóspedes", "3 huéspedes": "3 hóspedes", "4 huéspedes": "4 hóspedes",
    "Habitación Clásica": "Quarto Clássico", "Habitación Superior": "Quarto Superior",
    "Junior Suite": "Junior Suíte", "Club InterContinental": "Club InterContinental",
    "Ver detalle": "Ver detalhes",
    "Desde": "A partir de", "desde": "a partir de",
    "Detalle de habitación": "Detalhes do quarto",
    "Hotel de lujo junto a Metrocentro": "Hotel de luxo ao lado do Metrocentro",
    "1 King o 2 Queen": "1 King ou 2 Queen",
    "1 King": "1 King", "2 Queen": "2 Queen", "1 King + sofá": "1 King + sofá",

    "Probar, saborear, repetir": "Provar, saborear, repetir",
    "Ver tarifas con desayuno": "Ver tarifas com café da manhã", "Reservar mesa": "Reservar mesa",
    "Tiempo para ti": "Tempo para você",
    "Reservar tratamiento": "Reservar tratamento",

    "Ofertas y Paquetes": "Ofertas e Pacotes",
    "Reserva directo y aprovecha más": "Reserve direto e aproveite mais",
    "Contactar al hotel": "Falar com o hotel",

    "Eventos y Bodas": "Eventos e Casamentos",
    "Cuéntanos sobre tu evento": "Conte-nos sobre o seu evento",
    "Nombre y apellido": "Nome e sobrenome", "Correo electrónico": "E-mail", "Teléfono": "Telefone",
    "Tipo de evento": "Tipo de evento", "Boda": "Casamento", "Otro": "Outro",
    "Fecha tentativa": "Data prevista", "Número de invitados": "Número de convidados",
    "Detalles adicionales": "Detalhes adicionais", "Solicitar cotización": "Solicitar orçamento",

    "Ubicación y Contacto": "Localização e Contato",
    "Dirección": "Endereço", "Coordenadas": "Coordenadas", "Recepción": "Recepção",
    "Correo": "E-mail", "Cómo llegar en auto": "Como chegar de carro", "Abrir en Waze": "Abrir no Waze",
    "Todo a la mano": "Tudo por perto", "Consultas generales": "Consultas gerais",
    "Este formulario es para consultas generales, grupos y prensa.": "Este formulário é para consultas gerais, grupos e imprensa.",
    "¿Vas a reservar? Usa el": "Vai reservar? Use o", "motor en línea": "motor de reservas online",
    "Nombre": "Nome", "Asunto": "Assunto", "Consulta general": "Consulta geral",
    "Prensa": "Imprensa", "Empleo": "Trabalhe conosco", "Mensaje": "Mensagem",
    "Enviar mensaje": "Enviar mensagem",

    "Privacidad y términos": "Privacidade e termos", "Volver al inicio": "Voltar ao início",

    "Reserva tu estancia": "Reserve sua estadia",
    "Fechas y huéspedes": "Datas e hóspedes", "Elige tu habitación": "Escolha seu quarto",
    "Personaliza tu estancia": "Personalize sua estadia", "Datos del huésped": "Dados do hóspede",
    "Reserva confirmada": "Reserva confirmada",
    "Fechas": "Datas", "Habitación": "Quarto", "Extras": "Extras", "Datos": "Dados",
    "Confirmación": "Confirmação", "Código promocional": "Código promocional",
    "Elegir habitación": "Escolher quarto", "Continuar": "Continuar", "Volver": "Voltar",
    "Tu estancia": "Sua estadia", "Noches": "Noites",
    "Impuestos y tasa turística": "Impostos e taxa turística", "Total estimado": "Total estimado",
    "Revisar y confirmar": "Revisar e confirmar", "Apellido": "Sobrenome",
    "País de residencia": "País de residência", "Hora estimada de llegada": "Horário previsto de chegada",
    "Selecciona…": "Selecione…", "Solicitudes especiales": "Pedidos especiais",
    "Código de reserva": "Código da reserva", "Huésped": "Hóspede", "Tarifa": "Tarifa",
    "Nueva reserva": "Nova reserva"
  };

  /* --- Añadidos (v2): barra de anuncio, reserva directa, confianza, FAQ, experiencias --- */
  Object.assign(EN, {
    "Experiencias": "Experiences",
    "Reserva directa · mejor precio garantizado, sin cargos y cancelación flexible.":
      "Book direct · best price guaranteed, no fees and flexible cancellation.",
    "Ver ventajas": "See the benefits",
    "Cerrar aviso": "Close notice",
    "Reserva por WhatsApp": "Book via WhatsApp",
    "Escribir por WhatsApp": "Message us on WhatsApp",
    "Reservar": "Book",
    "2 adultos · 1 habitación": "2 adults · 1 room",
    "1 adulto · 1 habitación": "1 adult · 1 room",
    "2 adultos · 1 niño": "2 adults · 1 child",
    "2 adultos · 2 niños": "2 adults · 2 children",
    "4 adultos · 2 habitaciones": "4 adults · 2 rooms",

    "Reserva en el sitio oficial y obtén más": "Book on the official site and get more",
    "Ventajas exclusivas que solo tienes al reservar directo con el hotel, no en agencias de viaje.":
      "Exclusive benefits you only get by booking direct with the hotel, not through travel agencies.",
    "Mejor precio garantizado": "Best price guaranteed",
    "Si encuentras una tarifa pública más baja, la igualamos y descontamos un 10 % más.":
      "If you find a lower public rate, we match it and take another 10% off.",
    "Cancelación flexible": "Flexible cancellation",
    "La mayoría de tarifas se cancelan sin cargo hasta 48 h antes de la llegada.":
      "Most rates can be cancelled free of charge up to 48 h before arrival.",
    "Sin cargos ni comisiones": "No fees or commissions",
    "Pagas la tarifa del hotel, sin recargos de intermediarios.":
      "You pay the hotel rate, with no middleman surcharges.",
    "Mejora de categoría": "Room upgrade",
    "Prioridad de upgrade según disponibilidad al momento del check-in.":
      "Upgrade priority based on availability at check-in.",
    "Bebida de bienvenida": "Welcome drink",
    "Cortesía en Azul Pool Bar o NAU al llegar, reservando directo.":
      "On the house at Azul Pool Bar or NAU on arrival when you book direct.",
    "Check-out tardío": "Late check-out",
    "Hasta las 14:00 sin costo cuando reservas en este sitio (según ocupación).":
      "Until 2:00 p.m. at no charge when you book on this site (subject to occupancy).",

    "Lo que dicen nuestros huéspedes": "What our guests say",
    "El Salvador empieza en la puerta del hotel": "El Salvador starts at the hotel's doorstep",
    "Surf City y las playas de El Tunco y El Zonte, el volcán de Santa Ana y el lago de Coatepeque, la Ruta de las Flores y la Ruta del Café, el centro histórico y Suchitoto. Nuestra conserjería organiza traslados y guías para cada plan.":
      "Surf City and the beaches of El Tunco and El Zonte, the Santa Ana volcano and Lake Coatepeque, the Ruta de las Flores and the Coffee Route, the historic center and Suchitoto. Our concierge arranges transfers and guides for every plan.",
    "Descubre El Salvador": "Discover El Salvador",
    "A tu alcance": "Within reach",
    "Conserjería": "Concierge",

    "Preguntas frecuentes": "Frequently asked questions",
    "¿A qué hora es el check-in y el check-out?": "What are the check-in and check-out times?",
    "Check-in a partir de las 3:00 p. m. y check-out hasta las 12:00 m. d. El check-in exprés y el check-out tardío están disponibles para huéspedes del Club InterContinental y, según ocupación, para reservas directas.":
      "Check-in from 3:00 p.m. and check-out until 12:00 noon. Express check-in and late check-out are available for Club InterContinental guests and, subject to occupancy, for direct bookings.",
    "¿El hotel tiene estacionamiento?": "Does the hotel have parking?",
    "Sí. Estacionamiento en el hotel por 5 USD por vehículo y día, con acceso directo desde Boulevard de los Héroes y conexión peatonal a Metrocentro.":
      "Yes. On-site parking for 5 USD per vehicle per day, with direct access from Boulevard de los Héroes and a pedestrian link to Metrocentro.",
    "¿Puedo llevar a mi mascota?": "Can I bring my pet?",
    "Aceptamos mascotas de hasta 15 kg en habitaciones designadas, con un cargo de limpieza. Avísanos al reservar para confirmar disponibilidad.":
      "We welcome pets up to 15 kg in designated rooms, with a cleaning fee. Let us know when booking to confirm availability.",
    "¿Ofrecen traslado desde el aeropuerto?": "Do you offer airport transfers?",
    "Sí. Traslado privado en sedán desde el Aeropuerto Internacional Monseñor Óscar Arnulfo Romero (SAL), a unos 45 minutos. Se agrega como extra en el motor de reservas o se solicita en recepción.":
      "Yes. Private sedan transfer from Monseñor Óscar Arnulfo Romero International Airport (SAL), about 45 minutes away. Add it as an extra in the booking engine or request it at the front desk.",
    "¿Cuál es el horario de la piscina?": "What are the pool hours?",
    "La piscina al aire libre abre todos los días de 6:00 a 21:00. El Azul Pool Bar sirve de 10:00 a 19:00.":
      "The outdoor pool is open daily from 6:00 to 21:00. Azul Pool Bar serves from 10:00 to 19:00.",
    "¿Los niños tienen tarifa especial?": "Is there a special rate for children?",
    "Hasta dos menores se hospedan sin costo en la habitación de sus padres. Con el paquete Family Getaway, el desayuno es gratis para menores de 12 años.":
      "Up to two children stay free in their parents' room. With the Family Getaway package, breakfast is free for children under 12.",

    "Un país entero en menos de dos horas": "A whole country in under two hours",
    "El Salvador cabe en un fin de semana: playas de clase mundial por la mañana, un volcán y un lago de cráter por la tarde, pueblos de café y murales al día siguiente. Desde el hotel, todo queda cerca.":
      "El Salvador fits into a weekend: world-class beaches in the morning, a volcano and a crater lake in the afternoon, coffee towns and murals the next day. From the hotel, everything is close.",
    "Nuestra conserjería organiza traslados privados, guías certificados y reservas para cada plan. Pídelo en recepción o al hacer tu reserva.":
      "Our concierge arranges private transfers, certified guides and reservations for every plan. Ask at the front desk or when you book.",
    "Naturaleza y aventura": "Nature and adventure",
    "Cultura y tradición": "Culture and tradition",
    "Sin salir de la ciudad": "Without leaving the city",
    "Surf City: El Tunco y El Zonte": "Surf City: El Tunco and El Zonte",
    "Volcán de Santa Ana y Lago de Coatepeque": "Santa Ana Volcano and Lake Coatepeque",
    "Ruta de las Flores": "Ruta de las Flores",
    "Suchitoto": "Suchitoto",
    "Joya de Cerén, Patrimonio de la Humanidad": "Joya de Cerén, a World Heritage Site",
    "Ruta del Café": "The Coffee Route",
    "Centro histórico": "Historic center",
    "Metrocentro y Multiplaza": "Metrocentro and Multiplaza",
    "Zona Rosa y San Benito": "Zona Rosa and San Benito",
    "Arma tu itinerario con nosotros": "Plan your itinerary with us",
    "Cuéntale a la conserjería qué te interesa y prepara traslados, guías y reservas antes de tu llegada.":
      "Tell the concierge what you're interested in and we'll arrange transfers, guides and reservations before you arrive.",
    "Escribir a la conserjería": "Contact the concierge",

    "Comparar todas las habitaciones": "Compare all rooms",
    "Ocultar comparación": "Hide comparison",
    "Desde (USD / noche)": "From (USD / night)",
    "Sala de estar": "Living area",
    "Acceso al Club Lounge": "Club Lounge access",
    "Ver": "View",

    "Celebraciones sociales": "Social celebrations",
    "Los momentos que se recuerdan toda la vida, con la logística resuelta y catering propio.":
      "The moments you remember for a lifetime, with the logistics handled and in-house catering.",
    "Quinceañeras": "Quinceañeras",
    "Graduaciones": "Graduations",
    "Aniversarios y bautizos": "Anniversaries and christenings",
    "Cenas de gala y premiaciones": "Gala dinners and award ceremonies",
    "Quinceañera": "Quinceañera",
    "Graduación": "Graduation",
    "Cena de gala o premiación": "Gala dinner or award ceremony",
    "Aniversario o bautizo": "Anniversary or christening",

    "Precio indicativo por noche, desde. Toca un día para fijar la entrada.":
      "Indicative price per night, from. Tap a day to set the check-in date.",
    "Mes anterior": "Previous month", "Mes siguiente": "Next month",
    "Suscríbete y recibe un 10 % de descuento en tu primera reserva directa.":
      "Subscribe and get 10% off your first direct booking.",
    "WhatsApp": "WhatsApp"
  });

  Object.assign(PT, {
    "Experiencias": "Experiências",
    "Reserva directa · mejor precio garantizado, sin cargos y cancelación flexible.":
      "Reserva direta · melhor preço garantido, sem taxas e com cancelamento flexível.",
    "Ver ventajas": "Ver vantagens",
    "Reserva por WhatsApp": "Reserve pelo WhatsApp",
    "2 adultos · 1 habitación": "2 adultos · 1 quarto",
    "1 adulto · 1 habitación": "1 adulto · 1 quarto",
    "2 adultos · 1 niño": "2 adultos · 1 criança",
    "2 adultos · 2 niños": "2 adultos · 2 crianças",
    "4 adultos · 2 habitaciones": "4 adultos · 2 quartos",

    "Reserva en el sitio oficial y obtén más": "Reserve no site oficial e ganhe mais",
    "Ventajas exclusivas que solo tienes al reservar directo con el hotel, no en agencias de viaje.":
      "Vantagens exclusivas que você só tem reservando direto com o hotel, não em agências de viagem.",
    "Mejor precio garantizado": "Melhor preço garantido",
    "Si encuentras una tarifa pública más baja, la igualamos y descontamos un 10 % más.":
      "Se encontrar uma tarifa pública mais baixa, nós igualamos e ainda damos 10% de desconto.",
    "Cancelación flexible": "Cancelamento flexível",
    "La mayoría de tarifas se cancelan sin cargo hasta 48 h antes de la llegada.":
      "A maioria das tarifas pode ser cancelada sem custo até 48 h antes da chegada.",
    "Sin cargos ni comisiones": "Sem taxas nem comissões",
    "Pagas la tarifa del hotel, sin recargos de intermediarios.":
      "Você paga a tarifa do hotel, sem acréscimos de intermediários.",
    "Mejora de categoría": "Upgrade de categoria",
    "Prioridad de upgrade según disponibilidad al momento del check-in.":
      "Prioridade de upgrade conforme disponibilidade no check-in.",
    "Bebida de bienvenida": "Drink de boas-vindas",
    "Cortesía en Azul Pool Bar o NAU al llegar, reservando directo.":
      "Cortesia no Azul Pool Bar ou no NAU na chegada, reservando direto.",
    "Check-out tardío": "Check-out tardio",
    "Hasta las 14:00 sin costo cuando reservas en este sitio (según ocupación).":
      "Até as 14h sem custo ao reservar neste site (conforme ocupação).",

    "Lo que dicen nuestros huéspedes": "O que dizem nossos hóspedes",
    "El Salvador empieza en la puerta del hotel": "El Salvador começa na porta do hotel",
    "Descubre El Salvador": "Descubra El Salvador",
    "Conserjería": "Concierge",
    "Preguntas frecuentes": "Perguntas frequentes",
    "Un país entero en menos de dos horas": "Um país inteiro em menos de duas horas",
    "Naturaleza y aventura": "Natureza e aventura",
    "Cultura y tradición": "Cultura e tradição",
    "Sin salir de la ciudad": "Sem sair da cidade",
    "Ruta del Café": "Rota do Café",
    "Centro histórico": "Centro histórico",
    "Arma tu itinerario con nosotros": "Monte seu roteiro conosco",
    "Escribir a la conserjería": "Falar com o concierge",
    "Comparar todas las habitaciones": "Comparar todos os quartos",
    "Ocultar comparación": "Ocultar comparação",
    "Desde (USD / noche)": "A partir de (USD / noite)",
    "Sala de estar": "Sala de estar",
    "Ver": "Ver",
    "Celebraciones sociales": "Celebrações sociais",
    "Quinceañeras": "Festas de 15 anos",
    "Graduaciones": "Formaturas",
    "Precio indicativo por noche, desde. Toca un día para fijar la entrada.":
      "Preço indicativo por noite, a partir de. Toque em um dia para definir a entrada.",
    "Suscríbete y recibe un 10 % de descuento en tu primera reserva directa.":
      "Assine e ganhe 10% de desconto na sua primeira reserva direta."
  });

  var DICTS = { en: EN, pt: PT };

  var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };

  /* Colecciona nodos de texto traducibles */
  function collectTextNodes(root) {
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !norm(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  var applying = false;

  function translateNode(n, dict) {
    if (n.__i18nBase === undefined) n.__i18nBase = n.nodeValue;
    var base = n.__i18nBase;
    var key = norm(base);
    if (!dict) { if (n.nodeValue !== base) n.nodeValue = base; return; }
    var t = dict[key];
    if (t == null) return;
    // preserva espacios de borde del original
    var lead = base.match(/^\s*/)[0];
    var trail = base.match(/\s*$/)[0];
    var next = lead + t + trail;
    if (n.nodeValue !== next) n.nodeValue = next;
  }

  function translateAttrs(dict) {
    var sel = "[placeholder], [aria-label], [title]";
    document.querySelectorAll(sel).forEach(function (el) {
      ["placeholder", "aria-label", "title"].forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var store = "__i18n_" + a;
        if (el[store] === undefined) el[store] = el.getAttribute(a);
        var base = el[store];
        var t = dict ? dict[norm(base)] : null;
        el.setAttribute(a, t != null ? t : base);
      });
    });
  }

  function apply(lang) {
    var dict = DICTS[lang] || null;
    applying = true;
    try {
      collectTextNodes(document.body).forEach(function (n) { translateNode(n, dict); });
      translateAttrs(dict);
      // <title> — traduce cada segmento separado por " · "
      if (!document.__i18nTitle) document.__i18nTitle = document.title;
      document.title = document.__i18nTitle.split(" · ").map(function (seg) {
        var k = norm(seg);
        return (dict && dict[k] != null) ? dict[k] : seg;
      }).join(" · ");
      document.documentElement.lang = lang;
    } finally { applying = false; }
    // estado del selector
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    window.IC_LANG = lang;
  }

  function currentLang() {
    var saved;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (saved && LANGS[saved]) return saved;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS[nav] ? nav : "es";
  }

  /* Selector de idioma inyectado en la barra de navegación */
  function buildSwitcher() {
    if (document.querySelector(".lang")) return;
    var nav = document.querySelector(".nav");
    if (!nav) return;
    var wrap = document.createElement("div");
    wrap.className = "lang";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Idioma");
    Object.keys(LANGS).forEach(function (code) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = LANGS[code];
      b.setAttribute("data-lang", code);
      b.setAttribute("lang", code);
      b.addEventListener("click", function () { apply(code); });
      wrap.appendChild(b);
    });
    var cta = nav.querySelector(".nav__cta");
    nav.insertBefore(wrap, cta || null);
  }

  /* Re-traduce el contenido que el JS del sitio renderiza después */
  function watchDynamic() {
    if (!("MutationObserver" in window)) return;
    var pending = null;
    var mo = new MutationObserver(function (muts) {
      if (applying) return;
      var relevant = muts.some(function (m) { return m.addedNodes && m.addedNodes.length; });
      if (!relevant) return;
      clearTimeout(pending);
      pending = setTimeout(function () { apply(window.IC_LANG || "es"); }, 40);
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    buildSwitcher();
    apply(currentLang());
    watchDynamic();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
