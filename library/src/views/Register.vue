<template>
    <div>
        <Header></Header>
        <Aside></Aside>
        <Footer :minimalist=true></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Header,
        Aside,
        Footer,
    }
}
</script>

<style>

</style>