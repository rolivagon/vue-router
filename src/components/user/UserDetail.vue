<template>
  <div>
    <h3>User detail</h3>
    <p>
      User loaded has ID: {{ id }}
    </p>
    <p>
      <router-link :to="link"
        tag="button"
        class="btn btn-warning">
          Edit loaded user
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      link :{
          name:'userEdit', 
          params: {id: this.id}, 
          query: { 
            locale: 'en', 
            q:100 
          },
          hash:'#data'
      }
    }
  }
}
</script>

<style>

</style>