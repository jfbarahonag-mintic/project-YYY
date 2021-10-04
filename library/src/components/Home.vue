<template>
<div>
    <!-- header -->
    <Header/>
    <!-- end header -->
    <div class="d-flex flex-column align-items-center">
        <div>
            <h3>Novedades</h3>
        </div>
        <div id="novelties" class="carousel slide w-25" data-bs-ride="carousel">
            <div class="carousel-inner container carousel-fade">
                <div class="carousel-item active col-3">
                    <img src="../assets/book_1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item col-3">
                    <img src="../assets/book_2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item col-3">
                    <img src="../assets/book_3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#novelties" data-bs-slide="prev" style="background-color: rgba(0,0,0,0.3)">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#novelties" data-bs-slide="next" style="background-color: rgba(0,0,0,0.1)">
                <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <!-- novedades -->
    <!-- end novedades -->
    <!-- recomendados -->
    <!-- end recomendados -->
    <!-- mas vendidos -->
    <!-- end mas vendidos -->
    <!-- footer -->
    <Footer/>
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