<template>
  <section class="flex items-center justify-between my-[30px]">
    <img :src="icon" alt="icon-weather" />
    <div class="text-[40px]">{{ temp }}°</div>
    <div>
      <p class="opacity-90 mb-1.5">Độ ẩm: {{ humidity }} %</p>
      <p class="opacity-90">Gió: {{ Math.round(wind) }} km/h</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    icon: String,
    temp: Number,
    humidity: Number,
    wind: Number,
  },
};
</script>
