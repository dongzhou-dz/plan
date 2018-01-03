<!-- Add "scoped" attribute to limit CSS to this component only -->
<template>
  <div class="m-main">
    <div class="m-nav">
      <span>直播中</span>
      <p>搞定孩子拖拉的六招，你可能都不知道！！！</p>
    </div>
    <input type="checkbox" id="checkbox" :checked="true"><span>默认选中</span>
    <div class="m-title">title</div>
    <div class="m-text01">文字一</div>
    <div class="m-text02">文字二</div>
    <div class="m-text03" :style="[{color: this.aaa == 'aaa'?'#ff0000':''},{width: this.bbb== 'bbb'?'100px':''},{fontSize:this.ccc == 'ccc'?'50px':''}]">文字三</div>
    <div class="m-ft"><button @click="tab()">tab</button><button @click="list()">list</button><button @click='btn()'>click</button></div>
  </div>
</template>

<script>
import Vue from 'vue'
import popwin from '@/components/plugins/popwin/'
import modelFrame from '@/components/plugins/popwin/src/popWin.vue'
Vue.use(popwin);

//const myFrame  = Vue.extend(modelFrame);

//Vue.use(Popwin)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world',
      aaa: 'aaa',
      bbb: 'bbb',
      ccc: 'ccc'
    }
  },
  mounted(){
    console.log('hello world');
    this.$model({
      type: 'model',
      self: this
    });
    //Vue.component('my-model','myFrame')
    //console.log(Button)
  },
  methods: {
    btn(){
      //let boxId = 'box'
      //console.log($event);
      this.$router.push({path: '/index/box',query: {zhou: '2huo'}})
      //this.$router.push({name: 'Index',params: {boxId},query:{zhou:'2huo'}})
    },
    list(){
      this.$router.push({path: '/list'})
    },
    tab(){
      this.$router.push({path: '/index/'})
    }
  },
  components:{
    // Popwin
    popwin,
    modelFrame
  }
}
</script>
<style lang="scss" scoped>
  $fontColorOne: #fff;
  $fontColorTwo: #222;
  $fontSizeOne: 20px;
  $fontSizeTwo: 24px;
  $fontSizeThree: 26px;
  .m-nav{
    position: relative;
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding-left: 100px;
    background: rgba(0, 0, 0,.4);
    box-sizing: border-box;
    span{
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100%;
      font-size: $fontSizeTwo;
      color: $fontColorOne;
      text-align: center;
      color: #ff0000;
    }
    p{
      height: 80px;
      line-height: 80px;
      font-size: $fontSizeThree;
      color: $fontColorOne;
    }
  }
  .m-ft{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    // height: 80px;
    // line-height: 80px;
    text-align: center;
    button{
      width: 25%;
      height: 60px;
      border: 0;
      background: #3398DB;
      font-size: $fontSizeTwo;
      color: $fontColorOne;
      border-radius: 6px;
    }
  }
  .m-title{
    font-size: $fontSizeThree;
  }
  .m-text01{
    @extend .m-title;
    color: #ef2626;
  }
  .m-text02{
    @extend .m-title;
    color: #21ff00;
  }
  .m-text03{
    @extend .m-title;
    color: #000;
  }
</style>

