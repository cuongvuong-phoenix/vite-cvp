/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/vue" />
/// <reference types="@intlify/vite-plugin-vue-i18n/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.md' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
