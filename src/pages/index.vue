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

      <div class="ads-box"></div>

      <div class="banner"></div>

      <div class="product-box"></div>
      
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

        
      ]
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
}

</style>
