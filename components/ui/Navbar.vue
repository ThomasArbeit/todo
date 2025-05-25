<template>
  <aside class="navbar">
    <small>{{ setup.navJson[0].slug }}</small>
    <NavLink v-for="(link, i) in setup.navJson[0].pages" 
      :link="link.to" 
      :label="link.label" 
      :key="i"/>
  </aside>
</template>

<script setup lang="ts">
import { useNavbar } from './Navbar.script';
import NavLink from './Navlink.vue';
const setup = useNavbar();
</script>