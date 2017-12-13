<style scoped>
p{
	font-size: 26px;
}
</style>

<template>
  <div class="box">
	  <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'box',
  data(){
	  return {
		  title: 'box'
	  }
  },
  mounted(){
	console.log('box');
  },
  methods: {
  }
}
</script>

