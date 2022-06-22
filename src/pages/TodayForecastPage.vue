<template>
    <div class="wrap" v-if="this.getWeatherInfoForFourDays">
        <!-- {{ this.getWeatherInfoForFourDays }} -->
        <div class="day-cards">
            <small-weather-card
                v-for="day of this.getWeatherInfoForFourDays"
                :key="day.date"
                :dayInfo="day"
            ></small-weather-card>
        </div>
        <main-day-card
            class="current-weather-card"
            :date="new Date()"
        ></main-day-card>
        <temperature-graph
            :info="this.getWeatherInfoForGraph"
        ></temperature-graph>
        <!-- <chart-example></chart-example> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SmallWeatherCard from "@/components/SmallWeatherCard.vue";
import MainDayCard from "@/components/MainDayCard.vue";
import TemperatureGraph from "@/components/TemperatureGraph.vue";
export default {
    components: { MainDayCard, SmallWeatherCard, TemperatureGraph },
    data: () => ({}),
    mounted() {
        this.refreshForecastForToday();
        this.refreshForecastForFiveDays();
        setInterval(() => {
            this.refreshForecastForToday();
            this.refreshForecastForFiveDays();
        }, 10000);
    },
    methods: {
        ...mapActions({
            refreshForecastForToday: "refreshForecastForToday",
            refreshForecastForFiveDays: "refreshForecastForFiveDays",
        }),
    },
    computed: {
        ...mapGetters({
            getForecastForFiveDays: "getForecastForFiveDays",
            getWeatherInfoForFourDays: "getWeatherInfoForFourDays",
            getWeatherInfoForGraph: "getWeatherInfoForGraph",
        }),
    },
};
</script>

<style scoped>
.wrap {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.day-cards {
    display: flex;
    border: 2px #293c73 solid;
    border-radius: 10px;
    height: 60px;
    width: 100%;
    margin-bottom: 10px;
}
.current-weather-card {
    margin-bottom: 10px;
}
</style>
