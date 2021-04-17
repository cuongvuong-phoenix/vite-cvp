<template>
  <div>
    <div class="text-center">
      <h1 class="text-4xl font-bold">{{ t('nav.markdown-preview') }}</h1>

      <p class="mx-auto mt-8 prose prose-lg dark:prose-light">
        <i18n-t keypath="pages.markdown-preview.intro">
          <a rel="noreferrer" href="https://github.com/vuong-cuong-phoenix/vite-vcp" target="_blank" title="GitHub"
            >Vite-VCP</a
          >
          <br />
          <a
            rel="noreferrer"
            href="https://tailwindcss-typography.netlify.app/"
            target="_blank"
            title="Tailwind Typography demo"
          >
            <code>@tailwindcss/typography</code> demo
          </a>
          <br />
          <code>src/components/markdown/Preview.md</code>
        </i18n-t>
      </p>
    </div>

    <MarkdownPreview class="mt-16" />
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import MarkdownPreview from '~/components/markdown/Preview.md';

  const { t } = useI18n();
</script>
