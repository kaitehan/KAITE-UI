<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好 </Button>
    <Button theme="button">你好 </Button>
    <Button theme="link">你好 </Button>
    <Button theme="text">你好 </Button>
  </div>
  <h1>示例2</h1>
  <div>
    <div>
      <Button size="big">大大大 </Button>
      <Button>normal </Button>
      <Button size="small">小小小 </Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大 </Button>
      <Button theme="link">normal </Button>
      <Button theme="link" size="small">小小小 </Button>
    </div>
    <div>
      <Button theme="text" size="big">大大大 </Button>
      <Button theme="text">normal </Button>
      <Button theme="text" size="small">小小小 </Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>normal </Button>
      <Button level="danger">危险按钮 </Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮 </Button>
      <Button theme="link">normal </Button>
      <Button theme="link" level="danger">危险链接按钮 </Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文本按钮 </Button>
      <Button theme="text">normal </Button>
      <Button theme="text" level="danger">危险文本按钮 </Button>
    </div>
  </div>
  <h1>实例4</h1>
  <div>
    <Button disabled>你好 </Button>
    <Button theme="link" disabled>你好 </Button>
    <Button theme="text" disabled>你好 </Button>
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
