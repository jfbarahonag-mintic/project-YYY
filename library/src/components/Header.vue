<template>
    <div class="header d-flex flex-column" style="background-color: rgba(72, 196, 250, 0.69);">
        <!-- user section -->
        <User msg="Mi cuenta" class="align-self-end"></User>
        <!-- end user section -->
        <!-- nav section -->
        <NavBar></NavBar>
        <!-- end nav section -->
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import User from './User.vue'
export default {
    name: "Header",
    components: {
        NavBar,
        User,
    },
    props: {},
};
</script>

<style scoped>
</style>