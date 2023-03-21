<template>
  <div class="w-full h-full bg-gradient-to-br from-light-green-2 to-light-green-1 text-white">
    <div class="max-w-screen-md m-auto py-[30px]">
      <Header />
      <SearchBar />
      <div class="text-center opacity-80 mt-[30px]">Thứ 3, Ngày 31 - Tháng 3 - Năm 2023 | Giờ hiện tại: 12:17 PM</div>
      <div class="text-center mt-[30px] text-2xl">Lodon</div>
      <TemperatureDetail />
      <Forecast />
    </div>
  </div>
</template>

<script>
import Forecast from "./components/Forecast.vue";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import TemperatureDetail from "./components/TemperatureDetail.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    TemperatureDetail,
    Forecast,
    SearchBar,
  },
};
</script>
