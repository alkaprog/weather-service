<template>
    <div>{{ this.get() }}</div>
</template>

<script>
import {
    getCityCoords,
    getWeatherByCoords,
    getThreeDaysForecast,
} from "../services/api.service.js";
export default {
    data() {
        // days: [Date.now()];
    },
    methods: {
        async get() {
            const weather = await getWeatherByCoords("Rostov-on-Don");
            console.log(weather);
            const temp = await getCityCoords("Rostov-on-Don");
            console.log(temp);
            const temp2 = await getThreeDaysForecast("Rostov-on-Don");
            console.log(temp2);
            return JSON.stringify(123);
        },
    },
};
</script>

<style></style>
