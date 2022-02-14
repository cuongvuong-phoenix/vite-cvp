import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import viteMarkdown from 'vite-plugin-md';
import MarkdownItPrism from 'markdown-it-prism';
import MarkdownItPrismBacktick from 'markdown-it-prism-backticks';
import MarkdownItAttrs from 'markdown-it-attrs';
import MarkdownItAnchor from 'markdown-it-anchor';
import slugify from 'slugify';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    components({
      dirs: [],
      resolvers: [iconsResolver()],
      dts: path.resolve(__dirname, 'src/types/components.d.ts'),
    }),
    icons(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/translations/**'),
    }),
    // viteMarkdown({
    //   headEnabled: true,
    //   wrapperClasses: 'prose dark:prose-light mx-auto',
    //   markdownItSetup(md) {
    //     md.use(MarkdownItPrism, { defaultLanguage: 'markup' });
    //     md.use(MarkdownItPrismBacktick);
    //     md.use(MarkdownItAttrs, {
    //       // Security (https://github.com/arve0/markdown-it-attrs#security).
    //       allowedAttributes: ['id', 'class'],
    //     });
    //     md.use(MarkdownItAnchor, {
    //       slugify: (s) => slugify(s, { lower: true }),
    //       permalink: true,
    //       permalinkBefore: true,
    //       permalinkSymbol: '#',
    //       permalinkAttrs: () => ({ 'aria-hidden': true }),
    //     });
    //   },
    // }),
  ],
});
