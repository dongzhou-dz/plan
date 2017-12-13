<style scoped>
    p{
        font-size: 30px;
    }
</style>

<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'index',
  data(){
      return {
          title: 'index'
      }
  },
  methods: {
      
  }
}
</script>

