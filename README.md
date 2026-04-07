# Aberturas DP - Sitio Web

Sitio web profesional para Aberturas DP, empresa especializada en fabricación de aberturas de aluminio y PVC, y construcción de viviendas modulares.

## 📁 Estructura del Proyecto

```
aberturas-dp/
├── index.html              # Página principal (HTML + CSS + JS)
├── netlify.toml           # Configuración de Netlify
├── _redirects             # Redirecciones de Netlify
├── site-config.json       # Configuración general del negocio
├── README.md              # Este archivo
│
├── admin/                 # Netlify CMS
│   ├── index.html         # Panel de administración
│   └── config.yml         # Configuración del CMS
│
└── content/               # Contenido editable (JSON)
    ├── hero.json          # Sección inicio
    ├── aberturas.json     # Sección aberturas
    ├── viviendas.json     # Sección viviendas modulares
    ├── contacto.json      # Sección contacto
    ├── seo.json           # Configuración SEO
    └── galeria/           # Imágenes de la galería
        └── trabajo-1.md
```

## 🚀 Cómo subir a Netlify

### Opción 1: Drag & Drop (Más fácil)

1. Comprimí toda la carpeta `aberturas-dp` en un archivo ZIP
2. Andá a [netlify.com](https://netlify.com) y creá una cuenta
3. En el dashboard, arrastrá el ZIP a la zona de deploy
4. ¡Listo! Tu sitio estará online en segundos

### Opción 2: Desde GitHub (Recomendado)

1. Creá un repositorio en GitHub
2. Subí todos los archivos del proyecto
3. En Netlify, click en "New site from Git"
4. Seleccioná GitHub y tu repositorio
5. Click en "Deploy site"

## ⚙️ Configuración del CMS

Para activar el panel de administración:

### 1. Activar Identity

1. En tu sitio de Netlify, andá a **Settings → Identity**
2. Click en **Enable Identity**
3. En "Registration preferences" seleccioná **Invite only**
4. Opcional: Habilitá proveedores externos (Google, GitHub)

### 2. Agregar usuarios

1. Andá a **Identity → Users**
2. Click en **Invite users**
3. Ingresá el email y enviá la invitación

### 3. Activar Git Gateway

1. Andá a **Settings → Identity → Services**
2. En **Git Gateway**, click en **Enable Git Gateway**
3. Esto permite guardar cambios en tu repositorio

### 4. Acceder al panel

- URL: `https://tusitio.netlify.app/admin/`
- Login con email/contraseña o proveedores externos

## 📝 Cómo editar el contenido

### Opción A: Netlify CMS (Recomendado)

1. Accedé al panel: `https://tusitio.netlify.app/admin/`
2. Editá el contenido desde la interfaz visual
3. Guardá los cambios y publicá

### Opción B: Editando archivos JSON

Podés editar directamente estos archivos:

- `site-config.json` - Datos del negocio (teléfono, email, dirección)
- `content/hero.json` - Sección de inicio
- `content/aberturas.json` - Sección de aberturas
- `content/viviendas.json` - Sección de viviendas modulares
- `content/contacto.json` - Sección de contacto
- `content/seo.json` - Configuración SEO

## 🖼️ Cómo reemplazar imágenes

### Imágenes del sitio

Buscá en `index.html` los comentarios que dicen:
```html
<!-- IMAGEN [nombre] - Reemplazar con tu foto -->
<img src="URL_ACTUAL" alt="...">
<!-- Reemplazar con: src="ruta/a/tu/foto.jpg" -->
```

Reemplazá el `src` con la URL de tu imagen.

### Logo

Buscá el comentario:
```html
<!-- LOGO - Reemplazar con tu imagen -->
<div class="logo-img">
    <!-- Reemplazar esto con: <img src="ruta/a/tu/logo.png" alt="Aberturas DP"> -->
```

### Galería

Para agregar imágenes a la galería:

1. **Desde el CMS:** Andá a "Galería" en el panel de admin
2. **Manualmente:** Editá los archivos en `content/galeria/`

## 📞 Datos de contacto a editar

Buscá estos comentarios en `index.html`:

```html
<!-- DATO DE CONTACTO - Teléfono -->
<!-- DATO DE CONTACTO - Email -->
<!-- DATO DE CONTACTO - Dirección -->
<!-- DATO DE CONTACTO - WhatsApp -->
<!-- RED SOCIAL - Instagram -->
```

O editá directamente el archivo `site-config.json`.

## 🎨 Personalización de colores

En `index.html`, buscá la sección `:root` en el CSS:

```css
:root {
    --color-primary: #2563eb;        /* Azul principal */
    --color-aluminum: #9ca3af;       /* Gris aluminio */
    --color-dark: #1f2937;           /* Gris oscuro */
    /* ... */
}
```

## 📧 Configurar el formulario de contacto

### Opción 1: Netlify Forms (Automático)

El formulario ya tiene `data-netlify="true"`. Netlify lo detectará automáticamente.

Para ver los envíos:
1. Andá a tu sitio en Netlify
2. Click en la pestaña **Forms**
3. Ahí verás todas las consultas

### Opción 2: Formspree

1. Registrate en [formspree.io](https://formspree.io)
2. Creá un nuevo formulario
3. Copiá el endpoint URL
4. En `index.html`, reemplazá:
   ```html
   <form action="https://formspree.io/f/TU_ID" method="POST">
   ```

### Opción 3: EmailJS

1. Registrate en [emailjs.com](https://emailjs.com)
2. Configurá un servicio de email
3. Creá una plantilla
4. Agregá el SDK de EmailJS y configurá el envío

## 🔍 SEO

Editá el archivo `content/seo.json` para cambiar:
- Título del sitio
- Descripción meta
- Palabras clave
- Imagen para redes sociales


## 🛠️ Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Flexbox + Grid)
- JavaScript vanilla
- Netlify CMS
- Font Awesome (iconos)
- Google Fonts

## 📄 Licencia

Este proyecto es privado para uso de Aberturas DP.

## ❓ Soporte

Si tenés alguna duda o necesitás ayuda:

1. Revisá los comentarios en el código
2. Consultá la documentación de [Netlify](https://docs.netlify.com)
3. Consultá la documentación de [Netlify CMS](https://www.netlifycms.org/docs/)

---

**Aberturas DP** - San Vicente, Buenos Aires, Argentina
