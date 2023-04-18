<template>
  <section class="mb-[50px]">
    <p class="uppercase">Dự báo 24 giờ</p>
    <hr class="mt-1 mb-2" />
    <div
      class="flex justify-between mt-[15px] overflow-x-auto gap-x-[30px] max-767:gap-x-5 pb-[15px] horizontal-scrollbar"
    >
      <div
        class="flex flex-col items-center shrink-0"
        v-for="(hourly, index) in getCurrentDay(localtime, forecastData)?.hour"
        :key="index"
      >
        <p>{{ formatDailyTime(hourly.time) }}</p>
        <img :src="hourly.condition.icon" class="my-2.5" alt="image" />
        <p>{{ Math.round(hourly.temp_c) }}°</p>
      </div>
    </div>
  </section>
  <section>
    <p class="uppercase">Dự báo {{ countNextDays() }} ngày</p>
    <hr class="mt-1 mb-2" />
    <div class="flex gap-x-[30px] max-767:gap-x-4 mt-[15px]">
      <div
        class="flex flex-col items-center w-[calc(100%/5)]"
        v-for="(daily, index) in forecastData.slice(1, 6)"
        :key="index"
      >
        <p>{{ formatDay(daily) }}</p>
        <img :src="daily.day.condition.icon" class="my-2.5" alt="image" />
        <p>{{ Math.round(daily.day.avgtemp_c) }}°</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import getCurrentDay from "@/utils/getCurrentDay";
import type { ForecastDay } from "@/interfaces/Weather";

const props = defineProps<{ forecastData: ForecastDay[]; localtime: string }>();

const formatDay = (daily: ForecastDay) => {
  return dayjs(daily.date).format("DD-MM");
};

const formatDailyTime = (time: string) => {
  return time.split(" ").at(-1);
};

const countNextDays = () => {
  if (props.forecastData.length >= 6) {
    return 5;
  } else {
    return props.forecastData.length - 1;
  }
};
</script>
