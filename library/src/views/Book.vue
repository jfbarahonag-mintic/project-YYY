<template class="min-vh-100">
    <div>
        <Header/>
        <div class="container my-2">
            <div class="row">
                <div class="col-12 col-lg-3">
                    <img src="../assets/book_1.jpg" alt="">
                </div>
                <div class="col-12 col-lg-9 d-flex flex-column align-items-center align-items-md-start ">
                    <h3>Titulo de libro</h3>
                    <h6>Autor del libro</h6>
                    <span>{{price}} COP</span>
                    <div class="shop-options my-3">
                        <button class="btn btn-secondary" v-on:click="qty = qty <= 1 ? 1 : --qty ">-</button>
                        <span class="mx-2">{{qty}}</span>
                        <button class="btn btn-secondary" v-on:click=" qty++ ">+</button>
                        <button class="btn btn-primary ms-5">Comprar</button>
                    </div>
                    <h3>Descripcion</h3>
                    <p class="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit rem velit minima, placeat architecto consequatur provident ducimus quaerat tenetur consequuntur dolorum quia expedita quam. Doloremque veniam beatae illum placeat cupiditate!</p>
                </div>
            </div>
            <div class="row">

            </div>
        </div>
        <Footer :minimalist=true></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "Book",
    data() {
        return {
            qty : 0,
            price : 30000,
        }
    },
    components: {
        Header,
        Footer,
    }
}
</script>

<style>

</style>