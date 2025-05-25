<template>
  <NuxtLink :class="['nav-link', `${setup.isActiveComputed.value ? 'nav-link--isactive' : ''}`]" :to="props.link">
    {{ props.label }}
  </NuxtLink>
</template>


<script setup lang="ts">
  import { type NavLinkProps, useNavLink } from './Navlink.script';

  const props = defineProps<NavLinkProps>();
  const setup = useNavLink(props);
</script>