<template>
  <div class="zzc-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZzcCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss">

</style>
