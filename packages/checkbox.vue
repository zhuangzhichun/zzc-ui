<template>
  <label class="zzc-checkbox" :class="{'is-check': isChecked}">
    <span class="zzc-checkbox__input">
      <span class="zzc-checkbox__inner"></span>
      <input
        type="checkbox"
        class="zzc-checkbox__original" :name="name" v-model="model" :value="label">
    </span>
    <span class="zzc-checkbox__label">
        <slot></slot>
        <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>

<script>
export default {
  name: 'ZzcCheckBox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .zzc-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .zzc-checkbox__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .zzc-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
        &:after {
          box-sizing: content-box;
          content: "";
          border: 1px solid #fff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .zzc-checkbox__original {
        opacity: 0;
        outline: none;
        position: absolute;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .zzc-checkbox__label {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  .zzc-checkbox.is-check{
    .zzc-checkbox__input{
      .zzc-checkbox__inner{
        background-color: #409eff;
        border-color: #409eff;
        &:after{
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    .zzc-checkbox__label{
      color: #000000;
    }
  }
</style>
