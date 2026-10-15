# Portafolio de Alejandro Salazar

Sitio web: **https://workalejandro321-cmyk.github.io**

Productor y editor audiovisual. Reels, anuncios, VSL y video de marca.

## Cómo actualizar la página

Todo el contenido vive en un solo archivo: **`contenido.js`**. La página se arma sola a partir de él, en español y en inglés.

### Cambiar un texto

1. Abre `contenido.js` aquí en GitHub.
2. Haz clic en el ícono del lápiz (Edit this file).
3. Busca el texto con `Ctrl + F` y cámbialo. Recuerda cambiar las dos versiones: `"es"` y `"en"`.
4. Baja y haz clic en **Commit changes**.
5. En uno o dos minutos la página se actualiza sola.

### Agregar un video a un proyecto

1. Entra a la carpeta `videos`, haz clic en **Add file › Upload files** y sube el MP4 (máximo 25 MB por archivo; exporta a 720p o 1080p).
2. Entra a la carpeta `portadas` y sube una imagen JPG para la portada del video.
3. Abre `contenido.js`, busca el proyecto y copia uno de sus bloques de video:

```js
{
  "video": "videos/NOMBRE.mp4",
  "portada": "portadas/NOMBRE.jpg",
  "formato": "9:16",
  "etiqueta": { "es": "Texto debajo del video", "en": "Text under the video" },
  "descripcion": { "es": "Descripción para lectores de pantalla", "en": "Screen reader description" }
},
```

4. Cambia los nombres de archivo y los textos. `formato` puede ser `"9:16"` (vertical), `"1:1"` (cuadrado) o `"16:9"` (horizontal).
5. **Commit changes**.

### Agregar un proyecto nuevo

En `contenido.js`, dentro de `"proyectos"`, copia un bloque completo (desde `{ "nombre"` hasta su `}` de cierre), pégalo donde quieras que aparezca y cambia el contenido. El orden de la lista es el orden en la página.

### Si algo se rompe

Casi siempre es una coma o una comilla que falta. En GitHub puedes ver el historial del archivo (**History**) y volver a la versión anterior.

### Compartir en un idioma

- Español: `https://workalejandro321-cmyk.github.io/?lang=es`
- Inglés: `https://workalejandro321-cmyk.github.io/?lang=en`

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `contenido.js` | Todos los textos, proyectos y videos. **El único que necesitas editar.** |
| `videos/` | Los videos en MP4 |
| `portadas/` | La imagen de portada de cada video |
| `img/` | Foto de perfil y logo |
| `index.html`, `app.js`, `estilos.css` | La estructura y el diseño. No hace falta tocarlos. |
