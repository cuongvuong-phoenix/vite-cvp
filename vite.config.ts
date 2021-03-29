import path from 'path';
import { defineConfig } from 'vite';
import eslint from '@rollup/plugin-eslint';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import viteSSR from 'vite-ssr/plugin';
import ViteMarkdown from 'vite-plugin-md';
import MarkdownItPrism from 'markdown-it-prism';
import MarkdownItPrismBacktick from 'markdown-it-prism-backticks';
import MarkdownItAttrs from 'markdown-it-attrs';
import MarkdownItAnchor from 'markdown-it-anchor';
import ViteComponents from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import VueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    {
      ...eslint({ include: './src/**/*.+(vue|js|ts)' }),
      enforce: 'pre',
      apply: 'serve',
    },
    viteSSR(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    ViteMarkdown({
      headEnabled: true,
      wrapperClasses: 'prose dark:prose-light mx-auto',
      markdownItSetup(md) {
        md.use(MarkdownItPrism, { defaultLanguage: 'markup' });
        md.use(MarkdownItPrismBacktick);
        md.use(MarkdownItAttrs, {
          // Security (https://github.com/arve0/markdown-it-attrs#security).
          allowedAttributes: ['id', 'class'],
        });
        md.use(MarkdownItAnchor, {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '#',
          permalinkAttrs: () => ({ 'aria-hidden': true }),
        });
      },
    }),
    ViteComponents({
      // Disable auto-importing components under `src/components`.
      // Only enable for `vite-plugin-icons`.
      dirs: [],
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
    VueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
});
