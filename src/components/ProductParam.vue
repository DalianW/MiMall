<template>
  <div class="nav-bar">
    <div class="container">
      <div class="pro-title">
        小米8
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
     
  </div>
</template>
<script>
export default {
  name: 'nav-bar',
  data() {
    return {
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.nav-bar{
  height: 70px;
  line-height: 70px;
  border: 1px soild #e5e5e5;
  
  .container{
    @include flex();
    .pro-title{
      color:#333;
      font-size: 18px;
      font-weight: bold;
    }

    .pro-param{
      line-height: 30px;
      a{
        font-size: 14px;
        color:#666;
      }
      span{
        margin:0 8px;
        font-size:12px;
        color:#999;
      }
      
    }
  }
}
</style>