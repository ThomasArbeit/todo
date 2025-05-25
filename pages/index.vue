<script setup lang="ts">
  import Page from '~/components/ui/Page.vue';
  import Input from '~/components/ui/Input.vue';
  import { useIndex } from './index.script';
  const setup = useIndex();
</script>

<template>
  <Page title="Mes taches">
    <Input v-model="setup.task.value" placeholder="+ Ajouter une tache" type="text"/>
    {{ setup.task.value }}
  </Page>
</template>
