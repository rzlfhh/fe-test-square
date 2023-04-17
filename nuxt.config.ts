// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
    app: {
        head: {
          charset: "utf-16",
          htmlAttrs: {
            lang: "en",
          },
          viewport: "width=device-width, initial-scale=1",
          title: "Square",
          meta: [
            {
              hid: "Square",
              property: "Square",
              name: "description",
              content: "Square amazing site.",
            },
          ],
        },
      },
})
