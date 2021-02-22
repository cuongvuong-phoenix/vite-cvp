<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-center mt-8 space-x-4">
      <router-link :to="{ name: 'home', params: { locale } }" class="router-link">
        <i-ion-home-outline></i-ion-home-outline>
        <span>{{ t('nav.home') }}</span>
      </router-link>
      <span>|</span>
      <router-link :to="{ name: 'about', params: { locale } }" class="router-link">
        <span>{{ t('nav.about') }}</span>
        <i-ion-ios-information-circle-outline></i-ion-ios-information-circle-outline>
      </router-link>
    </nav>

    <div class="flex items-center justify-center mt-2 mb-8">
      <select
        v-model="locale"
        name="locale"
        id="locale"
        class="px-3 py-2 bg-transparent border border-current rounded-lg"
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const { t, locale } = useI18n();

  watch(locale, (val) => {
    router.push({
      name: router.currentRoute.value.name!,
      params: { locale: val },
    });
  });
</script>

<style lang="postcss" scoped>
  .router-link {
    @apply flex items-center space-x-2 text-lg;

    &:hover {
      @apply text-green-500;
    }
  }

  .router-link-active {
    @apply text-green-700;
  }
</style>
