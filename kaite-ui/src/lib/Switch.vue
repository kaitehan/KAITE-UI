<template>
  <div>
    <button
      class="kaite-switch"
      @click="toggle"
      :class="{ 'kaite-checked': value }"
      :disabled="loading ? true : disabled"
    >
      <span><span class="kaite-switch-loading" v-if="loading"></span></span>
      <p v-if="value" class="kaite-switch-on">on</p>
      <p v-else class="kaite-switch-off">off</p>
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
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
.kaite-switch {
  position: relative;
  display: inline-block;
  width: $h * 2;
  height: $h;
  line-height: $h;
  vertical-align: middle;
  border: none;
  padding: 0;
  margin-bottom: 8px;
  background-color: #bfbfbf; //#1890ff
  border-radius: $h/2;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &[disabled] {
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 5px rgba(191, 191, 191, 0.5);
    &:hover {
      box-shadow: none;
    }
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
    transition: all 0.25s ease-in-out;
    > .kaite-switch-loading {
      width: 14px;
      height: 14px;
      display: inline-block;
      // margin-right: 4px;
      border-radius: 8px;
      border-color: lighten(#8486ab, 20%) lighten(#8486ab, 10%) #8486ab
        transparent;
      border-style: solid;
      border-width: 2px;
      animation: kaite-spin 1s infinite linear;
    }
  }
  > p {
    display: inline-block;
    width: 14px;
    height: $h;
    font-size: 14px;
    color: #fff;
    margin: 0 7px 0 22px;
    transition: margin 0.25s ease-in-out;
  }
  &:active {
    > span {
      width: $h + 2px;
    }
  }
  &.kaite-checked {
    background-color: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
    > p {
      margin: 0 25px 0 7px;
    }
    &:focus {
      box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
      &:hover {
        box-shadow: none;
      }
    }

    &:active {
      > span {
        width: $h + 2px;
        margin-left: -6px;
      }
    }
  }
  @keyframes kaite-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes button-hover {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-3px);
    }
  }
}
</style>
