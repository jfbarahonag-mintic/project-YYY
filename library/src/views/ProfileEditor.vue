<template>
    <div>
        <Header></Header>
        <div class="d-flex flex-row">
            <Aside :registered="true"></Aside>
            <section class=" col-12 col-lg-10 d-flex flex-column justify-content-around align-items-center">
                <h1 class="mt-5"><b>EDITOR</b></h1>
            
                <form class="w-50 form" @submit.prevent="edit">
                    <div class="mb-3 d-flex flex-column">
                        <label for="fname" class="text-start form-label">Nombre(s)</label>
                        <input required v-model="user.f_name" placeholder="Pepito" type="text" class="form-control" id="fname">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="lname" class="text-start form-label">Apellido(s)</label>
                        <input required  v-model="user.l_name" placeholder="Perez Pombo" type="text" class="form-control" id="lname">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="email" class="form-label text-start">Correo electronico</label>
                        <input required v-model="user.email" placeholder="example@email.com" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="doc" class="form-label text-start">Documento</label>
                        <select v-model="user.doc_type" class="form-select" aria-label="Default select example" id="doc">
                            <option selected>*Seleccionar</option>
                            <option value="CC">Cedula de ciudadania</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <!-- <option value="3">Three</option> -->
                        </select>
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="doc-number" class="form-label text-start">Numero de documento</label>
                        <input required v-model="user.doc_num" placeholder="Numero documento" type="text" class="form-control" id="doc-number">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="cel-number" class="form-label text-start">Numero de celular</label>
                        <input required v-model="user.phone" placeholder="Celular" type="tel" class="form-control" id="cel-number">
                    </div>
                    <!-- <div class="mb-3 d-flex flex-column">
                        <label for="pswd" class="form-label text-start">Contrasena</label>
                        <input required v-model="pswd" placeholder="Tu password" type="password" class="form-control" id="pswd">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="pswd'repeat" class="form-label text-start">Confirmar contrasena</label>
                        <input required v-model="ver_pswd" placeholder="Tu password" type="password" class="form-control" id="pswd'repeat">
                    </div> -->


                    <button type="submit" class="btn mb-2 py-3" style="background-color: #CFEAFD">GUARDAR</button>
                </form>
            </section>
        </div>
        <Footer :minimalist=true></Footer>
    </div>
</template>

<script>
import auth from '../auth'

import axios from "axios";

import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
import Footer from '../components/Footer.vue'

const BE_URL = "https://obscure-beach-34617.herokuapp.com/api/v1/users"

export default {
    name: 'Editor',
    components: {
        Header,
        Aside,
        Footer,
    },

    data() {
        return {
            user: {
                f_name: "",
                l_name: "",
                email: "",
                doc_type: "",
                doc_number: "",
                phone: "",
            }
        }
    },

    mounted: function() {
        const user = this.$store.getters.userData
        if (user != null) {
            this.user = user
        }
    },

    methods: {
        edit: function() {
            const url = `${BE_URL}/edit`
            const obj = {
                f_name: this.user.f_name,
                l_name: this.user.l_name,
                email: this.user.email,
                doc_type: this.user.doc_type,
                doc_num: this.user.doc_num,
                phone: this.user.phone,
            }
            axios.patch(url, obj). then(res => {

                const { data } = res
                if(data.status === 'updated') {
                    const user = data.data
                    auth.setUserLogged(JSON.stringify(user))
                    this.$store.commit('setUserData', user)
                    this.$router.push( { name:'Profile' } )
                }
            }). catch(e => {
                console.log(e)
            })
        }
    }

}
</script>

<style>

</style>