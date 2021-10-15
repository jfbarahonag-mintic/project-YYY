<template>
    <div class="mx-5 my-2">
        <a href="#" class="d-flex">
            <!-- user logo -->
            <div class="user-img my-1 me-1">
                <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.2069" cy="8.2069" r="7.7069" stroke="black"/>
                    <path d="M1 29.0002C1 18.8623 1 18.8623 8.75604 18.8623H26.0716C33.8276 18.8623 33.8276 18.8623 33.8276 29.0002" stroke="black"/>
                </svg>
            </div>
            <!-- end user logo -->
            <!-- user text options -->
            <div class="user-text">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        {{getUsername() || 'Mi cuenta'}}
                    </button>
                    <ul v-if="getLoggedStatus() === false" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><router-link to="/login" class="dropdown-item">INICIAR SESION</router-link></li>
                        <li><router-link to="/register" class="dropdown-item">REGISTRARSE</router-link></li>
                    </ul>
                    <ul v-else class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><router-link to="/profile" class="dropdown-item">IR A MI PERFIL</router-link></li>
                        <!-- <li><router-link to="/register" class="dropdown-item">REGISTRARSE</router-link></li> -->
                    </ul>
                </div>
            </div>
            <!-- end user text options -->
        </a>
    </div>
</template>

<script>
export default {
    name: "User",

    methods: {
        getLoggedStatus: function() {
            return this.$store.state.user.logged;
        },

        getUsername: function() {
            return this.$store.state.user.data.f_name;
        },
    }
}
</script>

<style>

</style>