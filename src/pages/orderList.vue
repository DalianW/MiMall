<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(item, index) in list" :key="index" v-else>
            <div class="order-title">
              <div class="item-info fl">
                {{ item.createTime }}
                <span>|</span>
                {{ item.receiverName }}
                <span>|</span>
                订单号：{{ item.orderNo }}
                <span>|</span>
                {{ item.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(pro, i) in item.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="pro.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{pro.productName}}</div>
                    <div class="p-money">{{pro.totalPrice}} X {{pro.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="item.status == 10">
                <a href="javascript:;" @click="goPay(item.orderNo)">{{item.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>
          
          <el-pagination 
            class="pagination" 
            background 
            :pageSize="pageSize" 
            layout="prev, pager, next"
            :total="total" 
            @current-change="handleChange">
          </el-pagination>

          <no-data v-if="!loading && list.length < 1"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader'
  import Loading from './../components/Loading'
  import NoData from './../components/NoData'
  import { Pagination } from 'element-ui'
  export default{
    name:'order-list',
    components:{
      OrderHeader,
      Loading,
      NoData,
      [Pagination.name]: Pagination
    },
    data() {
      return {
        list: [],
        loading: true,
        pageSize: 10,
        total: 0,
        pageNum:1,
      }
    },
    mounted() {
      this.getOrderList()
    },
    methods: {
      getOrderList() {
        this.axios.get('/orders', {
          params: {
            pageNum: this.pageNum
          }
        }).then( (res) => {
          // console.log(res)
          this.list = res.list
          this.loading = false
          this.total = res.total
        }).catch(() => {
          this.loading =false
        })
      },
      goPay(id) {
        this.$router.push({
          path:'/order/pay',
          query: {
            orderNo: id
          }
        })
      },
      handleChange(pageNum) {
        this.pageNum = pageNum
        this.getOrderList()
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .pagination{
    text-align: right;
  }
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:50px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>