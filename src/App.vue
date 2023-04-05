<template>
  <div
    class="w-full h-screen overflow-y-auto bg-no-repeat bg-cover text-white p-8"
    :style="`background-image: url('${handleChangeBackgroundImage()}')`"
  >
    <div class="max-w-screen-md m-auto px-[30px] py-[40px] rounded-lg bg-[#1e293b9e] shadow-light-black">
      <Header />
      <SearchBar @onUpdateSearchValue="handleUpdateSearchValue" />
      <LocalTime :localtime="weatherData.location.localtime" />
      <div class="flex items-center justify-between mt-[30px]">
        <p class="text-3xl">{{ weatherData.location.name }}</p>
        <p>Quốc gia: {{ weatherData.location.country }}</p>
      </div>
      <TemperatureDetail
        :icon="weatherData.current.condition.icon"
        :temp="weatherData.current.temp_c"
        :humidity="weatherData.current.humidity"
        :wind="weatherData.current.wind_mph"
        :feelsLike="weatherData.current.feelslike_c"
        :forecastData="weatherData.forecast.forecastday"
        :localtime="weatherData.location.localtime"
      />
      <Forecast :forecastData="weatherData.forecast.forecastday" :localtime="weatherData.location.localtime" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";

import Forecast from "./components/Forecast.vue";
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import TemperatureDetail from "./components/TemperatureDetail.vue";
import LocalTime from "./components/LocalTime.vue";
import { URL_KEY, URL_BASE_API, BACKGROUND_IMAGE_DATA, BACKGROUND_IMAGE_DEFAULT } from "./global/constants";

const route = useRoute();
const searchValue = ref("");
const weatherData = ref(null);

const handleQueryLocation = () => {
  if (searchValue.value) {
    return searchValue.value;
  } else {
    return route.params.location;
  }
};

const fetchWeatherData = async () => {
  try {
    const result = await axios.get(URL_BASE_API, {
      params: {
        key: URL_KEY,
        q: handleQueryLocation(),
        days: 7,
      },
    });
    weatherData.value = result.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

watchEffect(() => {
  fetchWeatherData();
});

const handleChangeBackgroundImage = () => {
  const statusWeatherData = weatherData.value.current.condition.text.toLowerCase();
  const keys = Object.keys(BACKGROUND_IMAGE_DATA);
  const status = keys.find((key) => statusWeatherData.includes(key));
  if (status) {
    return BACKGROUND_IMAGE_DATA[status];
  } else {
    return BACKGROUND_IMAGE_DEFAULT;
  }
};

const handleUpdateSearchValue = (value) => {
  searchValue.value = value;
};
</script>
