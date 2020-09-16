<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt="">
    <p>当前暂无提交的订单记录!</p>
  </div>
</template>
<script>
export default {
  name: 'no-data'
}
</script>
<style lang="scss">
.no-data{
  padding:100px 0;
  text-align: center;
  img{
    width: 260px;
  }
  p{
    font-size:20px;
    color:#999;
  }
}
</style>