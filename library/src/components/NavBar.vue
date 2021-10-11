<template>
    <!-- nav section -->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgba(255, 255, 255, 0.41);">
        <div class="container-xxl">
            <!-- logo -->
            <router-link class="navbar-brand" to="/">
                <svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="79" height="69" stroke="black"/>
                    <circle cx="39.5" cy="35.5" r="32" fill="#C4C4C4" stroke="black"/>
                </svg>
                La libreria
            </router-link>
            <!-- end logo -->
            <!-- responsive button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- menu -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">LIBROS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-current="page" href="#">EBOOKS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">RECOMENDADOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-current="page" href="#">DONAR</a>
                    </li>
                </ul>
                <form class="ps-1 d-none d-lg-flex" style="background-color: #202d59;">
                <label for="form-control" class="text-light me-1 align-self-center">Libros</label>
                <input class="form-control" type="search" placeholder="Buscar..." aria-label="Search">
                    <button class="btn" type="submit">
                        <!-- magnifying glass -->
                        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.576001" y1="21.735" x2="5.576" y2="13.735" stroke="white"/>
                            <circle cx="8.5" cy="7.5" r="7" stroke="white"/>
                        </svg>
                        <!-- end magnifying glass -->
                    </button>
                </form>
            </div>
            <!-- end menu -->
        </div>
    </nav>
    <!-- end nav section -->
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

</style>