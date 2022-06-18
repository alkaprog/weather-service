import axios from "axios";
//import https from "https";
//import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
//r> $env:TOKEN='5122a5d00751f826c44da67427d31c68';$env:CITY='moscow';node weather
const getWeather = async (city) => {
    const token = "5122a5d00751f826c44da67427d31c68"; //await getKeyValue(TOKEN_DICTIONARY.token);

    if (!token) {
        throw new Error("Не задан api ключ!");
    }
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
    /*
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", city);
    url.searchParams.append("appid", token);
    url.searchParams.append("lang", "ru");
    url.searchParams.append("units", "metric");

    https.get(url, (response) => {
        let res = "";
        response.on("data", (chunc) => {
            res += chunc;
        });
        response.on("end", (chunc) => {
            console.log(res);
        });
    });
    */
};

const getWeatherByCoords = async (city) => {
    const token = "5122a5d00751f826c44da67427d31c68";
    if (!token) {
        throw new Error("Не задан api ключ!");
    }
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
    const token = "5122a5d00751f826c44da67427d31c68";
    const coords = await getCityCoords(city);
    if (!token) {
        throw new Error("Не задан api ключ!");
    }

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
        weatherForThreeDays[i] = {
            date: weatherForThreeDays[i],
            temperature: maxTemp,
        };
    }

    return weatherForThreeDays;
};

const getCityCoords = async (city) => {
    const token = "5122a5d00751f826c44da67427d31c68"; //await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error("Не задан api ключ!");
    }
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

export { getWeather, getCityCoords, getWeatherByCoords, getThreeDaysForecast };
