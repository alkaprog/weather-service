<template>
    <div class="wrapper">
        <div class="day-name">{{ this.dayInfo.dayName }}</div>
        <div class="weather">
            <img
                class="weather-icon"
                :src="this.getImageLink"
                alt="weather-icon"
            />
            <div class="max-temp">{{ this.dayInfo.maxTemp }}°</div>
            <div class="min-temp">{{ this.dayInfo.minTemp }}°</div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isActive: false,
    }),
    props: {
        dayInfo: {
            type: Object,
            required: true,
        },
    },
    computed: {
        getImageLink() {
            return (
                "http://openweathermap.org/img/wn/" +
                this.dayInfo.icon +
                "@2x.png"
            );
        },
    },
};
</script>

<style scoped>
.wrapper {
    min-width: 100px;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    color: #293c73;
}
.wrapper .day-name {
    font-size: 25px;
}
.wrapper:hover {
    background: lightgrey;
}
.weather-icon {
    height: 40px;
}
.min-temp {
    color: white;
    padding: 1px;
    margin-top: 3px;
    background: #0077ff;
    border-radius: 2px;
    margin-bottom: 1px;
}
.max-temp {
    padding: 1px;
    color: white;
    background: #ec6e4c;
    border-radius: 2px;
}
</style>
