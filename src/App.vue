<template>
  <div class="w-full h-screen overflow-y-auto bg-gradient-to-br from-light-green-2 to-light-green-1 text-white">
    <div class="max-w-screen-md m-auto py-[40px]">
      <Header />
      <SearchBar />
      <LocalTime :localtime="weatherInfo.location?.localtime" />
      <div class="flex items-center justify-between mt-[30px]">
        <p class="text-3xl">{{ weatherInfo.location?.name }}</p>
        <p>Quốc gia: {{ weatherInfo.location?.country }}</p>
      </div>
      <TemperatureDetail
        :icon="weatherInfo.current?.condition.icon"
        :temp="weatherInfo.current?.temp_c"
        :humidity="weatherInfo.current?.humidity"
        :wind="weatherInfo.current?.wind_mph"
      />
      <Forecast />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Forecast from "./components/Forecast.vue";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import TemperatureDetail from "./components/TemperatureDetail.vue";
import LocalTime from "./components/LocalTime.vue";

import { urlAPI } from "./global/constants";

export default {
  data() {
    return {
      weatherInfo: [],
      urlWeatherData: urlAPI,
    };
  },
  components: {
    Header,
    TemperatureDetail,
    Forecast,
    SearchBar,
    LocalTime,
  },
  async mounted() {
    const res = await axios.get(this.urlWeatherData("vietnam"));
    this.weatherInfo = res.data;
  },
};
</script>
