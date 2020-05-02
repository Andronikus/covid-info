import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";
const DAILY_URL = `${BASE_URL}/daily`;
const COUNTRIES_URL = `${BASE_URL}/countries`;

export const fetchData = async (country) => {
  try {
    let url = BASE_URL;

    if (country) {
      url = `${COUNTRIES_URL}/${country}`;
    }

    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  const { data } = await axios.get(DAILY_URL);

  const modifiedData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));

  return modifiedData;
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(COUNTRIES_URL);

    const countryNamesArray = countries.map((obj) => obj.name);

    return countryNamesArray;
  } catch (error) {
    console.log(error);
  }
};
