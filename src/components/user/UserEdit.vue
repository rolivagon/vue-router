<template>
    <div>
        <h3>Edit user {{ id }}</h3>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Analytics: {{$route.query.q}}</p>
        <p>
            <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        </p>
        <div style="height:800px;background-color:red"></div>
        <p id="data">
            Extra data
        </p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            confirmed:false
        }
    },
    beforeRouteEnter(to, from, next) {
        const cond = true;
        if(cond) {
            next();
        } else {
            next(false);
        }
    },
    beforeRouteLeave(to,from,next) {
        if(this.confirmed) {
            next();
        } else {
            if(confirm('Are you sure?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>

<style>

</style>