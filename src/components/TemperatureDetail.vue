<template>
  <section>
    <div class="flex items-center justify-between my-[30px]">
      <img :src="icon" alt="icon-weather" />
      <div class="text-[40px]">{{ Math.round(temp) }}°</div>
      <div>
        <p class="opacity-90 mb-1.5">Độ ẩm: {{ humidity }} %</p>
        <p class="opacity-90 mb-1.5">Cảm giác như: {{ Math.round(feelsLike) }}°</p>
        <p class="opacity-90">Gió: {{ Math.round(wind) }} km/h</p>
      </div>
    </div>
    <div class="flex justify-between mb-9 opacity-[0.85] max-767:flex-col max-767:gap-y-2 max-767:items-center">
      <p>Bình minh: {{ getCurrentDay(localtime, forecastData)?.astro.sunrise }}</p>
      <span class="opacity-70 max-767:hidden">|</span>
      <p>Hoàng hôn: {{ getCurrentDay(localtime, forecastData)?.astro.sunset }}</p>
      <span class="opacity-70 max-767:hidden">|</span>
      <p>Trăng lên: {{ getCurrentDay(localtime, forecastData)?.astro.moonrise }}</p>
      <span class="opacity-70 max-767:hidden">|</span>
      <p>Trăng tàn: {{ getCurrentDay(localtime, forecastData)?.astro.moonset }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import getCurrentDay from "@/utils/getCurrentDay";
import type { ForecastDay } from "@/interfaces/Weather";

defineProps<{
  icon: string;
  temp: number;
  humidity: number;
  wind: number;
  feelsLike: number;
  forecastData: ForecastDay[];
  localtime: string;
}>();
</script>
