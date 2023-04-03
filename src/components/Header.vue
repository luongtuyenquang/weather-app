<template>
  <header class="mb-[40px]">
    <ul class="flex justify-center gap-7 text-lg">
      <li
        v-for="navItem in NAV_DATA"
        :key="navItem.slug"
        :class="[isActive(navItem.slug) ? 'header-active' : 'header-hover']"
      >
        <router-link :to="{ name: 'nav-router', params: { location: navItem.slug } }">{{ navItem.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { NAV_DATA } from "../global/constants";

export default {
  data() {
    return {
      NAV_DATA,
    };
  },
  methods: {
    isActive(nav) {
      return this.$route.params.location === nav;
    },
  },
};
</script>
