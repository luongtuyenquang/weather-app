<template>
  <header class="mb-[40px]">
    <ul class="flex justify-center gap-7 text-lg">
      <li v-for="item in NAV_DATA" :key="item.slug" :class="[isActive(item.slug) ? 'header-active' : 'header-hover']">
        <RouterLink :to="{ name: 'nav-router', params: { location: item.slug } }">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { NAV_DATA } from "../global/constants";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();

const isActive = (nav) => {
  return route.params.location === nav;
};
</script>
