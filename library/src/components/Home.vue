<template>
<div>
    <!-- header -->
    <Header/>
    <!-- end header -->
    <!-- novedades -->
    <div class="d-flex flex-column align-items-center my-2">
        <div class="ms-5 align-self-start">
            <h3>Novedades</h3>
        </div>
        <div id="novelties" class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-inner container">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">

                        </div>
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class=" " alt="...">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between py-2">
                <button class="carousel-control-prev position-static w-auto rounded-circle p-2 mx-2" type="button" data-bs-target="#novelties" data-bs-slide="prev" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next position-relative w-auto rounded-circle p-2 mx-2" type="button" data-bs-target="#novelties" data-bs-slide="next" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <!-- end novedades -->
    <!-- recomendados -->
    <div class="d-flex flex-column align-items-center my-2" style="background-color: #eef4f6">
        <div class="ms-5 align-self-start">
            <h3>Recomendados</h3>
        </div>
        <div id="recommended" class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#recommended" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#recommended" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#recommended" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner container">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">

                        </div>
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class=" " alt="...">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class=" " alt="...">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between py-2 position-relative">
                <button class="carousel-control-prev position-static w-auto rounded-circle p-2 mx-2" type="button" data-bs-target="#recommended" data-bs-slide="prev" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next position-relative w-auto rounded-circle p-2 mx-2" type="button" data-bs-target="#recommended" data-bs-slide="next" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <!-- end recomendados -->
    <!-- mas vendidos -->
    <div class="d-flex flex-column align-items-center my-2">
        <div class="ms-5 align-self-start">
            <h3>Mas vendidos</h3>
        </div>
        <div id="best_sellers" class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-inner container">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">

                        </div>
                        <div class="col-4">
                            <img src="../assets/book_1.jpg" class="" alt="...">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_2.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <a href=""><img src="../assets/book_2.jpg" class="" alt="..."></a>

                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class="" alt="...">
                        </div>
                        <div class="col-4">
                            <img src="../assets/book_3.jpg" class=" " alt="...">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between py-2">
                <button class="carousel-control-prev position-static w-auto rounded-circle p-2 mx-2" type="button" data-bs-target="#best_sellers" data-bs-slide="prev" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next position-relative w-auto rounded-circle p-2 mx-2" type="button" data-bs-target="#best_sellers" data-bs-slide="next" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
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