<template>
<div class="d-flex flex-column align-items-center my-2">
        <div class="ms-5 align-self-start">
            <h3>{{title}}</h3>
        </div>
        <div :id="id" class="carousel slide w-100" data-bs-ride="carousel">
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
                <button class="carousel-control-prev position-static w-auto rounded-circle p-2 mx-2" type="button" v-bind:data-bs-target="'#' + id" data-bs-slide="prev" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next position-relative w-auto rounded-circle p-2 mx-2" type="button" v-bind:data-bs-target="'#' + id" data-bs-slide="next" style="background-color: rgba(0,0,0,0.3)">
                    <span class="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'id']
}
</script>

<style>

</style>