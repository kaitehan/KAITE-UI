<template>
  <div>
    <h1 class="first-title">Button 示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>level</span>属性改变<span>Button</span>组件的颜色，以此突显<span>Button</span>组件的重要等级
      </p>
    </section>
    <Demo :component="Button1Demo" />
    <section class="second-title">
      <h2>支持 size</h2>
      <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
    </section>
    <Demo :component="Button2Demo" />
    <section class="second-title">
      <h2>支持 round</h2>
      <p>使用<span>round</span>属性改变<span>Button</span>组件的形状</p>
    </section>
    <Demo :component="Button3Demo" />
    <section class="second-title">
      <h2>支持 disabled</h2>
      <p>
        使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此<span>禁止点击Button</span>组件
      </p>
    </section>
    <Demo :component="Button4Demo" />
    <section class="second-title">
      <h2>支持 loading</h2>
      <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载</p>
    </section>
    <Demo :component="Button5Demo" />
  </div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import Button1Demo from "./ButtonDemo/Button1.demo.vue";
import Button2Demo from "./ButtonDemo/Button2.demo.vue";
import Button3Demo from "./ButtonDemo/Button3.demo.vue";
import Button4Demo from "./ButtonDemo/Button4.demo.vue";
import Button5Demo from "./ButtonDemo/Button5.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo };
  },
};
</script>

<style lang="scss" scoped></style>
