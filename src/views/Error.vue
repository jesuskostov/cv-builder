<template>
    <div>
        <navbar />
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <img class="error-img" src="../assets/images/icon-error.svg" alt="error icon">
                    <h1 class="mb-4">There was a problem with our system! We are unable to comply with your request.</h1>
                    <p class="text-left">Important: NO payments have been made. Our team has just been notified of this technical error. A solution will be provided as soon as possible. Thanks for your understanding.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navigation.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
.error-img {
    width: 100px;
    margin-bottom: 30px;
}
</style>