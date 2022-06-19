import { getWeatherByCoords } from "../../services/api.service";
export const forecastModule = {
    state: () => ({
        forecastForToday: undefined,
        forecastForFourDays: undefined,
    }),
    getters: {
        getforecastForToday(state) {
            return state.forecastForToday;
        },
        getForecastForFourDays(state) {
            return state.forecastForFourDays;
        },
    },
    mutations: {
        setForecastForToday(state, forecastForToday) {
            state.forecastForToday = forecastForToday;
        },
        setForecastForFourDays(state, forecastForFourDays) {
            state.forecastForFourDays = forecastForFourDays;
        },
    },
    actions: {
        async refreshForecastForToday({ commit, rootGetters }) {
            const forecastForToday = await getWeatherByCoords(
                rootGetters.getLocationName
            );
            commit("setForecastForToday", forecastForToday);
        },
    },
};
