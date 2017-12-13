<style scoped>

</style>

<template>
  <div 
    :class="popClass"
    :style="{
        'width': width,
        'height': height,
        'z-index': zIndex,
        'background': bg,
        'margin-left': marginLeft,
        'margin-top': marginTop
    }"
  >

  </div>
</template>
<<script>
export default {
  name: 'popWin-model',
  data(){
      return {
          popClass: '',
          width: '500px',
          height: '500px',
          zIndex: '99',
          marginLeft: '-250px',
          marginTop: '-250px',
          bg: '#000'
      }
  },
  mounted(){
      console.log(666)
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }

}
</script>

