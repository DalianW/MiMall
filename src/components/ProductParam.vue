<template>
  <div class="nav-bar" :class="{'is_fixed': fixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
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
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      fixed: false
    }
  },
  watch: {
    title(newV) {
      console.log(newV)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageYOffset || window.documentElement.scrollTop || document.body.scrollTop || 0

      this.fixed = scrollTop > 152 ? true : false
    }
  },
  destroyed() {
     window.removeEventListener('scroll', this.initHeight, false)
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
  background:#fff;

  
  &.is_fixed{
    position: fixed;
    z-index: 10;
    top:0;
    left:0;
    width: 100%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .05);
  }
  
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