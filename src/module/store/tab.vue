<template>
  <div class="m-main-tab">
      <p>{{title}}</p>
  </div>
</template>
<script>
export default {
	name: 'list',
  data(){
      return{
          title: 'tab module'
      }
  },
  mounted(){
      console.log('The tab page')
  }
}
</script>

