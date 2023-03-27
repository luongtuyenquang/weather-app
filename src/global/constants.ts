const URL_KEY = "08cc54cc48c14e79b95100100232303";

export const urlForecastAPI = (city: string) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${URL_KEY}&q=${city}&days=7`;
