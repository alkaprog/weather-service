import axios from "axios";
//import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
//r> $env:TOKEN='5122a5d00751f826c44da67427d31c68';$env:CITY='moscow';node weather
const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    // console.log(process.env);
    // console.log(token);
    // console.log(city);
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
export { getWeather };
