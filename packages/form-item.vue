<template>
  <div class="zzc-form-item">
    <label class="zzc-form-item__label" :style="{width:this.Form.labelWidth}">{{label}}</label>
    <div class="zzc-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZzcFormItem',
  inject: ['Form'],
  props: {
    label: String
  }
}
</script>

<style lang="scss">
  .zzc-form-item{
    margin-bottom: 25px;
    .zzc-form-item__label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0
    }
    .zzc-form-item__content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }

</style>
