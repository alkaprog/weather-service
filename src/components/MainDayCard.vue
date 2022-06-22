<template>
    <div class="wrapper" v-if="this.getforecastForToday">
        <!-- <div class="">{{ this.getforecastForToday }}</div> -->
        <div class="date-block">
            <div class="date">{{ this.getCurrentDate().date }}</div>
            <div class="time">
                {{ this.getCurrentDate().time }}
            </div>
            <button
                class="refresh-button"
                @click="this.refreshForecastForToday"
            >
                <img
                    class="refresh-button-icon"
                    src="../assets/refresh.png"
                    alt="refresh"
                />
            </button>
        </div>
        <div class="location-name">{{ this.getLocationName }}</div>
        <div class="weather">
            <div class="temperature">
                {{ this.getforecastForToday.main.temp }} °С
            </div>
            <img
                :src="
                    'http://openweathermap.org/img/wn/' +
                    this.getforecastForToday.weather[0].icon +
                    '@2x.png'
                "
                alt=""
                class="weather-icon"
            />
            <div class="weather-description">
                {{ this.getforecastForToday.weather[0].description }}
            </div>
        </div>

        <div class="hourly-forecast"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getCurrentDate } from "@/services/date.service";
export default {
    computed: {
        ...mapGetters({
            getLocationName: "getLocationName",
            getforecastForToday: "getforecastForToday",
        }),
    },
    methods: {
        ...mapActions({
            refreshForecastForToday: "refreshForecastForToday",
        }),
        getCurrentDate,
    },
    props: {
        date: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="css" scoped>
.wrapper {
    font-weight: 600;
    background: #293c73;
    color: white;
    width: 100%;
    height: 170px;
    align-self: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px;
}
.wrapper .date-block {
    display: flex;
}
.wrapper .date-block .time {
    margin-left: 10px;
}

.wrapper .date-block .refresh-button {
    margin-left: 10px;
    background: inherit;
    border: none;
}
.wrapper .date-block .refresh-button:hover {
    cursor: pointer;
}
.wrapper .location-name {
    margin-top: 10px;
}
.wrapper .weather {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.wrapper .weather .temperature {
    font-size: 30px;
}
.wrapper .weather .weather-description {
    font-size: 30px;
}

.refresh-button-icon {
    width: 16px;
    transition: transform 0.7s ease-in-out;
}
</style>
