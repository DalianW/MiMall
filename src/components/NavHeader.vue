<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbaer-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbaer-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-else @click="login">登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index" class=""></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children" v-if="phoneList.length > 0">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.name">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="item-menu">
            <span>RedMi红米</span>
          </div>


          <div class="item-menu">
            <span>电视</span>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
  name: 'nav-header',
  data(){
    return {
      phoneList: [],
    }
  },
  computed: {
    // username() {
    //   return this.$store.state.username
    // },
    // cartCount() {
    //   return this.$store.state.cartCount
    // }
    ...mapState(['username', 'cartCount'])
  },
  mounted() {
    this.getProductList()
  },
  methods: {
    getProductList() {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      }).then( (res) => {
         this.phoneList = res.list
       
      })
    },
    goToCart() {
      this.$router.push('/cart')
    },
    login() {
      this.$router.push('/login')
    }
  },
  filters: {
    currency(val) {
      if(!val) return '0.00';
      return '¥' + val.toFixed(2) + '元'
    }
  }
}
</script>


<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header{
  .nav-topbar{
    height:39px;
    line-height:39px;
    background-color:#333;
    color:#B0B0B0;
    .container{
      @include flex();
      
    }

    a{
      display: inline-block;
      color:#B0B0B0;
      margin-right:17px;
      &.my-cart{
        width:110px;
        background-color:#f60;
        text-align: center;
        color:#fff;
        margin-right:0;
        .icon-cart{
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right:4px;
        }
      }
    }
  }
  
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      @include flex();
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background:#f60;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{
            content: ' ';

            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
            transition:margin ease .2s; 
          }
          &:after{
            content: ' ';
            @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);           
            transition:margin ease .2s; 
          }
          &:hover::before{
            margin-left: -55px;
          }
        }
      }

      .header-menu{
        width:643px;
        padding-left:209px;
        .item-menu{
          display: inline-block;
          color:#333;
          font-weight: bold;
          font-size:16px;
          line-height:112px;
          margin-right:20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color:$colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            transition: all ease .5s;
            height: 0;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            top:112px;
            left:0;
            width:1226px;
            box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.11);
            background:#fff;
            z-index:10;
            ul{
              border-top:1px solid #e5e5e5;
              height: 220px;
            }
            .product{
              position: relative;
              a{
                display: block;
              }
              &:before{
                content: '';
                position: absolute;
                top: 40px;
                right: 0;
                background:$colorF;
                width:1px;
                height: 100px;
              }
              &:last-child:before{
                display: none;
              }
              float: left;
              width:16.6%;
              height: 220px;
              line-height: 12px;
              font-size:12px;
              text-align: center;
              .pro-img{
                padding-top: 36px;
                height: 117px;
                img{
                  height: 111px;
                  width: auto;
                  
                }
              }
              .pro-name{
                font-weight: bold;
                margin:10px auto  8px;
                color:$colorB;
              }
              .pro-price{
                color:$colorA;
              }
            }
          }
        }

      }
    }
  }

  .header-search{
    width:319px;
    .wrapper{
      height: 50px;
      border:1px solid #e0e0e0;
      display: flex;
      align-items:center;
      input{
        border: 0;
        border-right:1px solid #e0e0e0;
        height: 50px;
        box-sizing:border-box;
        width: 264px;
        padding-left: 14px;
      }
      a{
        @include bgImg(18px, 18px, '/imgs/icon-search.png');
        margin-left: 17px;
      }
    }
  }
}
</style>