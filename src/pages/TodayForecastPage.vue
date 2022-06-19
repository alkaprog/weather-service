<template>
    <div>
        <div>Weather forecast for today in {{ $route.params.city }}</div>
        <div>{{ $store.state.todayWeather }}</div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
// import { getWeather } from "../services/api.service.js";
export default {
    mounted() {
        this.refreshForecastForToday();
        // $state.forecast.
    },
    methods: {
        ...mapActions({
            refreshForecastForToday: "refreshForecastForToday",
        }),
    },
    computed: {
        // ...mapState(),
    },
};
</script>

<style></style>
