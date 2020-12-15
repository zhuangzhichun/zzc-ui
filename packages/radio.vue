<template>
    <label class="zzc-radio " :class="{'is-checked':label===model}">
      <span class="zzc-radio__input">
        <span class="zzc-radio__inner"></span>
        <input class="zzc-radio__original" type="radio" :value="label" :name="name" v-model="model">
      </span>
      <span class="zzc-radio__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
    </label>
</template>

<script>
export default {
  name: 'ZzcRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  created () {
    console.log(this.RadioGroup)
  },
  computed: {
    // 获取父组件的点击事件
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.$emit('input', value)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .zzc-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .zzc-radio__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .zzc-radio__inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
      }
      .zzc-radio__original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .zzc-radio__label {
      font-size: 14px;
      padding-left: 10px;
    }
  }

  .zzc-radio.is-checked{
    .zzc-radio__input{
      .zzc-radio__inner{
        border-color: #409eff;
        background:#409eff;
        &:after {
          content: "";
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .zzc-radio__label {
      color: #000000;
    }
  }

</style>
