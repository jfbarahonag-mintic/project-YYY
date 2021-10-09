<template>
    <div class="container-fluid" style="height: 100vh">
        <div class="row h-100">
            <!-- aside -->
            <Aside :registered="false"></Aside>
            <!-- main -->
            <section class=" col-12 col-lg-10 d-flex flex-column justify-content-around align-items-center">
                <div class="p-2 go-to-register align-self-end">
                    <span class="me-5 text-muted">Aun no tienes una cuenta?</span><router-link class="go-to btn btn-outline-secondary text-muted" to="/register">REGISTRATE</router-link>
                </div>
                <router-link class="go-to d-block d-lg-none mb-2" to="/home"><svg width="110" height="110" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="79" height="69" stroke="black"/>
                    <circle cx="39.5" cy="35.5" r="32" fill="#C4C4C4" stroke="black"/>
                </svg></router-link>
                
                <h1><b>LOGIN</b></h1>
                <form class="w-50">
                    <div class="mb-3">
                        <label for="email" class="form-label text-start">Correo electronico</label>
                        <input  placeholder="example@email.com" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-5">
                        <label for="pswd" class="form-label">Contrasena</label>
                        <input  placeholder="contrasena" type="password" class="form-control" id="pswd">
                    </div>
                    <button type="submit" class="btn mb-2 py-3" style="background-color: #CFEAFD">INICIAR SESION</button>
                </form>
                
                <div></div>
            </section>
        </div>
        <Footer class="row d-none d-lg-block :minimalist=true"></Footer>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Aside from '../components/Aside.vue'

export default {
    name: 'Login',
    components: {
        Footer,
        Aside,
    }
}
</script>

<style scoped>
    .go-to:hover {
        background-color: rgba(64, 185, 223, 0.1);
    }
</style>