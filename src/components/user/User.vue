<template>
   <div>
        <h1>User</h1>
        <p>
            <button @click="navigateToHome"
                type="button"
                class="btn btn-primary">
                Go to home
            </button>
        </p>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/')
            }
        }
    }
</script>

<style>

</style>