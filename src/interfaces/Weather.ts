interface BaseWeather {
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_kph: number;
  wind_mph: number;
  wind_dir: string;
  condition: Condition;
  humidity: number;
  is_day: number;
}

interface Current extends BaseWeather {
  last_updated: string;
  last_updated_epoch: number;
}

interface Condition {
  code: number;
  icon: string;
  text: string;
}

interface Astro {
  is_moon_up: number;
  is_sun_up: number;
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

interface Day {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
  condition: Condition;
}

interface Hour extends BaseWeather {
  chance_of_rain: number;
  chance_of_snow: number;
  dewpoint_c: number;
  dewpoint_f: number;
  heatindex_c: number;
  heatindex_f: number;
  time_epoch: number;
  will_it_rain: number;
  will_it_snow: number;
  windchill_c: number;
  windchill_f: number;
  time: string;
}

interface Location {
  lat: number;
  localtime_epoch: number;
  lon: number;
  country: string;
  localtime: string;
  name: string;
  region: string;
  tz_id: string;
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  astro: Astro;
  day: Day;
  hour: Hour[];
}

interface Weather {
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
  location: Location;
}

export default Weather;
