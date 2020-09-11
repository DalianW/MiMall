<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>

    <div style="height:5000px;">123</div>
  </div>
</template>
<script>
import ProductParam from'./../components/ProductParam'
export default{
  name: 'product',
  components: {
    ProductParam
  }
}
</script>
<style lang="scss">
.product{
  .btn{
    margin-left:15px;
  }
}

</style>