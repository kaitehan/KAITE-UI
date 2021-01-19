<template>
  <div class="tiwwer">
    <input type="text" />
  </div>
</template>
<script lang="ts">
export default {
  props: {},
  setup(props) {},
};
</script>
<style lang="scss">
.tiwwer {
  display: inline-block;
  > input {
    height: 100%;
    width: 100%;
    font-size: 14px;
    border: 1px solid #999;
    border-radius: 5px;
    padding: 8px 6px;
    outline: none;
    margin: 5px 5px;
    &:last-child {
      margin-right: 0px;
    }
    // &:focus {
    // }
  }
}
</style>
