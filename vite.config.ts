import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import VueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
});
