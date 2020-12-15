<template>
  <div class="zzc-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzcForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss">

</style>
