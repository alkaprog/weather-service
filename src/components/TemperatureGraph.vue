<template>
    <div class="chart-wrapper">
        <Chart
            :size="size"
            :data="data"
            :margin="margin"
            :direction="direction"
            :axis="axis"
        >
            <template #layers>
                <Grid strokeDasharray="2,2" />
                <Line
                    :dataKeys="['name', 'avg']"
                    type="monotone"
                    :lineStyle="{
                        stroke: '#293c73',
                    }"
                />
                <Line
                    :dataKeys="['name', 'max']"
                    type="monotone"
                    :lineStyle="{
                        stroke: '#fb5638',
                    }"
                ></Line>
                <Line
                    :dataKeys="['name', 'min']"
                    type="monotone"
                    :lineStyle="{
                        stroke: '#0077ff',
                    }"
                ></Line>
            </template>
        </Chart>
        <div class="designations">
            <div class="designation">
                <div class="color max"></div>
                <div class="title">Max</div>
            </div>
            <div class="designation">
                <div class="color min"></div>
                <div class="title">Min</div>
            </div>
            <div class="designation">
                <div class="color avg"></div>
                <div class="title">Avg</div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Chart, Grid, Line } from "vue3-charts";
// import { plByMonth } from "@/data";

export default defineComponent({
    name: "LineChart",
    components: { Chart, Grid, Line },
    props: {
        info: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const data = ref(props.info);
        const direction = ref("horizontal");
        const margin = ref({
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        });
        const size = ref({ width: 576, height: 450 });

        const axis = ref({
            primary: {
                type: "band",
            },
            secondary: {
                domain: ["dataMin", "dataMax+5"],
                type: "linear",
                ticks: 10,
            },
        });

        return { data, size, direction, margin, axis };
    },
});
</script>
<style scoped>
.chart-wrapper {
    color: #293c73;
    display: flex;
    flex-direction: column;
    border: 2px #293c73 solid;
    border-radius: 10px;
    padding: 10px;
}

.designations {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.designation {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.color {
    height: 10px;
    width: 40px;
}
.title{
    margin-left: 10px;
}
.max {
    background: #fb5638;
}
.avg {
    background: #293c73;
}
.min {
    background: #0077ff;
}
</style>
