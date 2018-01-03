<template>
  <div class="list">
      <h2>radio</h2>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>
<script>
export default {
  name: 'list',
  data(){
		return {
				radio: '1'
		}
  },
  mounted(){
		console.log('list');
  }
}
</script>

