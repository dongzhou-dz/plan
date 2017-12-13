<template>
  <div class="list">
      <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'list',
  data(){
      return {
          title: 'list'
      }
  },
  mounted(){
      console.log('list');
  }
}
</script>

