import {
    getFiveDaysForecast,
    getWeatherByCoords,
    findMostFrequentElement,
} from "@/services/api.service";
import { getDayName, formatDate } from "@/services/date.service";
export const forecastModule = {
    state: () => ({
        forecastForToday: undefined,
        forecastForFourDays: undefined,
        forecastForFiveDays: undefined,
    }),
    getters: {
        getforecastForToday(state) {
            console.log(state.forecastForToday);
            return state.forecastForToday;
        },
        getForecastForFourDays(state) {
            return state.forecastForFourDays;
        },
        getForecastForFiveDays(state) {
            return state.forecastForFiveDays;
        },
        getWeatherInfoForFourDays(state) {
            if (state.forecastForFiveDays) {
                let weatherInfoForFourDays = [];
                for (let i = 0; i < 4; i++) {
                    weatherInfoForFourDays.push(
                        new Date(
                            new Date().getTime() + (i + 1) * 24 * 60 * 60 * 1000
                        )
                            .toISOString()
                            .slice(0, 10)
                    );
                }
                for (let i = 0; i < 4; i++) {
                    let maxTemp = Math.max(
                        ...state.forecastForFiveDays.list
                            .filter((el) =>
                                el.dt_txt.includes(weatherInfoForFourDays[i])
                            )
                            .map((o) => o.main.temp)
                    );
                    const icons = state.forecastForFiveDays.list
                        .filter((el) =>
                            el.dt_txt.includes(weatherInfoForFourDays[i])
                        )
                        .map((el) => el.weather[0].icon);
                    // console.log(temp);
                    weatherInfoForFourDays[i] = {
                        date: weatherInfoForFourDays[i],
                        temperature: maxTemp,
                        icon: findMostFrequentElement(icons),
                    };
                    console.log(weatherInfoForFourDays[i]);
                }
                return weatherInfoForFourDays;
            }
            return undefined;
        },
        getWeatherInfoForGraph(state) {
            let weatherInfoForFiveDays = [];
            for (let i = 0; i < 5; i++) {
                const date = new Date().getTime() + i * 24 * 60 * 60 * 1000;
                const dayName = getDayName(new Date(date));
                const tempForDay = [...state.forecastForFiveDays.list]
                    .filter((el) =>
                        el.dt_txt.includes(formatDate(new Date(date)))
                    )
                    .map((o) => o.main.temp);
                weatherInfoForFiveDays.push({
                    name: dayName,
                    avg:
                        tempForDay.reduce((p, c) => p + c, 0) /
                        tempForDay.length,
                    min: Math.min(...tempForDay),
                    max: Math.max(...tempForDay),
                });
            }
            return weatherInfoForFiveDays;
        },
    },
    mutations: {
        setForecastForToday(state, forecastForToday) {
            state.forecastForToday = forecastForToday;
        },
        setForecastForFourDays(state, forecastForFourDays) {
            state.forecastForFourDays = forecastForFourDays;
        },
        setForecastForFiveDays(state, forecastForFiveDays) {
            state.forecastForFiveDays = forecastForFiveDays;
        },
    },
    actions: {
        async refreshForecastForToday({ commit, rootGetters }) {
            const forecastForToday = await getWeatherByCoords(
                rootGetters.getLocationName
            );
            commit("setForecastForToday", forecastForToday);
        },
        async refreshForecastForFiveDays({ commit, rootGetters }) {
            const forecastForFiveDays = await getFiveDaysForecast(
                rootGetters.getLocationName
            );
            commit("setForecastForFiveDays", forecastForFiveDays);
        },
    },
};
