# Rediseño 2026 — Centro Educativo Los Rosantes

Brief compartido. Sitio estático publicado con GitHub Pages desde la rama `prod`
(build Jekyll legacy: todo lo que empiece con `_` no se publica). Trabajamos en la
rama `rediseno-2026`. Nadie hace commit ni push: solo se editan archivos.

## Objetivo

Reconstruir las 6 páginas activas con HTML semántico y CSS propio, sin jQuery,
Bootstrap, Revolution Slider ni Font Awesome. Mismas URLs. Todo el contenido debe
estar en el HTML inicial (sin depender de JS) para que buscadores y asistentes de
IA lo lean directamente.

Páginas: `index.html`, `service-inicial.html`, `service-primaria.html`,
`service-secundaria.html`, `about.html`, `contact.html`.

Archivos nuevos: `css/site.css` (único CSS), `js/site.js` (único JS, mínimo).
No se tocan: `css/` viejo, `js/` viejo, `rs-plugin/`, `fonts/`, `old/`, `old2/`,
`pepin/`, `SysMedicalClient/`, `node_modules/`.

## Datos del colegio (única fuente de verdad; no inventar nada más)

- Nombre: Centro Educativo Los Rosantes. Siglas: CELROS.
- Fundado el 17 de octubre de 1983 en Los Molinos, Villa Duarte, como "Colegio
  Infantil Los Rosantes" (preescolar). En 1995 pasa a llamarse "Centro Educativo
  Los Rosantes". Usar siempre "más de 40 años" (nunca "más de 30").
- Fundadora: Lic. Perseveranda Carmen Herrera Contreras.
- Niveles: Inicial, Primaria, Secundaria.
- Dirección: Av. España No. 10, Los Molinos, Villa Duarte, Santo Domingo Este,
  República Dominicana.
- Teléfono y WhatsApp: 809-595-9110 (`tel:+18095959110`,
  `https://wa.me/18095959110`). El 9119 que aparece en el FAQ viejo es un error.
- Correo: colegio_los_rosantes@hotmail.com
- Horario: lunes a viernes, 7:30 a. m. – 4:00 p. m. (horario corrido).
- Coordenadas: 18.477816464578112, -69.87758486618942
- Facebook: https://www.facebook.com/proyecto.celros
- Instagram: https://www.instagram.com/centro_educativo_los_rosantes
- Dominio canónico: https://www.losrosantes.edu.do
- Lema (pintado en el mural del colegio): "Aprendizaje con disciplina y alegría".
- Requisitos de inscripción: acta de nacimiento; récord de notas; 3 fotografías
  2×2; certificado médico; tarjeta de vacunas (para preescolar); carta de
  referencia de la institución anterior (si aplica).
- Mapa (iframe, `loading="lazy"`, con `title`):
  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1320364989156!2d-69.87758486618942!3d18.477816464578112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb5ba17e7453c92b!2sColegio%20Los%20Rosantes!5e0!3m2!1ses!2sdo!4v1669071300721!5m2!1ses!2sdo`

El texto de cada página sale de la versión actual del archivo (`git show
prod:<archivo>`), corrigiendo ortografía, tildes y puntuación sin cambiar el
sentido ni añadir afirmaciones nuevas (nada de precios, matrícula, grados,
cantidad de alumnos, acreditaciones, etc.).

### Misión y Visión (BORRADOR pendiente de aprobación del colegio)

Van en `about.html`, cada una precedida por el comentario HTML
`<!-- BORRADOR: texto pendiente de aprobación del colegio -->`.

- Misión: "Formar niños, niñas y jóvenes de Villa Duarte y su entorno con una
  educación integral y de calidad en los niveles inicial, primario y secundario,
  basada en valores éticos, disciplina y alegría, que los prepare para aportar al
  crecimiento social, moral y económico del país."
- Visión: "Ser un centro educativo de referencia en Santo Domingo Este,
  reconocido por la calidad humana y académica de sus egresados, por la
  actualización constante de su currículo —con idiomas y tecnología— y por su
  compromiso con la comunidad que lo vio nacer."

## Dirección visual

Cálido, institucional, claro. Inspirado en los murales del colegio (turquesa,
verde, naranja) y el logo (coral). Nada de sliders, preloaders, parallax ni
sombras duras de texto. Mobile-first.

Tokens (en `:root`):

```
--ink: #1c2430;        --ink-soft: #4a5565;
--paper: #fffaf5;      --surface: #ffffff;
--green: #0f6b5c;      --green-dark: #0a4d42;   --green-tint: #e4f3ef;
--coral: #ef6f6c;      --coral-dark: #b93a3a;   --coral-tint: #fdebe8;
--sun: #f6c453;        --sky-tint: #e6f3fa;
--line: #eadfd3;
--radius: 20px;        --radius-sm: 12px;
--shadow: 0 1px 2px rgb(28 36 48 / .06), 0 12px 32px -12px rgb(28 36 48 / .18);
--wrap: 1120px;
```

- Acción principal: fondo `--green`, texto blanco. Coral solo decorativo o como
  `--coral-dark` para texto. Todo el texto cumple contraste AA.
- Tipografía: títulos "Bricolage Grotesque" (600–800), cuerpo "Figtree"
  (400–600), desde Google Fonts con `preconnect` y `display=swap`. Tamaños
  fluidos con `clamp()`. `text-wrap: balance` en títulos, `pretty` en párrafos.
  Cuerpo mínimo 17px, `line-height` 1.65, líneas de máximo ~68ch.
- Layout: CSS Grid / Flexbox, propiedades lógicas, secciones con aire
  (`padding-block: clamp(3.5rem, 8vw, 7rem)`), tarjetas con `--radius`.
- Iconos: SVG en línea (`aria-hidden="true"`), trazo 1.75. Sin fuentes de iconos.
- Movimiento sobrio: transiciones de hover/focus y `@view-transition {
  navigation: auto; }`. Respetar `prefers-reduced-motion`.
- Accesibilidad: enlace "Saltar al contenido", `:focus-visible` evidente,
  landmarks (`header`, `nav`, `main`, `footer`), un solo `<h1>` por página,
  jerarquía de encabezados sin saltos, áreas táctiles ≥ 44px.

### Componentes compartidos (idénticos en las 6 páginas)

- Cabecera fija (sticky, fondo translúcido con `backdrop-filter`): logo + nombre,
  navegación (Inicio · Niveles: Inicial, Primaria, Secundaria · Nosotros ·
  Contacto), botón "Escríbenos por WhatsApp". En móvil, botón de menú
  (`aria-expanded`, `aria-controls`) que abre el panel; los enlaces de niveles se
  muestran como lista simple, sin submenú desplegable. `aria-current="page"` en
  la página activa.
- Pie: nombre y lema, niveles, dirección/horario/teléfono/correo como texto real
  (`<address>`), redes, © 2026.
- Botón flotante de WhatsApp abajo a la derecha (`aria-label`).
- Banda de cierre "¿Listo para conocernos?" con teléfono y WhatsApp.
- Cabecera de página interna: migas (`nav aria-label="Migas de pan"`), `<h1>`,
  entradilla.

### Portada (`index.html`)

1. Hero a dos columnas (texto + foto `grupo-mural` en marco redondeado, con un
   detalle decorativo de color detrás). `<h1>`: "Centro Educativo Los Rosantes",
   antetítulo "Colegio en Villa Duarte, Santo Domingo Este", entradilla sobre los
   más de 40 años y los tres niveles, botones "Escríbenos por WhatsApp" y "Ver
   niveles". Debajo, tres datos: "Desde 1983", "Inicial, Primaria y Secundaria",
   "Lunes a viernes, 7:30 a. m. – 4:00 p. m.". La foto del hero lleva
   `fetchpriority="high"` y no es lazy.
2. Niveles: tres tarjetas con foto (`inicial-bandera`, `primaria-tablets`,
   `secundaria-graduacion`), título, el párrafo actual y enlace.
3. "¿Por qué elegirnos?": los cuatro bloques actuales (Experiencia; Educación
   basada en valores y civismo; Atención personalizada; Currículo constantemente
   actualizado), texto corregido.
4. Inscripción: lista de requisitos + llamada a WhatsApp, con foto
   `estudiantes-uniforme`.
5. Preguntas frecuentes con `<details>/<summary>` nativo: requisitos, horario,
   vías de contacto, ubicación. Las respuestas visibles deben coincidir con el
   JSON-LD `FAQPage`.
6. Ubicación: dirección, horario, foto `fachada`, enlace a `contact.html`.
7. Banda de cierre.

### Páginas de nivel

Cabecera interna, bloque a dos columnas (texto + foto), lista de objetivos
(contenido actual corregido) como tarjetas o lista con marcas, 1–2 fotos más,
enlaces a los otros dos niveles, banda de cierre.

- Inicial: `inicial-bandera`, `inicial-coloreando`, `graduacion-inicial`.
- Primaria: `primaria-tablets`, `primaria-aula`, `estudiantes-uniforme`.
- Secundaria: `secundaria-graduacion`, `secundaria-estudiantes`.

### Nosotros (`about.html`)

`<h1>` "Nuestra historia". Historia como línea de tiempo (1983, 1989, 1995, 1998,
hoy) con el texto actual corregido; Misión y Visión (borrador); fotos
`mural-escudo`, `mural-lema`, `ninos-actividad`, `estudiantes-amigas`; video
opcional `video/colegio.mp4` con `poster="img/site/video-poster.jpg"`,
`controls`, `preload="none"`, `playsinline` (solo si el agente de imágenes
confirma que existe).

### Contacto (`contact.html`)

`<h1>` "Contacto". Tarjetas de teléfono, WhatsApp, correo, dirección y horario
como texto real y enlaces; mapa; foto `fachada`. Sin formulario (GitHub Pages no
ejecuta PHP).

## Imágenes

Salida en `img/site/`. Cada foto en AVIF, WebP y JPG, en dos anchos: `-640` y
`-lg` (ancho `lg` = el de la tabla). Nunca ampliar por encima del original.

| nombre | origen (en `img/colegio/`) | lg (ancho×alto) |
|---|---|---|
| grupo-mural | `i/contactos.jpg` | 1280×720 |
| fachada | `i/bienvenida2.jpg` | 1189×720 |
| inicial-bandera | `foto (6).JPG` | 1280×1389 |
| inicial-coloreando | `i/prescolar.jpg` | 833×582 |
| primaria-tablets | `i/primaria.jpg` | 987×1234 |
| primaria-aula | `i/cole (7).jpg` | 1280×1689 |
| estudiantes-uniforme | `foto (8).JPG` | 1280×821 |
| secundaria-graduacion | `secundaria.jpg` | 1280×720 |
| secundaria-estudiantes | `media.jpg` | 1280×960 |
| mural-escudo | `i/historia.jpg` | 1080×1080 |
| mural-lema | `i/cole (3).jpg` | 1080×1080 |
| graduacion-inicial | `preescolar.jpg` | 1280×720 |
| ninos-actividad | `foto(1).JPG` | 1280×941 |
| estudiantes-amigas | `foto_3.JPG` | 1280×985 |

Además: `img/site/og.jpg` (1200×630, de `grupo-mural`), `img/site/logo.png`
(de `logo/logo_o.png`, 238×305, optimizado), `img/site/favicon-32.png`,
`img/site/apple-touch-icon.png` (180×180, logo centrado sobre blanco),
`img/site/icon-192.png`, `img/site/video-poster.jpg`.

Marcado en las páginas (el recorte lo hace el CSS con `aspect-ratio` +
`object-fit: cover`):

```html
<picture>
  <source type="image/avif" srcset="img/site/NOMBRE-640.avif 640w, img/site/NOMBRE-lg.avif LGw" sizes="...">
  <source type="image/webp" srcset="img/site/NOMBRE-640.webp 640w, img/site/NOMBRE-lg.webp LGw" sizes="...">
  <img src="img/site/NOMBRE-lg.jpg" width="LG" height="ALTO" alt="descripción real de la foto" loading="lazy" decoding="async">
</picture>
```

`alt` descriptivo y honesto en español (qué se ve en la foto), sin relleno de
palabras clave.

## SEO y lectura por IA

En todas las páginas: `<html lang="es-DO">`, `<title>` único, `description`
(≤ 160 caracteres), canonical, Open Graph + Twitter con
`https://www.losrosantes.edu.do/img/site/og.jpg` (`og:image:width` 1200,
`og:image:height` 630, `og:image:alt`), `og:site_name`, `og:locale` `es_DO`,
`theme-color` `#0f6b5c`, favicons de `img/site/`. Quitar `meta keywords`. Geo
tags con las coordenadas de arriba y `geo.placename` "Villa Duarte, Santo
Domingo Este".

JSON-LD. La portada define la entidad completa; las demás la referencian con
`{"@id": "https://www.losrosantes.edu.do/#school"}`:

```json
{
  "@context": "https://schema.org",
  "@type": "School",
  "@id": "https://www.losrosantes.edu.do/#school",
  "name": "Centro Educativo Los Rosantes",
  "alternateName": ["CELROS", "Colegio Los Rosantes"],
  "url": "https://www.losrosantes.edu.do/",
  "logo": "https://www.losrosantes.edu.do/img/site/logo.png",
  "image": "https://www.losrosantes.edu.do/img/site/og.jpg",
  "description": "Colegio privado en Villa Duarte, Santo Domingo Este, con más de 40 años de experiencia. Ofrece educación inicial, primaria y secundaria con formación integral basada en valores éticos.",
  "slogan": "Aprendizaje con disciplina y alegría",
  "foundingDate": "1983-10-17",
  "founder": {"@type": "Person", "name": "Perseveranda Carmen Herrera Contreras"},
  "telephone": "+1-809-595-9110",
  "email": "colegio_los_rosantes@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. España No. 10, Los Molinos, Villa Duarte",
    "addressLocality": "Santo Domingo Este",
    "addressRegion": "Santo Domingo",
    "addressCountry": "DO"
  },
  "geo": {"@type": "GeoCoordinates", "latitude": 18.477816464578112, "longitude": -69.87758486618942},
  "hasMap": "https://www.google.com/maps?cid=13500561872462793003",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:30",
    "closes": "16:00"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-809-595-9110",
    "contactType": "admissions",
    "availableLanguage": "es",
    "areaServed": "DO"
  },
  "areaServed": ["Villa Duarte", "Los Molinos", "Santo Domingo Este"],
  "knowsLanguage": "es",
  "sameAs": [
    "https://www.facebook.com/proyecto.celros",
    "https://www.instagram.com/centro_educativo_los_rosantes"
  ]
}
```

- Portada: además `WebSite` (`@id` `/#website`, `inLanguage` `es-DO`,
  `publisher` → `#school`) y `FAQPage` con las cuatro preguntas visibles.
- Niveles: `BreadcrumbList` + `Course` como hoy (nombre, descripción, `provider` → `#school`,
  `educationalLevel`, `inLanguage`), sin datos inventados.
- Nosotros: `AboutPage` + `BreadcrumbList`, `mainEntity` → `#school`.
- Contacto: `ContactPage` + `BreadcrumbList`, `mainEntity` → `#school`.

Todo JSON-LD debe ser JSON válido y coincidir con el texto visible.
