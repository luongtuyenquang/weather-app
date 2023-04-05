<template>
  <header class="mb-[40px]">
    <ul class="flex justify-center gap-7 max-767:gap-4 text-lg max-767:text-base max-350:!text-sm">
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
