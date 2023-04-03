<template>
  <div
    class="w-full h-screen overflow-y-auto bg-no-repeat bg-cover text-white p-8"
    :style="`background-image: url('${handleChangeBackgroundImage}')`"
  >
    <div
      class="max-w-screen-md m-auto px-[30px] py-[40px] rounded-lg bg-[#1e293b9e] shadow-light-black"
      v-if="weatherInfo"
    >
      <Header />
      <SearchBar @onUpdateSearchValue="handleUpdateSearchValue" />
      <LocalTime :localtime="weatherInfo.location.localtime" />
      <div class="flex items-center justify-between mt-[30px]">
        <p class="text-3xl">{{ weatherInfo.location.name }}</p>
        <p>Quốc gia: {{ weatherInfo.location.country }}</p>
      </div>
      <TemperatureDetail
        :icon="weatherInfo.current.condition.icon"
        :temp="weatherInfo.current.temp_c"
        :humidity="weatherInfo.current.humidity"
        :wind="weatherInfo.current.wind_mph"
        :feelsLike="weatherInfo.current.feelslike_c"
        :forecastData="weatherInfo.forecast.forecastday"
        :localtime="weatherInfo.location.localtime"
      />
      <Forecast :forecastData="weatherInfo.forecast.forecastday" :localtime="weatherInfo.location.localtime" />
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

import { URL_KEY, URL_BASE_API, BACKGROUND_IMAGE_DATA, BACKGROUND_IMAGE_DEFAULT } from "./global/constants";

export default {
  data() {
    return {
      weatherInfo: null,
      searchValue: "",
    };
  },
  components: {
    Header,
    TemperatureDetail,
    Forecast,
    SearchBar,
    LocalTime,
  },
  created() {
    this.$watch(
      () => this.handleQueryLocation,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  computed: {
    handleQueryLocation() {
      if (this.searchValue) {
        return this.searchValue;
      } else {
        return this.$route.params.location;
      }
    },
    handleChangeBackgroundImage() {
      const statusWeatherData = this.weatherInfo.current.condition.text.toLowerCase();
      const keys = Object.keys(BACKGROUND_IMAGE_DATA);
      const status = keys.find((key) => statusWeatherData.includes(key));
      if (status) {
        return BACKGROUND_IMAGE_DATA[status];
      } else {
        return BACKGROUND_IMAGE_DEFAULT;
      }
    },
  },
  methods: {
    async fetchData() {
      const res = await axios.get(URL_BASE_API, {
        params: {
          key: URL_KEY,
          q: this.handleQueryLocation,
          days: 7,
        },
      });
      this.weatherInfo = res.data;
    },
    handleUpdateSearchValue(value) {
      this.searchValue = value;
    },
  },
};
</script>
