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
    <div class="flex justify-between mb-9 opacity-[0.85]">
      <p>Bình minh: {{ currentDayData().astro.sunrise }}</p>
      <p class="opacity-70">|</p>
      <p>Hoàng hôn: {{ currentDayData().astro.sunset }}</p>
      <p class="opacity-70">|</p>
      <p>Trăng lên: {{ currentDayData().astro.moonrise }}</p>
      <p class="opacity-70">|</p>
      <p>Trăng tàn: {{ currentDayData().astro.moonset }}</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  icon: String,
  temp: Number,
  humidity: Number,
  wind: Number,
  feelsLike: Number,
  forecastData: Array,
  localtime: String,
});

const currentDayData = () => {
  const formatDate = props.localtime.split(" ").at(0);

  const result = props.forecastData.find((item) => {
    if (item.date === formatDate) {
      return item;
    }
  });

  return result;
};
</script>
