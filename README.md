# -mi-portafolio.v3
Mi pront fue lo siguiente
Actúa como un **desarrollador frontend senior especializado en sitios web institucionales, diseño editorial moderno, accesibilidad WCAG 2.1 AA y optimización frontend**.

Quiero que desarrolles desde cero el sitio web institucional de una organización peruana llamada **“Diálogo y Desarrollo”**, dedicada al análisis político, social y medioambiental del Perú.

El resultado debe ser un sitio web **profesional, moderno, académico, editorial y visualmente elegante**, dirigido principalmente a profesionales, investigadores, académicos, estudiantes y ciudadanos interesados en política, medio ambiente y desarrollo sostenible del Perú.

## 1. STACK OBLIGATORIO

Utiliza exclusivamente:

* HTML5 semántico.
* Tailwind CSS mediante CDN.
* CSS personalizado dentro de `<style>`.
* JavaScript Vanilla dentro de `<script>`.
* Google Fonts.

NO utilizar:

* React.
* Vue.
* Angular.
* Bootstrap.
* jQuery.
* Swiper.
* AOS.
* GSAP.
* Ninguna librería externa de JavaScript.
* Ningún framework JavaScript.

Todo debe estar contenido en **un único archivo `index.html`**.

El archivo debe poder abrirse directamente en un navegador sin necesidad de Node.js, npm, Vite ni ningún proceso de compilación.

---

# 2. IDENTIDAD VISUAL

Utiliza esta paleta de colores:

* Verde bosque principal: `#1a472a`
* Azul marino: `#0f3460`
* Blanco hueso: `#faf9f6`
* Gris oscuro: `#2d2d2d`
* Terracota/acento: `#c75b39`

La estética debe transmitir:

* Seriedad institucional.
* Credibilidad académica.
* Periodismo de análisis.
* Conciencia ambiental.
* Modernidad.
* Elegancia editorial.
* Identidad peruana sutil, sin caer en un diseño turístico.

Utiliza:

* **Playfair Display** para títulos, encabezados y elementos editoriales.
* **Inter** para textos, navegación, botones y contenido general.

Carga ambas desde Google Fonts.

Configura correctamente `font-display: swap`.

---

# 3. ESTRUCTURA GENERAL

El documento debe tener esta estructura:

```text
HEADER
│
├── Logo
├── Navegación
├── Buscador visual
└── Menú hamburguesa móvil

HERO
│
├── Imagen de fondo
├── Overlay
├── Título
├── Subtítulo
└── CTA

ÚLTIMAS PUBLICACIONES
│
└── Grid de artículos

PODCAST
│
└── Episodios

REPORTAJES MULTIMEDIA
│
└── Galería

NEWSLETTER / CTA

FOOTER
│
├── Identidad
├── Links rápidos
├── Categorías
└── Redes + Newsletter
```

Utiliza elementos HTML5 semánticos:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<figure>`
* `<footer>`
* `<button>`
* `<form>`

---

# 4. HEADER

Crear un navbar fijo en la parte superior.

Características:

* `position: fixed`.
* Fondo inicialmente elegante y ligeramente transparente.
* Efecto `backdrop-blur`.
* Al hacer scroll, debe cambiar ligeramente de apariencia mediante JavaScript ligero.
* Debe permanecer visible.
* Debe tener una altura adecuada tanto en desktop como en móvil.

Logo:

**Diálogo y Desarrollo**

El logo debe utilizar Playfair Display y tener apariencia institucional.

Menú:

* Inicio
* Actualidad
* Podcasts
* Reportajes
* Sobre Nosotros
* Contacto

Agregar una barra de búsqueda visual.

La búsqueda NO necesita ser funcional.

Debe contener:

* Icono de búsqueda.
* Input o botón visual.
* Placeholder: `Buscar contenido...`

No utilices librerías de iconos.

Puedes utilizar SVG inline para los iconos.

### Móvil

En pantallas pequeñas:

* Ocultar navegación horizontal.
* Mostrar botón hamburguesa.
* El botón debe tener `aria-label`.
* Utilizar `aria-expanded`.
* Utilizar `aria-controls`.
* Crear menú móvil desplegable.
* Animar las tres líneas del icono hamburguesa utilizando CSS.
* El menú debe abrirse/cerrarse mediante JavaScript Vanilla.
* Al abrirse, debe transformarse visualmente en una X.
* El menú debe poder cerrarse al seleccionar un enlace.
* El comportamiento debe ser accesible mediante teclado.

---

# 5. HERO

Crear una sección hero de alto impacto visual.

Utilizar una imagen placeholder de Unsplash relacionada con:

* naturaleza peruana,
* Andes,
* Amazonía,
* paisaje peruano,
* medio ambiente.

Puedes utilizar una URL de Unsplash Source o una imagen remota apropiada.

La imagen debe tener:

```html
loading="eager"
```

porque pertenece al contenido principal visible inicialmente.

Agregar:

* Overlay oscuro/verde para mejorar contraste.
* Título:

**“Análisis para el desarrollo sostenible”**

* Subtítulo:

**“Artículos, investigaciones y conversaciones sobre política y medio ambiente en el Perú”**

* Botón:

**“Explorar contenido”**

El botón debe desplazar suavemente hacia la sección de publicaciones.

Agregar una pequeña indicación visual de scroll en la parte inferior del hero.

El texto debe tener excelente contraste con el fondo y cumplir WCAG AA.

---

# 6. ÚLTIMAS PUBLICACIONES

Crear una sección:

**Últimas publicaciones**

Agregar una introducción breve de carácter editorial.

En desktop:

* Grid de 3 columnas.

En tablet:

* 2 columnas.

En móvil:

* 1 columna.

Crear mínimo **6 artículos realistas** relacionados con Perú.

Usa datos ficticios pero plausibles.

Temáticas:

1. Minería y transición energética.
2. Deforestación amazónica.
3. Reforma política peruana.
4. Gestión del agua en los Andes.
5. Cambio climático.
6. Desarrollo sostenible y comunidades.

Cada tarjeta debe incluir:

* Imagen.
* Categoría.
* Título.
* Extracto de aproximadamente 2 líneas.
* Autor.
* Fecha.
* Tiempo estimado de lectura.

Ejemplos de categorías:

* Política
* Medio Ambiente
* Economía
* Amazonía
* Desarrollo
* Sociedad

Los badges deben utilizar colores coherentes con la identidad visual.

Las tarjetas deben tener:

* Bordes sutiles.
* Sombras suaves.
* Hover elegante.
* Transformación ligera.
* Transición CSS.
* Imagen con zoom muy sutil al hacer hover.
* Excelente jerarquía tipográfica.

No exagerar las animaciones.

Cada imagen debe tener `alt` descriptivo.

Ejemplo de contenido:

```text
Minería y transición energética: el desafío de crecer sin comprometer los ecosistemas
```

El contenido debe parecer propio de una publicación académica o periodística seria.

Agregar botón:

**Ver todas las publicaciones**

Aunque todavía no sea funcional.

---

# 7. PODCAST

Crear una sección visualmente diferenciada.

Título:

**Conversaciones que importan**

Subtítulo:

**Podcast Diálogo y Desarrollo**

Crear mínimo 3 episodios.

Cada episodio debe tener:

* Número de episodio.
* Título.
* Descripción.
* Duración.
* Fecha.
* Botón "Escuchar".

Ejemplos:

### Episodio 01

**El futuro de la Amazonía peruana**

### Episodio 02

**Minería, territorio y transición energética**

### Episodio 03

**¿Hacia dónde va la política peruana?**

Diseñar un reproductor visual.

NO es necesario implementar reproducción real de audio.

El botón `Escuchar` debe ejecutar JavaScript:

```javascript
console.log("Reproducción simulada");
```

También puedes mostrar un pequeño mensaje visual indicando:

**“Reproductor de demostración”**

No utilizar ninguna librería externa.

---

# 8. REPORTAJES MULTIMEDIA

Crear sección:

**Reportajes multimedia**

Subtítulo:

**Historias que conectan territorio, sociedad y futuro.**

Crear una galería de mínimo 6 imágenes.

Utilizar fotografías relacionadas con:

* Amazonía peruana.
* Andes.
* Comunidades rurales.
* Minería.
* Ríos.
* Bosques.
* Ciudades peruanas.
* Conservación ambiental.

Puede utilizarse un grid CSS moderno.

En desktop:

* Grid de 3 columnas.
* Algunas imágenes pueden ocupar 2 columnas para crear composición editorial.

En móvil:

* Una columna.

Cada elemento debe ser `<figure>`.

Al hacer hover:

* Aparece overlay oscuro.
* Aparece título.
* Aparece pie de foto.
* Animación suave.

Asegurar que la información también sea accesible sin depender exclusivamente del hover.

---

# 9. SECCIÓN NEWSLETTER

Antes del footer crear una sección de llamada a la acción.

Título:

**Recibe análisis directamente en tu correo**

Texto:

**Suscríbete para recibir nuestras investigaciones, reportajes y conversaciones sobre el futuro del Perú.**

Crear formulario visual:

* Input email.
* Botón "Suscribirme".

No implementar backend.

Al enviar:

* Evitar recarga con JavaScript.
* Mostrar mensaje:

**“Gracias por suscribirte. Esta función está disponible como demostración.”**

Validar mínimamente el campo email.

---

# 10. FOOTER

Crear footer institucional con 4 columnas en desktop.

### Columna 1

Logo:

**Diálogo y Desarrollo**

Descripción:

**“Análisis independiente para comprender los desafíos políticos, sociales y ambientales del Perú.”**

### Columna 2

**Enlaces rápidos**

* Inicio
* Actualidad
* Podcasts
* Reportajes
* Sobre Nosotros
* Contacto

### Columna 3

**Categorías**

* Política
* Medio Ambiente
* Economía
* Amazonía
* Desarrollo
* Sociedad

### Columna 4

**Síguenos**

Agregar iconos SVG para:

* Facebook
* X/Twitter
* Instagram
* YouTube
* LinkedIn

Los iconos pueden ser SVG inline.

Agregar newsletter:

* Input.
* Botón.

No utilizar librerías de iconos.

Agregar una línea inferior con:

**© 2026 Diálogo y Desarrollo. Todos los derechos reservados.**

Agregar enlaces:

* Política de privacidad.
* Términos de uso.

---

# 11. RESPONSIVE DESIGN

El diseño debe ser mobile-first.

Utilizar los breakpoints de Tailwind:

* `sm: 640px`
* `md: 768px`
* `lg: 1024px`
* `xl: 1280px`

Comprobar visualmente que funcione correctamente en:

* 320px
* 375px
* 390px
* 768px
* 1024px
* 1280px
* 1440px

No debe existir:

* scroll horizontal.
* elementos cortados.
* textos desbordados.
* imágenes deformadas.
* botones fuera de pantalla.

---

# 12. ACCESIBILIDAD WCAG 2.1 AA

Implementar accesibilidad real.

Obligatorio:

* `lang="es"` en `<html>`.
* Contraste suficiente.
* `alt` en TODAS las imágenes.
* `aria-label` cuando un botón solo tenga icono.
* `aria-expanded` en menú hamburguesa.
* `aria-controls`.
* Navegación mediante teclado.
* Focus visible.
* No eliminar completamente los estilos de focus.
* Usar `<button>` para acciones.
* Usar `<a>` para navegación.
* Usar `<nav aria-label="Navegación principal">`.
* Usar labels accesibles en formularios.
* Utilizar jerarquía correcta de headings.
* Solo un `<h1>`.
* Evitar depender únicamente del color para transmitir información.
* Respetar `prefers-reduced-motion`.

Implementar:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

---

# 13. SEO

Dentro de `<head>` incluir:

* `charset`.
* `viewport`.
* `description`.
* `keywords` si corresponde.
* `author`.
* `robots`.
* Canonical.
* Open Graph.
* Twitter Card.

Utilizar:

```html
<html lang="es">
```

Meta description sugerida:

**“Diálogo y Desarrollo: análisis, investigaciones y conversaciones sobre política, medio ambiente y desarrollo sostenible en el Perú.”**

Agregar:

```html
<link rel="canonical" href="https://www.dialogoydesarrollo.pe/">
```

Usar URLs ficticias únicamente como placeholder si no existe todavía el dominio real.

---

# 14. PERFORMANCE

Aplicar buenas prácticas:

* `loading="lazy"` para imágenes fuera del viewport.
* Hero con `loading="eager"`.
* `decoding="async"` en imágenes apropiadas.
* Evitar JavaScript innecesario.
* No utilizar librerías pesadas.
* No usar animaciones costosas.
* Utilizar CSS transforms para animaciones.
* Evitar manipulación excesiva del DOM.
* Utilizar `defer` cuando corresponda.
* Código limpio y organizado.

---

# 15. JAVASCRIPT

Implementar únicamente JavaScript Vanilla.

Debe incluir como mínimo:

### Menú móvil

Abrir/cerrar menú.

Actualizar:

```html
aria-expanded
```

### Navbar

Detectar scroll y modificar ligeramente el estilo del navbar.

### Scroll suave

El botón:

**Explorar contenido**

debe desplazarse hacia publicaciones.

### Podcast

Los botones "Escuchar" deben mostrar una interacción simulada.

### Newsletter

Interceptar submit y mostrar mensaje de éxito.

### Año dinámico

Puedes generar el año actual mediante JavaScript, pero el contenido debe corresponder a 2026.

### Animaciones

Si agregas animaciones de aparición al hacer scroll, hazlas con JavaScript Vanilla ligero y respetando:

```css
prefers-reduced-motion
```

No utilizar Intersection Observer de forma innecesaria.

---

# 16. ESTILO EDITORIAL

El diseño NO debe parecer una plantilla genérica de blog.

Quiero una composición inspirada en:

* revistas académicas modernas,
* periódicos digitales de alta calidad,
* think tanks,
* publicaciones de investigación,
* medios de análisis político.

Usa:

* mucho espacio negativo.
* títulos grandes.
* serif para titulares.
* sans-serif para lectura.
* líneas divisorias.
* pequeños detalles editoriales.
* números de sección.
* etiquetas.
* jerarquía visual clara.

El diseño debe sentirse como una mezcla entre:

**think tank + revista digital + medio periodístico premium.**

No abusar de:

* gradientes.
* sombras.
* bordes redondeados.
* animaciones.
* colores saturados.

Priorizar elegancia.

---

# 17. MICROINTERACCIONES

Agregar microinteracciones CSS discretas:

* Hover en enlaces.
* Subrayado animado en navegación.
* Hover en tarjetas.
* Zoom ligero en imágenes.
* Transformación del botón hamburguesa.
* Hover en botones.
* Focus visible.
* Transiciones de 200–300ms.

Evitar animaciones excesivas.

---

# 18. CÓDIGO Y CALIDAD

Entrega únicamente el archivo:

```text
index.html
```

Debe contener:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    ...
    <style>
        ...
    </style>
</head>

<body>

    ...

    <script>
        ...
    </script>

</body>
</html>
```

No crear archivos adicionales.

No utilizar componentes React.

No utilizar módulos JavaScript.

No utilizar TypeScript.

No utilizar dependencias externas de JavaScript.

Incluye comentarios explicativos en español en las secciones principales:

```html
<!-- HEADER / NAVEGACIÓN -->
<!-- HERO PRINCIPAL -->
<!-- ÚLTIMAS PUBLICACIONES -->
<!-- PODCAST -->
<!-- REPORTAJES MULTIMEDIA -->
<!-- NEWSLETTER -->
<!-- FOOTER -->
<!-- JAVASCRIPT -->
```

Mantén el código organizado, indentado y fácil de mantener.

---

# 19. VALIDACIÓN FINAL

Antes de entregar el código, revisa internamente que:

1. El HTML sea válido HTML5.
2. No existan etiquetas sin cerrar.
3. No existan IDs duplicados.
4. Todos los botones funcionen.
5. El menú móvil funcione.
6. Los enlaces tengan estados hover y focus.
7. Todas las imágenes tengan `alt`.
8. El sitio no tenga scroll horizontal.
9. El contraste sea adecuado.
10. Exista un único `<h1>`.
11. La navegación sea accesible.
12. El formulario newsletter funcione como demostración.
13. Los botones de podcast funcionen como demostración.
14. No existan errores JavaScript en consola.
15. El diseño sea responsive.
16. Se respete la paleta especificada.
17. Se utilicen Playfair Display e Inter.
18. No se utilicen librerías JS externas.
19. Las imágenes secundarias utilicen lazy loading.
20. Se respete `prefers-reduced-motion`.

## RESULTADO ESPERADO

Genera directamente un **`index.html` completo y funcional**, listo para copiar y pegar en Visual Studio Code.

No expliques el código antes de generarlo.

Primero entrega el código completo del archivo `index.html`.

Después del código, incluye solamente una explicación breve de **3 a 4 puntos** sobre:

* decisiones de diseño,
* arquitectura,
* accesibilidad,
* responsive/performance.
