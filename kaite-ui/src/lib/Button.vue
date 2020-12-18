<template>
  <button class="kaite-button" :class="{ [`theme-${theme}`]: theme }">
    <slot></slot>
  </button>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
  },

  setup(props, context) {
    const { ...rest } = context.attrs;
    return { rest };
  },
};
</script>
<style lang="scss"></style>
