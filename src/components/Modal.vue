<template>

  <transition name="slide">

  
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">

          <a href="javascript:;" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-else-if="btnType == 2" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {

    // 弹窗类型 小:small、 中middle、大big、表单form
    modalType: {
      type:String,
      default: 'form'
    },
    // 弹窗标题
    title: String,
    // 按钮类型：1：确定按钮  2：取消按钮  3：确定取消
    btnType: {
      type: String,
      default: '1'
    },

    sureText: {
      type:String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    
    showModal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/modal.scss';
  
</style>