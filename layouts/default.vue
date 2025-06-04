
<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar__actions">
        <LucidePanelLeft :size="20"/>
        <div class="sidebar__actions-router">
          <LucideArrowLeft :size="20"/>
          <LucideArrowRight :size="20"/>
          <LucideRotateCw :size="20"/>
        </div>
      </div>
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
import { LucideArrowLeft, LucideArrowRight, LucidePanelLeft, LucideRotateCw } from "lucide-vue-next";
</script>