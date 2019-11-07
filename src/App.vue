<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-xs-12 col-sm-8 col-md-6">
                <h1>Routing</h1>
                <hr>
                <router-view name="header-top"></router-view>
                <hr>
                <router-view></router-view>
                <hr>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
</style>
