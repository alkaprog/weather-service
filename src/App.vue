<template>
    <div class="wrapper">
        <nav-bar></nav-bar>
        <div class="container"><router-view></router-view></div>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    components: { NavBar },
    name: "App",
};
</script>

<style scoped>

.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.container {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 900px;
    padding: 5px;
}
</style>
