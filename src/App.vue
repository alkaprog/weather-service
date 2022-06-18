<template>
    <div id="app">
        <nav-bar></nav-bar>
        <div class="container"><router-view></router-view></div>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
    components: { NavBar },
    name: "App",
    // components: {
    //     HelloWorld,
    // },
};
</script>

<style>
html,
body {
    margin: 0px !important;
    padding: 0px !important;
}
#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: blue;
    padding: 0;
    margin: 0;
}
.container {
    display: flex;
    align-self: center;
    width: 900px;
    padding: 5px;
}
</style>
