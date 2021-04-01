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
- 👉 (now) [`ssr--fastify`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--fastify) ([demo](https://vite-vcp.herokuapp.com)) - **SSR** with [Fastify](https://www.fastify.io/) + deploy on [Heroku](https://www.heroku.com/)
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

- 🎨 [TailwindCSS](https://tailwindcss.com/) - utility-first CSS framework for rapidly building custom user interfaces

- 😃 [Use icons from Iconify's rich icon sets](https://github.com/iconify)

- 📝 [Use Markdown as Vue component](./src/components)

- 🛡️ TypeScript support

- ☁️️ Easily deploy on [Heroku](./Procfile)

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
- [Vuex 4](https://github.com/vuejs/vuex/tree/4.0)
- [VueUse](https://github.com/vueuse/vueuse)
  - [`@vueuse/head`](https://github.com/vueuse/head)
  - [`@vueuse/motion`](https://github.com/vueuse/motion)
- [Vue I18n](https://github.com/intlify/vue-i18n-next)

### Server

- [Fastify](https://www.fastify.io/)
  - [`fastify-static`](https://github.com/fastify/fastify-static) - plugin for serving static files as fast as possible
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by [`esbuild-register`](https://github.com/egoist/esbuild-register)

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

You can preview your production build by running

```shell
$ yarn serve
```

### Deploy on Heroku

1. If you haven't initialized [Git](https://git-scm.com/) via `$ git init` then you must run it first.

2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

3. Login to your Heroku account using:
   ```shell
   $ heroku login
   ```
4. Depend on your choice, you can [create a new Heroku app](https://devcenter.heroku.com/articles/git#for-a-new-heroku-app) or [add remote from your existing Heroku app](https://devcenter.heroku.com/articles/git#for-an-existing-heroku-app).

5. Deploy!

   ```shell
   $ git push heroku <your branch name>:master
   ```

   Your app will be live in some minutes.

> Watch for Heroku logs while it building & deploying your app. If something went wrong you can try [search for it first](https://www.google.com/). You could [create new issue](https://github.com/vuong-cuong-phoenix/vite-vcp/issues/new) for me if searching is not enough to help you, I'm very eager to fix your issues!

---

## ❓ Why this exists

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks.
