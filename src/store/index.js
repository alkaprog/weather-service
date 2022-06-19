import { createStore } from "vuex";
import { forecastModule } from "./modules/forecastModule";
import { locationModule } from "./modules/locationModule";

export default createStore({
    // state: {
    //     city: "Rostov-on-Don",
    //     todayWeather: 1,
    // },
    // getters: {
    //     getTodayWeather(state) {
    //         return state.todayWeather;
    //     },
    // },
    // mutations: {
    //     setCity() {
    //         // sta
    //     },
    // },
    // actions: {},
    modules: {
        forecast: forecastModule,
        location: locationModule,
    },
});
