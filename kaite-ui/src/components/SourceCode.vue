<template>
  <div class="demo-code">
    <pre class="language-html" v-html="code" />
  </div>
</template>
<script lang="ts">
export default {
  props: {
    code: Object,
  },
};
</script>
<style lang="scss">
$border-color: #d9d9d9;
.demo-code {
  padding: 8px 16px;
  border-top: 1px dashed $border-color;
  overflow: auto;
  > pre {
    line-height: 1.1;
    font-family: Consolas, "Courier New", Courier, monospace;
    margin: 0;
  }
}
</style>
