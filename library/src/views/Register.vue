<template>
    <div class="container-fluid" >
        <div class="row h-100">
            <!-- aside -->
            <Aside :registered="false"></Aside>
            <!-- main -->
            <section class=" col-12 col-lg-10 d-flex flex-column justify-content-around align-items-center">
                <div class="p-2 go-to-register align-self-end">
                    <span class="me-5 text-muted">Ya tienes una cuenta?</span><router-link class="go-to btn btn-outline-secondary text-muted" to="/login">INGRESA</router-link>
                </div>
                <router-link class="go-to d-block d-lg-none mb-2" to="/home"><svg width="110" height="110" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="79" height="69" stroke="black"/>
                    <circle cx="39.5" cy="35.5" r="32" fill="#C4C4C4" stroke="black"/>
                </svg></router-link>
                
                <h1><b>REGISTRO</b></h1>
                <form class="w-50 form" @submit.prevent="register">
                    <div class="mb-3 d-flex flex-column">
                        <label for="fname" class="text-start form-label">Nombre(s)</label>
                        <input required v-model="f_name" placeholder="Pepito" type="text" class="form-control" id="fname">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="lname" class="text-start form-label">Apellido(s)</label>
                        <input required  v-model="l_name" placeholder="Perez Pombo" type="text" class="form-control" id="lname">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="email" class="form-label text-start">Correo electronico</label>
                        <input required v-model="email" placeholder="example@email.com" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="doc" class="form-label text-start">Documento</label>
                        <select v-model="document.type" class="form-select" aria-label="Default select example" id="doc">
                            <option selected>*Seleccionar</option>
                            <option value="CC">Cedula de ciudadania</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <!-- <option value="3">Three</option> -->
                        </select>
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="doc-number" class="form-label text-start">Numero de documento</label>
                        <input required v-model="document.number" placeholder="Numero documento" type="text" class="form-control" id="doc-number">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="cel-number" class="form-label text-start">Numero de celular</label>
                        <input required v-model="phone" placeholder="Celular" type="tel" class="form-control" id="cel-number">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="pswd" class="form-label text-start">Contrasena</label>
                        <input required v-model="pswd" placeholder="Tu password" type="password" class="form-control" id="pswd">
                    </div>
                    <div class="mb-3 d-flex flex-column">
                        <label for="pswd'repeat" class="form-label text-start">Confirmar contrasena</label>
                        <input required v-model="ver_pswd" placeholder="Tu password" type="password" class="form-control" id="pswd'repeat">
                    </div>


                    <button type="submit" class="btn mb-2 py-3" style="background-color: #CFEAFD">REGISTRARME</button>
                </form>
                
                <div></div>
            </section>
        </div>
        <Footer class="row :minimalist=true"></Footer>
    </div>
</template>

<script>
import Aside from '../components/Aside.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Aside,
        Footer,
    },

    data() {
        return {
            f_name: "",
            l_name: "",
            email: "",
            document: {
                type: "",
                number: ""
            },
            phone: "",
            pswd: "",
            ver_pswd: "",
            error: false
        }
    },

    methods: {
        register: function() {
            
            // send to BE
        }
    }
}
</script>

<style>

</style>