<p align='center'>
  <img src="./.github/images/ion-ios-bolt.png" alt="Vite-VCP image">
</p>

<p align='center'>
  <b style="font-size: 2rem">Vite-VCP</b>
  <br />
  An opinionated Vite Starter Template
  <br />
  Inspired by <a href="https://github.com/antfu/vitesse">Vitesse</a>
</p>

<br />

---

🔥 This repo consists 3 kinds of templates corresponding to each branch:

- [`master`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/master) ([demo](https://vite-vcp.netlify.app)) - default **SPA**
- [`ssr--fastify`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--fastify) ([demo](https://vite-vcp.herokuapp.com)) - **SSR** with [Fastify](https://www.fastify.io/) + deploy on [Heroku](https://www.heroku.com/)
- 👉 (now) [`ssr--netlify-function`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--netlify-function) ([demo](https://vite-vcp-ssr.netlify.app)) - **SSR** with [Netlify platforms](https://www.netlify.com/products/) (static hosting + functions)

---

<br />

## ✨ Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- Vue 3 eco-system

  - 🚀 [Vue Router 4](https://github.com/vuejs/vue-router-next) - the official router for Vue.js
  - 🗃️ [Pinia](https://pinia.esm.dev) - the Vue Store that you will enjoy using (core of [Vuex 5](https://github.com/vuejs/rfcs/discussions/270) & soon will be merged together!)
  - 📜 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- Vue 3 extensions

  - 💡 [VueUse](https://github.com/vueuse/vueuse) - collection of essential Vue Composition Utilities
  - 🌍 [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization plugin for Vue.js

- ⚒️ Server-Side Rendering with [Netlify platforms](https://www.netlify.com/products/) - integrate static hosting together alongside serverless lambda function

- 🎨 [TailwindCSS](https://tailwindcss.com/) - utility-first CSS framework for rapidly building custom user interfaces

- 😃 [Use icons from Iconify's rich icon sets](https://github.com/iconify)

- 📝 [Use Markdown as Vue component](./src/components)

- 🛡️ TypeScript support

- ☁️️ Easily deploy on [Netlify](./netlify.toml) without manual server setup

- 💪 Good practices from official libs/plugins/repos

- 👍 Always update to latest version of dependencies

<br>

## 📦 Pre-packed

### Vite

- [Vite SSR](https://github.com/frandiox/vite-ssr)
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md)
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components)
  > _Note:_ Only enable for auto-importing **Iconify** icons via `vite-plugin-icons`. Regular components should be explicitly imported for better IDE support.
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons)
- [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n)

### Client

- [Vue Router 4](https://github.com/vuejs/vue-router-next)
- [Pinia](https://pinia.esm.dev)
- [VueUse](https://github.com/vueuse/vueuse)
  - [`@vueuse/head`](https://github.com/vueuse/head)
  - [`@vueuse/motion`](https://github.com/vueuse/motion)
- [Vue I18n](https://github.com/intlify/vue-i18n-next)

### Server(less)

- [Netlify platforms](https://www.netlify.com/products/)
  - [Netlify functions](./functions)
  - Configurated by [`netlify.toml`](./netlify.toml)

### UI

- [TailwindCSS](https://tailwindcss.com/)
  - [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms)
  - [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography)
- [Iconify](https://github.com/iconify)
- [`markdown-it`](https://github.com/markdown-it/markdown-it)
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism)
  - [`markdown-it-prism-backticks`](https://github.com/stevejay/markdown-it-prism-backticks)
  - [`markdown-it-attrs`](https://github.com/arve0/markdown-it-attrs)
  - [`markdown-it-anchor`](https://github.com/valeriangalliat/markdown-it-anchor)

### Coding Style

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Netlify CLI](https://cli.netlify.com/)
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 with `<script setup>` IDE support
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Headwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - An opinionated class sorter for Tailwind CSS
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## 📥 Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/vuong-cuong-phoenix/vite-vcp/generate).

### Clone to local

If you prefer to do it manually with a cleaner git history

```shell
$ npx degit vuong-cuong-phoenix/vite-vcp#ssr--netlify-function my-vite-vcp-app
$ cd my-vite-vcp-app
$ yarn install
```

## 🗹 Checklist

When you use this template, try following this checklist to update your info properly:

- [ ] Rename `name`, `license`, `version` fields in `package.json`
- [ ] Change the author name in `LICENSE` file
- [ ] Change the favicon in `public` folder
- [ ] Remove `.github` folder which contains _GitHub_ related content
- [ ] Clean up the `README`

and... enjoy :)

## 💁 Usage

### Development

Just run

```shell
$ yarn dev
```

and follow dev-sever logs.

### Build

To build for production, run

```shell
$ yarn build
```

and you will see the generated files in `dist` that ready to be served.

### Preview

You can preview your production build by running:

```shell
$ yarn serve
```

You must have [Netlify CLI](https://cli.netlify.com/) installed & setup first to run this command. Because Netlify CLI is **quite large**, I recommend to **install it globally**.

### Deploy on Netlify

Create your site at [Netlify](https://app.netlify.com), connect to your repo & hit `OK`, your App will be live in a minute.

> Some configs in **Netlify UI** will be overrided by [`netlify.toml`](./netlify.toml) file. Check [all configs avaiable](https://docs.netlify.com/configure-builds/file-based-configuration/) for more details.

---

## ❓ Why this exists

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks.
