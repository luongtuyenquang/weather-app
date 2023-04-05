<template>
  <section class="flex justify-center mb-[30px]">
    <label for="search" class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-2.5"><i class="fas fa-search text-slate-500"></i></div>
      <input
        type="text"
        placeholder="Nhập nơi cần tìm..."
        class="w-80 h-9 rounded-md border border-slate-300 text-slate-500 px-3 pr-2 pl-9 placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:shadow-lg"
        v-model="searchValue"
        @keyup.enter="handleUpdateValue"
      />
    </label>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const emit = defineEmits(["onUpdateSearchValue"]);

const router = useRouter();
const searchValue = ref("");

const handleUpdateValue = () => {
  emit("onUpdateSearchValue", searchValue.value);
  router.push(searchValue.value.toLowerCase());
  if (searchValue.value === "") router.push("/");
};
</script>
