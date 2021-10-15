<template>
<div>
    <Header></Header>
    <div class="d-flex flex-row ">
        <Aside :registered="true"></Aside>
        <div class="w-100 container my-2">
            <div class="row">
                <h3>Tu cuenta</h3>
            </div>
            <div class="row d-flex flex-column">
                <div class="d-flex justify-content-center">
                    <h5>Informacion personal</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill justify-self-end" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                </div>
                <hr>
                <div class="container">
                    <div class="row mx-2 my-5">
                        <div class="col-12 col-md-6 p-2">
                            <div class="border">
                                <h6>Nombre(s)</h6>
                                <h3>{{user.f_name}}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-2">
                            <div class="border">
                                <h6>Apellido(s)</h6>
                                <h3>{{user.l_name}}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-2 my-5">
                        <div class="col-12 col-md-6 p-2">
                            <div class="border">
                                <h6>Tipo de documento</h6>
                                <h3>{{user.doc_type}}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-2">
                            <div class="border">
                                <h6>Numero de documento</h6>
                                <h3>{{user.doc_num}}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-2 my-5">
                        <div class="col-12 col-md-6 p-2">
                            <div class="border">
                                <h6>Email</h6>
                                <h3>{{user.email}}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 p-2">
                            <div class="border">
                                <h6>telefono</h6>
                                <h3>{{user.phone}}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button class="btn btn-danger w-100" @click="logout">Cerrar sesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    },

    data() {
        return {
            user: {
                f_name:'',
                l_name:'',
                email:'',
                doc_type:'',
                doc_num:'',
                phone:'',
            }
        }
    },

    mounted: function() {
        const user = this.$store.getters.userData
        if (user != null) {
            this.user = user
            console.log(this.user.f_name)
        }
    },

    methods: {
        logout: function() {
            this.$store.commit('setLogged', false)
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>

</style>