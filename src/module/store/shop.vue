<style scoped>
    .m-shop-main{
        color: #ff0000;
    }
</style>
<template>
  <div class=".m-shop-main">
      {{msg}}
      <button @click='btn'>click</button>
  </div>
</template>
<script>
export default{
    name: 'shop',
    data(){
        return {
            msg: 'my-router'
        }
    },
    mounted(){
        console.log('shop')
    },
    methods: {
        btn(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

