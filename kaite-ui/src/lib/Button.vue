<template>
  <button class="kaite-button" :class="classes">
    <slot></slot>
  </button>
</template>
<script>
import { computed } from "vue";
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
  },

  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return {
        [`kaite-theme-${theme}`]: theme,
        [`kaite-size-${size}`]: size,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #d9d9d9;
// 默认字体颜色
$color: #333;
// 颜色参数
$blue: #40a9ff;
// 角度参数
$radius: 4px;
.kaite-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  //   文本不换行显示
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  //   相邻组件间相隔8px
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.kaite-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 20%);
    }
  }
  &.kaite-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.kaite-theme-button {
    &.kaite-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.kaite-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  }
}
</style>
