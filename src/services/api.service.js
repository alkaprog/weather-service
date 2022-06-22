import axios from "axios";
import { token } from "@/constants/token";
const getWeather = async (city) => {
    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );
    return data;
};

const getWeatherByCoords = async (city) => {
    const coords = await getCityCoords(city);
    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                lat: coords.lat,
                lon: coords.lon,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );
    return data;
};

const getThreeDaysForecast = async (city) => {
    const coords = await getCityCoords(city);
    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
            params: {
                lat: coords.lat,
                lon: coords.lon,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );

    let weatherForThreeDays = [];
    for (let i = 0; i < 3; i++) {
        weatherForThreeDays.push(
            new Date(new Date().getTime() + (i + 1) * 24 * 60 * 60 * 1000)
                .toISOString()
                .slice(0, 10)
        );
    }
    for (let i = 0; i < 3; i++) {
        let maxTemp = Math.max(
            ...data.list
                .filter((el) => el.dt_txt.includes(weatherForThreeDays[i]))
                .map((o) => o.main.temp)
        );
        const icons = data.list
            .filter((el) => el.dt_txt.includes(weatherForThreeDays[i]))
            .map((el) => el.weather[0].icon);
        // console.log(temp);
        weatherForThreeDays[i] = {
            date: weatherForThreeDays[i],
            temperature: maxTemp,
            icon: findMostFrequentElement(icons),
        };
    }

    return weatherForThreeDays;
};

const getFiveDaysForecast = async (city) => {
    const coords = await getCityCoords(city);
    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
            params: {
                lat: coords.lat,
                lon: coords.lon,
                appid: token,
                lang: "ru",
                units: "metric",
            },
        }
    );
    return data;
};

const getCityCoords = async (city) => {
    const { data } = await axios.get(
        "http://api.openweathermap.org/geo/1.0/direct",
        {
            params: {
                q: city,
                appid: token,
                lang: "ru",
            },
        }
    );
    return { lat: data[0].lat, lon: data[0].lon };
};

const findMostFrequentElement = (array) => {
    let elements = [...new Set(array)].map((el) => {
        return { value: el, frequency: 0 };
    });
    array.forEach((el) => {
        elements.find((icon) => icon.value == el).frequency += 1;
    });
    elements.sort((a, b) => {
        if (a.frequency > b.frequency) {
            return -1;
        }
        if (a.frequency < b.frequency) {
            return 1;
        }
        return 0;
    });
    return elements[0].value.includes("d")
        ? elements[0].value
        : elements[0].value.slice(0, elements[0].value.length - 1) + "d";
};

export {
    getWeather,
    getCityCoords,
    getWeatherByCoords,
    getThreeDaysForecast,
    getFiveDaysForecast,
    findMostFrequentElement,
};
