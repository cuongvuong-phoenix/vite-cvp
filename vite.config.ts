import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteMarkdown from 'vite-plugin-md';
import MarkdownItPrism from 'markdown-it-prism';
import MarkdownItPrismBacktick from 'markdown-it-prism-backticks';
import MarkdownItAttrs from 'markdown-it-attrs';
import MarkdownItAnchor from 'markdown-it-anchor';
import slugify from '@sindresorhus/slugify';
import viteComponents from 'vite-plugin-components';
import viteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      // Fix warning: "You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle."
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    viteMarkdown({
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
          slugify,
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: '#',
          permalinkAttrs: () => ({ 'aria-hidden': true }),
        });
      },
    }),
    viteComponents({
      // Disable auto-importing components under `src/components`.
      // Only enable for `vite-plugin-icons`.
      dirs: [],
      customComponentResolvers: ViteIconsResolver(),
    }),
    viteIcons(),
    vueI18n(),
  ],
});
