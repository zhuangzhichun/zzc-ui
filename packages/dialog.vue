<template>
  <transition name="dialog-fade" >
<!--  对话框的遮罩 .self:点击自己才触发-->
    <div class="zzc-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="zzc-dialog" :style="{width:width,marginTop:top}">
        <div class="zzc-dialog__header">
          <slot name="title">
            <span class="zzc-dialog__title">{{title}}</span>
          </slot>
          <button class="zzc-dialog__headerbtn"  @click="handleClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="zzc-dialog__body">
          <!-- 默认插槽 -->
         <slot></slot>
        </div>
        <!-- 自定义提交按钮-->
        <div class="zzc-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ZzcDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    }
  }
}
</script>
  <style lang="scss">
    .zzc-dialog__wrapper {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: auto;
      margin: 0;
      z-index: 2001;
      background-color: rgba(0,0,0, .5);

      .zzc-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-sizing: border-box;
        width: 30%;

        &__header {
          padding: 20px 20px 10px;
          .hm-dialog__title {
            line-height: 24px;
            font-size: 18px;
            color: #303133;
          }
          .zzc-dialog__headerbtn {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 0;
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 16px;
            .el-icon-close {
              color: #909399;
            }
          }
        }
        .zzc-button{
          margin-left: 15px;
        }

        &__body {
          padding: 30px 20px;
          color: #606266;
          font-size: 14px;
          word-break: break-all;
        }
        &__footer {
          padding: 10px 20px 20px;
          text-align: right;
          box-sizing: border-box;
          .zzc-button:first-child {
            margin-right: 20px;
          }
        }
      }
    }

    .dialog-fade-enter-active {
      animation: bounce-in .3s;
    }
    .dialog-fade-leave-active {
      animation: bounce-in .3s reverse;
    }
    @keyframes bounce-in {
        0%{
          opacity: 0;
          transform: translateY(-20px);
        }
      100%{
        opacity: 1;
        transform: translateY(0px);
      }
    }
  </style>
