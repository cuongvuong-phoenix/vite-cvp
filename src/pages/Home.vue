<template>
  <div class="space-y-4 text-center">
    <Hello :msg="t('hello')"></Hello>
    <div>{{ t('current-counted') }}: {{ counter }}</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useStore } from '../store';
  import { useI18n } from 'vue-i18n';
  import Hello from '../components/Hello.vue';

  const store = useStore();
  const { t } = useI18n();

  const counter = computed(() => store.state.counter);
</script>

<i18n lang="yaml">
en:
  current-counted: 'Current counted'
vi:
  current-counted: 'Đã đếm được'
</i18n>
