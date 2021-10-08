<template>
    <aside class=" col-2 d-none d-lg-flex flex-column align-items-center justify-content-around" style="background-color: #40B9DF;">
        <router-link class="mb-2" to="/home"><svg width="110" height="110" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="79" height="69" stroke="black"/>
            <circle cx="39.5" cy="35.5" r="32" fill="#C4C4C4" stroke="black"/>
        </svg></router-link>
        <div>
            <p class="h3 text-end" style="color:#ffffff">
                Gracias por hacer parte de esta gran <b style="color:#FFCC82;">comunidad</b> amante de la lectura.
            </p>
        </div>
        <div>
            <p class="h2">
                <span v-if="registered === false">📘</span>
                <span v-else>📖</span>
            </p>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Aside',
    components: {},
    props: {
        registered: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style>

</style>