<template>
<div>
    <!-- header -->
    <Header/>
    <!-- end header -->
    <!-- novedades -->
    <Carousel title="Novedades" id="novedades" :books="books"/>
    <!-- end novedades -->
    <!-- recomendados -->
    <Carousel title="Recomendados" id=recomendados :books="books" style="background-color: #eef4f6"/>
    <!-- end recomendados -->
    <!-- mas vendidos -->
    <Carousel title="Mas Vendidos" :books="books" id="mas-vendidos"/>
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

import image_1 from "../assets/book_1.jpg"
import image_2 from "../assets/book_2.jpg"
import image_3 from "../assets/book_3.jpg"

export default {
    name: 'Home',
    components: {
        Header,
        Carousel,
        Footer,
    },
    data() {
        return {
            books : [
                {
                    ISBN: "1",
                    title: "Book 1",
                    imgUrl: image_1
                },
                {
                    ISBN: "2",
                    title: "Book 2",
                    imgUrl: image_2
                },
                {
                    ISBN: "3",
                    title: "Book 3",
                    imgUrl: image_3
                },
                {
                    ISBN: "4",
                    title: "Book 4",
                    imgUrl: image_1
                },
                {
                    ISBN: "5",
                    title: "Book 5",
                    imgUrl: image_2
                },
                {
                    ISBN: "6",
                    title: "Book 6",
                    imgUrl: image_2
                },
                {
                    ISBN: "7",
                    title: "Book 7",
                    imgUrl: image_2
                },
            ],
        }
    }
}
</script>

<style>
    
</style>