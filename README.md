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

- 👉 (now) [`master`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/master) ([demo](https://vite-vcp.netlify.app)) - regular **SPA**
- [`ssr--fastify`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--fastify) ([demo](https://vite-vcp.herokuapp.com)) - **SSR** with [Fastify](https://www.fastify.io/) + deploy on [Heroku](https://www.heroku.com/)
- ❌ (maintaining) [`ssr--netlify-function`](https://github.com/vuong-cuong-phoenix/vite-vcp/tree/ssr--netlify-function) ([demo](https://vite-vcp-ssr.netlify.app)) - **SSR** with [Netlify platforms](https://www.netlify.com/products/) (static hosting + functions)

---

<br />

## ✨ Features

- ⚡️ [Vue 3](https://vuejs.org/), [Vite 2](https://vitejs.dev/), [ESBuild](https://esbuild.github.io/) - born with fastness

- Vue 3 eco-system

  - 🚀 [Vue Router](https://router.vuejs.org/) - the official router for Vue.js
  - 🗃️ [Pinia](https://pinia.vuejs.org/) - the Vue Store that you will enjoy using

- Vue 3 extensions

  - 💡 [VueUse](https://vueuse.org/) - collection of essential Vue Composition Utilities
  - 🌍 [Vue I18n](https://vue-i18n.intlify.dev/) - Internationalization plugin for Vue.js

- 🎨 [TailwindCSS](https://tailwindcss.com/) - utility-first CSS framework for rapidly building custom user interfaces

- 😃 [Use icons from Iconify's rich icon sets](https://iconify.design/)

- 📝 [Use Markdown as Vue component](./src/components/markdown)

- 🛡️ TypeScript support

- ☁️️ Easily deploy on [Netlify](./netlify.toml) without manual server setup

- 💪 Good practices from official libs/plugins/repos

- 👍 Always update to latest version of dependencies

<br>

## 📦 Pre-packed

### Vue 3

- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)
  - [`@vueuse/head`](https://github.com/vueuse/head)
- [Vue I18n](https://vue-i18n.intlify.dev/)

### Vite

- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
  > _Note:_ Only enable for auto-importing **Iconify** icons via `unplugin-icons`. Regular components should be explicitly imported for better IDE support.
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons)
- [`vite-plugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n)
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md)

### UI

- [TailwindCSS](https://tailwindcss.com/)
  - [`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin)
  - [`@tailwindcss/forms`](https://github.com/tailwindlabs/tailwindcss-forms)
- [Iconify](https://iconify.design/)
- [`markdown-it`](https://github.com/markdown-it/markdown-it)
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) & [`prismjs`](https://prismjs.com/)
  - [`markdown-it-prism-backticks`](https://github.com/stevejay/markdown-it-prism-backticks)
  - [`markdown-it-attrs`](https://github.com/arve0/markdown-it-attrs)
  - [`markdown-it-anchor`](https://github.com/valeriangalliat/markdown-it-anchor)

### Coding Style

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/) - fast, disk space efficient package manager
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Explore high-performance tooling for Vue
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
$ npx degit vuong-cuong-phoenix/vite-vcp my-vite-vcp-app
$ cd my-vite-vcp-app
$ pnpm install
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
$ pnpm dev
```

and follow dev-sever logs.

### Build

To build for production, run

```shell
$ pnpm build
```

and you will see the generated files in `dist` that ready to be served.

### Preview

You can preview your production build by running:

```shell
$ pnpm serve
```

### Deploy on Netlify

Create your site at [Netlify](https://app.netlify.com), connect to your repo & hit `OK`, your app will be live in a minute.

> Some configs in **Netlify UI** will be overrided by [`netlify.toml`](./netlify.toml) file. Check [all configs avaiable](https://docs.netlify.com/configure-builds/file-based-configuration/) for more details.

---

## ❓ Why this exists

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks.
