<template>
<div>
    <!-- header -->
    <Header></Header>
    <!-- end header -->
    <!-- novedades -->
    <!-- end novedades -->
    <!-- recomendados -->
    <!-- end recomendados -->
    <!-- mas vendidos -->
    <!-- end mas vendidos -->
    <!-- footer -->
    <Footer></Footer>
    <!-- end footer -->
</div>
</template>

<script>

import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer,

    }
}
</script>

<style>
    
</style>