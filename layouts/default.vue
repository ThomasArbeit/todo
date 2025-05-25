<template>
  <div class="layout">
    <aside class="sidebar">
      <!-- Ta navigation ici -->
      <Navbar/>
    </aside>
    <main class="content">
      <NuxtPage /> <!-- TRÈS important -->
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/ui/Navbar.vue';
</script>