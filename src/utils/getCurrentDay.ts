import type { ForecastDay } from "@/interfaces/Weather";

function getCurrentDay(localtime: string, forecastData: ForecastDay[]) {
  const formatDate = localtime.split(" ").at(0);

  const result = forecastData.find((item) => {
    if (item.date === formatDate) {
      return item;
    }
  });

  return result;
}

export default getCurrentDay;
