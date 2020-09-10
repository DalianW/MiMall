<template>
  
  <div class="index">

    <div class="container">

      <div class="swiper-box">

        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, ind) in item" :key="ind">
                    <a :href="'/#/product/' + sub.id">
                      <img :src="sub.img" alt="">
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
             <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电脑 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>

        <swiper :options = "swiperOption" ref="mySwiper">

          <swiper-slide v-for="item in slideList" :key="item.img">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img">
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

      </div>

      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img">
        </a>
      </div>

      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>

      
      
    </div>

    <div class="product-box">
        <div class="container">

          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35">
                <img src="/imgs/mix-alpha.jpg"> 
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr, index) in phoneList" :key="index">
                <div class="item" v-for="(item, ind) in arr" :key="ind">
                  <span class="new-pro" v-if="ind % 2 == 0">新品</span>
                  <span class="kill-pro" v-else>秒杀</span>
                  <div class="item-img">
                    <img :src="item.mainImage">
                  </div>
                  <div class="item-info">
                    <h6>{{item.name}}</h6>
                    <p class="info">{{item.subtitle}}</p>
                    <p class="price">{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar'
import 'swiper/swiper-bundle.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
  name: 'index',
  components: {
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption:{
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: false,
          shadowOffset: 50,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {id: '42', img: '/imgs/slider/slide-1.jpg'},
        {id: '45', img: '/imgs/slider/slide-2.jpg'},
        {id: '46', img: '/imgs/slider/slide-3.jpg'},
        {id: '', img: '/imgs/slider/slide-4.jpg'},
        {id: '', img: '/imgs/slider/slide-5.jpg'},
      ],
      menuList: [
        [
          {id:'30', img: '/imgs/item-box-1.png', name: '小米CC9'},
          {id:'31', img: '/imgs/item-box-2.png', name: '小米8青春版'},
          {id:'32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro'},
          {id:'33', img: '/imgs/item-box-4.jpg', name: '移动4g专区'},
        ],
        [
          {id:'30', img: '/imgs/item-box-1.png', name: '小米CC9'},
          {id:'31', img: '/imgs/item-box-2.png', name: '小米8青春版'},
          {id:'32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro'},
          {id:'33', img: '/imgs/item-box-4.jpg', name: '移动4g专区'},
        ],
        [
          {id:'30', img: '/imgs/item-box-1.png', name: '小米CC9'},
          {id:'31', img: '/imgs/item-box-2.png', name: '小米8青春版'},
          {id:'32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro'},
          {id:'33', img: '/imgs/item-box-4.jpg', name: '移动4g专区'},
        ],
        [
          {id:'30', img: '/imgs/item-box-1.png', name: '小米CC9'},
          {id:'31', img: '/imgs/item-box-2.png', name: '小米8青春版'},
          {id:'32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro'},
          {id:'33', img: '/imgs/item-box-4.jpg', name: '移动4g专区'},
        ],
        [
          {id:'30', img: '/imgs/item-box-1.png', name: '小米CC9'},
          {id:'31', img: '/imgs/item-box-2.png', name: '小米8青春版'},
          {id:'32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro'},
          {id:'33', img: '/imgs/item-box-4.jpg', name: '移动4g专区'},
        ],
        [
          {id:'30', img: '/imgs/item-box-1.png', name: '小米CC9'},
          {id:'31', img: '/imgs/item-box-2.png', name: '小米8青春版'},
          {id:'32', img: '/imgs/item-box-3.jpg', name: 'Redmi K20 Pro'},
          {id:'33', img: '/imgs/item-box-4.jpg', name: '移动4g专区'},
        ],

        
      ],
    
      adsList: [
        {id: 33, img: '/imgs/ads/ads-1.png'},
        {id: 48, img: '/imgs/ads/ads-2.jpg'},
        {id: 45, img: '/imgs/ads/ads-3.png'},
        {id: 47, img: '/imgs/ads/ads-4.jpg'},
      ],
      phoneList:[]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 8
        }
      }).then( res => {
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
.index{
  .swiper-box{
    position: relative;
    .nav-menu{
      position:absolute;
      width:264px;
      height: 100%;
      left:0;
      top:0;
      z-index: 9;
      background-color:rgba(0,0,0,.5);
      @include flex();
      .menu-wrap {
        .menu-item{
          height: 50px;
          line-height: 50px;
          &:hover{
            background:#f60;
            .children{
              display: block;
            }
          }
          a{
            font-size: 16px;
            color:#fff;
            padding-left:30px;
            position: relative;
            display: block;
            width: 264px;
            box-sizing: border-box;
            &:after{
              content: ' ';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              position: absolute;
              right: 30px;
              top: 17.5px;
            }

          }
          .children{
            display: none;
            position:absolute;
            width: 962px;
            height: 451px;
            background: #ffffff;
            left:264px;
            top:0;
            box-sizing: border-box;
            border:1px solid #e5e5e5;
            ul{
              @include flex();
              height: 75px;
              li{
                height: 75px;
                line-height: 75px;
                width: 241px;
                
                a{
                  color:#333;
                  font-size:14px;
                }
                img{
                  vertical-align: middle;
                  width: 42px;
                  height: 35px;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container{
      .swiper-button-prev{
        left:274px;
      }
      height: 451px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box{
    margin: 14px 0 30px;
    @include flex();
    a{
      display: block;
      width:296px;
      height: 167px;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .banner{
    margin-bottom: 50px;
    img{
      display: block;
      width: 100%;
    }
  }

  .product-box{
    background:#f5f5f5;
    padding:30px 0 50px;
    h2{
      font-size: 22px;
      font-weight: bold;
      height: 24px;
      line-height: 24px;
    }

    .wrapper{
      margin:20px 0;
      display: flex;
      .banner-left{
        margin-right: 16px;
        img{
          display: block;
          width:224px;
          height: 619px;
        }
      }
    }
    .list-box{
      .list{
        @include flex();
        width: 986px;
        .item{
          width:236px;
          height: 302px;
          background:#ffffff;
          text-align: center;
          span{
            display: inline-block;
            width: 67px;
            height: 24px;
            line-height: 24px;
            font-size:14px;
            color:#fff;
            &.new-pro{
              background-color:#7ECF68;
            }
            &.kill-pro{
              background-color:#E82626;
            }
            
          }
          .item-img{
            height: 195px;
            @include flex(center, center);
            img{
              max-width: 100%;
              max-height: 100%;
            }
          }
          .item-info{
            h6{
              font-size:14px;
              color:#333;
              font-weight: bold;
              line-height: 16px;
            }
            .info{
              color:#999;
              font-size:12px;
              line-height: 14px;
              margin:6px 0 8px;
            }
            .price{
              color:#f60;
              font-weight: bold;
              font-size:16px;
              &:after{
                content: ' ';
                @include bgImg(18px, 18px, '/imgs/icon-cart-hover.png');
                vertical-align:middle;
                margin:-2px 0 0 3px;
              }
            }
          }
        }
        &:first-child{
          margin-bottom:14px;
        }
      }
    }
  }
}

</style>
