import axios from "axios";

const getWeatherResult = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56b858503dda1ee69acb18ccf4f48a83`
  );

  return response.data;
};

export default getWeatherResult;
