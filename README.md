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
- 👉 (now) [`ssr--fastify`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--fastify) - **SSR** with [Fastify](https://www.fastify.io/)
- [`ssr--netlify-function`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--netlify-function) ([demo](https://vite-vcp-ssr.netlify.app)) - **SSR** with [Netlify platforms](https://www.netlify.com/products/) (static hosting + functions)

---

<br />

## 💪 Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- Vue 3 eco-system

  - 🚀 [Vue Router 4](https://github.com/vuejs/vue-router-next) - the official router for Vue.js
  - 🗃️ [Vuex 4](https://github.com/vuejs/vuex/tree/4.0) - state management pattern & library for Vue.js
  - 📜 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- Vue 3 extensions

  - 💡 [VueUse](https://github.com/vueuse/vueuse) - collection of essential Vue Composition Utilities
  - 🌍 [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization plugin for Vue.js

- ⚒️ Server-Side Rendering with [Fastify](https://www.fastify.io/) - fast and low overhead web framework, for Node.js

- 🎨 [TailwindCSS](https://github.com/windicss/windicss) - utility-first CSS framework for rapidly building custom user interfaces

- 😃 [Use icons from Iconify's rich icon sets](https://github.com/iconify)

- 📝 [Use Markdown as component](./src/components)

- 🛡️ TypeScript support

- ☁️️ Easily deploy on [Netlify](./netlify.toml) without manual server setup

- 👍 Always update to latest version of dependencies

<br>

## 📦 Pre-packed

### Vite

- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons)
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components)
  > _Note:_ Only enable for auto-importing **Iconify** icons. Regular component should be explicitly imported for better IDE support.
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md)
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism)
  - [`markdown-it-prism-backticks`](https://github.com/stevejay/markdown-it-prism-backticks)
  - [`markdown-it-anchor`](https://github.com/valeriangalliat/markdown-it-anchor)
- [Vite SSR](https://github.com/frandiox/vite-ssr)

### Client

- [Vue Router 4](https://github.com/vuejs/vue-router-next)
- [Vuex 4](https://github.com/vuejs/vuex/tree/4.0)
- [VueUse](https://github.com/vueuse/vueuse)
  - [`@vueuse/head`](https://github.com/vueuse/head)
  - [`@vueuse/motion`](https://github.com/vueuse/motion)
- [Vue I18n](https://github.com/intlify/vue-i18n-next)
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n)

### Server

- [Fastify](https://www.fastify.io/)
  - [`fastify-static`](https://github.com/fastify/fastify-static) - plugin for serving static files as fast as possible

### UI

- [TailwindCSS](https://github.com/windicss/windicss)
  - [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms)
  - [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography)
- [Iconify](https://github.com/iconify)

### Coding Style

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by [`esbuild-register`](https://github.com/egoist/esbuild-register)
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

If you prefer to do it manually with the cleaner git history

```shell
$ npx degit vuong-cuong-phoenix/vite-vcp#ssr--fastify my-vite-vcp-app
$ cd my-vite-vcp-app
$ yarn install
```

## 🗹 Checklist

When you use this template, try follow the checklist to update your info properly:

- [ ] Rename `name`, `license`, `version` fields in `package.json`
- [ ] Change the author name in `LICENSE` file
- [ ] Change the favicon in `public` folder
- [ ] Remove `.github` folder which contains _GitHub_ related content
- [ ] Clean up the `README`

And, enjoy :)

## 💁 Usage

### Development

Just run and follow dev-sever logs

```shell
$ yarn dev
```

### Build

To build for production, run

```shell
$ yarn build
```

And you will see the generated files in `dist` that ready to be served.

### Preview

You can preview your production build by running

```shell
$ yarn serve
```

### Deploy on Netlify

Create your site at [Netlify](https://app.netlify.com), connect to your repo & hit `OK`, your App will be live in a minute.

> Some config in **Netlify UI** will be overrided by our [`netlify.toml`](./netlify.toml) file. Check all the [config avaiable](https://app.netlify.com) for more details.

---

## ❓ Why this exists

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks.
