<template>
  <div>
    <button @click="toggle" :class="{ checked: value }"><span></span></button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  display: inline-block;
  width: $h * 2;
  height: $h;
  line-height: $h;
  vertical-align: middle;
  border: none;
  background-color: #bfbfbf; //#1890ff
  border-radius: $h/2;
  outline: none;
  cursor: pointer;
  transition: all 0.25s;
  &:focus {
    box-shadow: 0 0 10px rgba(191, 191, 191, 0.7);
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border: none;
    border-radius: $h/2;
    background-color: #fff;
  }
  &:active {
    box-shadow: none;
    > span {
      width: $h + 2px;
    }
  }
}
button.checked {
  background-color: #1890ff;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    box-shadow: 0 0 10px rgba(24, 144, 255, 0.7);
  }
  &:active {
    box-shadow: none;
    > span {
      width: $h + 2px;
      margin-left: -6px;
    }
  }
}
</style>
