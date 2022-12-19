# Nuxt 3 Boilerplate Ideal Code
Este repositorio contiene un código base para ser usado en los proyectos que hagamos con [Nuxt 3](https://v3.nuxtjs.org), contiene una estructura inicial de las carpetas, convenciones de nombres, linting y algunos módulos base para proyectos simples como landing pages.

## Instalación

Instala las dependencias con el siguientes comando:

```bash
npm install
```

## Servidor Dev

Este comando inicia el servidor dev en http://localhost:3000

```bash
npm run dev
```

## Despliegue

### Servidor con Node

Primero construir la aplicación:

```bash
npm run build
```

Se puede ejecutar la aplicación construida mediante el comando:

```bash
npm run preview
```

### Estático CDN

Para construir la aplicación de forma estática y que se pueda desplegar en una CDN como vercel, se debe ejecutar el comando: 

```bash
npm run generate
```

Se creará una carpeta llamada `dist` donde estará el código a ser desplegado.

Para mayor información revisar la [documentación de despliegue](https://v3.nuxtjs.org/guide/deploy/presets).

## Módulos

Estos son los módulos utilizados en el Boilerplate, se pueden buscar más módulos [aquí](https://modules.nuxtjs.org/?version=3.x).

### @nuxtjs/tailwindcss

Un framework CSS enfocado a la utilidad que se encarga de generar todas las clases CSS. 

[Documentación](https://tailwindcss.com/).

### Daisy UI

Una biblioteca de componentes UI para Tailwind CSS.

[Documentación](https://daisyui.com/).

### @nuxtjs/color-mode

Un composable para detectar el tema de color y cambiarlo fácilmente.

[Documentación](https://color-mode.nuxtjs.org/).

### @nuxtjs/google-fonts

Para importar fuentes de Google Fonts de manera eficiente.

[Documentación](https://github.com/nuxt-community/google-fonts-module).

### @nuxtjs/robots

Para generar el archivo robots.txt.

[Documentación](https://github.com/nuxt-community/robots-module).

### nuxt-schema-org

Para generar markup en el formato schema.org y mejorar el SEO.

[Documentación](https://vue-schema-org.netlify.app/guide/setup/nuxt.html).


### @nuxtjs/html-validator

Para validar el html generado en búsqueda de errores de hidratación de nuxt y de problemas de accesibilidad.

[Documentación](https://html-validator.nuxtjs.org/).

### @nuxtjs/sitemap

Para generar el sitemap y que Google y otros buscadores puedan recorrer el sitio web.

[Documentación](https://sitemap.nuxtjs.org/).

### vue-plausible

Para conectar con la plataforma de analíticas web Plausible.

[Documentación](https://github.com/moritzsternemann/vue-plausible).



