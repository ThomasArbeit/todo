<template>
  <div class="page">
    <h1 class="page__title">{{ setup.titleComputed }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { usePage, type PageProps } from './Page.script';

  const props = defineProps<PageProps>();
  const setup = usePage(props);
</script>