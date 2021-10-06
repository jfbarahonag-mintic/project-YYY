<template>
    <footer class="d-flex flex-column">
        <!-- informacion -->
        <div v-if="minimalist === false" class="container-fluid text-light p-3" style="background-color:rgba(18, 26, 47, 0.73)">
            <div class="row">
                <!-- centro de ayuda -->
                <div class="col-12 col-lg-4 centro-ayuda">
                    <div class="border border-white rounded p-1">
                        <h6>Centro de ayuda</h6>
                        <ul class="list-unstyled rounded px-2">
                            <li class="">PRQs</li>
                            <li class="">Preguntas Frecuentes</li>
                            <li class="">Politica de tratamiento de datos</li>
                            <li class="">Reversiones</li>
                        </ul>
                    </div>
                </div>
                <!-- end centro de ayuda -->
                <!-- creadores -->
                <div class=" col-12 col-lg-5 creators d-none d-lg-block">
                    <div class="border border-white rounded d-flex flex-column align-items-center p-1">
                        <h6>Creadores</h6>
                        <ul class="list-unstyled d-flex">
                            <li class="mx-2">
                                <ul class="list-unstyled">
                                    <li>Nombre</li>
                                    <li>Email</li>
                                    <li>Email</li>
                                    <li>Celular</li>
                                    <li><a href="#">Github</a></li>
                                </ul>
                            </li>
                            <li class="mx-2">
                                <ul class="list-unstyled">
                                    <li>Nombre</li>
                                    <li>Email</li>
                                    <li>Email</li>
                                    <li>Celular</li>
                                    <li><a href="#">Github</a></li>
                                </ul>
                            </li>
                            <li class="mx-2">
                                <ul class="list-unstyled">
                                    <li>Nombre</li>
                                    <li>Email</li>
                                    <li>Email</li>
                                    <li>Celular</li>
                                    <li><a href="#">Github</a></li>
                                </ul>
                            </li>
                            <li class="mx-2">
                                <ul class="list-unstyled">
                                    <li>Nombre</li>
                                    <li>Email</li>
                                    <li>Email</li>
                                    <li>Celular</li>
                                    <li><a href="#">Github</a></li>
                                </ul>
                            </li>
                            <li class="mx-2">
                                <ul class="list-unstyled">
                                    <li>Nombre</li>
                                    <li>Email</li>
                                    <li>Email</li>
                                    <li>Celular</li>
                                    <li><a href="#">Github</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- end creadores -->
                <!-- redes -->
                <div class="col-12 col-lg-3 social h-100 d-flex flex-column justify-content-center align-items-center">
                    <div class="d-flex flex-column">
                        <h6>Sobre nosotros</h6>
                        <div class="imgs">
                            <img src="" alt="fb">
                            <img src="" alt="ig">
                            <img src="" alt="tw">
                        </div>
                    </div>
                </div>
                <!-- end redes -->
            </div>
        </div>
        <div v-else class="container-fluid text-light" style="background-color:rgba(18, 26, 47, 0.73)">
            <div class="row">
                <div class="col-12 col-md-4 border-end border-dark">
                    <a class="nav-link text-light" href="#">Centro de ayuda</a>
                    <a class="nav-link text-light" href="#">Preguntas frecuentes</a>
                </div>
                <div class="col-12 col-md-4 border-end border-dark">
                    <div class="d-flex flex-column">
                        <a class="nav-link text-light \" href="#">Sobre nosotros</a>
                        <div class="imgs d-none d-md-block">
                            <img src="" alt="fb">
                            <img src="" alt="ig">
                            <img src="" alt="tw">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 border-start border-dark d-flex align-items-center justify-content-center">
                    <a class="nav-link text-light" href="#">Contactanos</a>
                </div>
            </div>
        </div>
        <!-- copyright -->
        <div class="container-xxl" style="background-color:rgba(18, 26, 47, 1)">
            <div class="text-wrap text-light text-center text-md-end me-2" >
                Mision TIC 2022 | Todos los derechos reservados ®
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    components: {},
    props: {
        minimalist: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style>

</style>