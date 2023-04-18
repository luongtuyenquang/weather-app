<template>
  <section class="flex justify-center mb-[30px]">
    <label for="search" class="relative max-767:w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-2.5"><i class="fas fa-search text-slate-500"></i></div>
      <input
        type="text"
        placeholder="Nhập nơi cần tìm..."
        class="w-80 max-767:w-full h-9 rounded-md border border-slate-300 text-slate-500 px-3 pr-2 pl-9 placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:shadow-lg"
        v-model="searchValue"
        @keyup.enter="handleUpdateValue"
      />
    </label>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits<{ (e: "onUpdateSearchValue", value: string): void }>();

const router = useRouter();
const searchValue = ref("");

const handleUpdateValue = () => {
  const formatSearchValue = searchValue.value.toLowerCase().split(" ").join("");

  emit("onUpdateSearchValue", searchValue.value);
  router.push(formatSearchValue);
  if (searchValue.value === "") router.push("/");
};
</script>
