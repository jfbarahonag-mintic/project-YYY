<template>
<div>
    <!-- header -->
    <Header/>
    <!-- end header -->
    <!-- novedades -->
    <Carousel title="Novedades" id="novedades"/>
    <!-- end novedades -->
    <!-- recomendados -->
    <Carousel title="Recomendados" id=recomendados style="background-color: #eef4f6"/>
    <!-- end recomendados -->
    <!-- mas vendidos -->
    <Carousel title="Mas Vendidos" id="mas-vendidos"/>
    <!-- end mas vendidos -->
    <!-- footer -->
    <Footer :minimalist=true />
    <!-- end footer -->
</div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Carousel,
        Footer,
    }
}
</script>

<style>
    
</style>