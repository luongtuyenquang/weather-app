<template>
  <section class="mb-9">
    <p class="uppercase">Dự báo theo giờ</p>
    <hr class="my-2" />
    <div class="flex justify-between">
      <div class="flex flex-col items-center" v-for="n in 5" :key="n">
        <p>01:00 PM</p>
        <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="image" />
        <p>18°</p>
      </div>
    </div>
  </section>

  <section>
    <p class="uppercase">Dự báo theo ngày</p>
    <hr class="my-2" />
    <div class="flex justify-between">
      <div class="flex flex-col items-center" v-for="n in 5" :key="n">
        <p>01:00 PM</p>
        <img src="https://openweathermap.org/img/wn/04d@2x.png" alt="image" />
        <p>18°</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
