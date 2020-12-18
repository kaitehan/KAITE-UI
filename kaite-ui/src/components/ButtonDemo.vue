<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好 </Button>
    <Button theme="button">你好 </Button>
    <Button theme="link">你好 </Button>
    <Button theme="text">你好 </Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log(111);
    };
    return { onClick };
  },
};
</script>

<style lang="scss" scoped></style>
