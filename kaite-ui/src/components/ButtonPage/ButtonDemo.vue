<template>
  <div>
    <h1 class="first-title">Button 示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>level</span>属性改变<span>Button</span>组件的颜色，以此突显<span>Button</span>组件的重要等级
      </p>
    </section>
    <Demo :component="ButtonNormal" />
    <section class="second-title">
      <h2>支持 size</h2>
      <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
    </section>
    <Demo :component="ButtonSize" />
    <section class="second-title">
      <h2>支持 round</h2>
      <p>使用<span>round</span>属性改变<span>Button</span>组件的形状</p>
    </section>
    <Demo :component="ButtonRound" />
    <section class="second-title">
      <h2>支持 disabled</h2>
      <p>
        使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此<span>禁止点击Button</span>组件
      </p>
    </section>
    <Demo :component="ButtonDisabled" />
    <section class="second-title">
      <h2>支持 loading</h2>
      <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载</p>
    </section>
    <Demo :component="ButtonLoading" />
  </div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import ButtonNormal from "./ButtonDemo/ButtonNormal.vue";
import ButtonSize from "./ButtonDemo/ButtonSize.vue";
import ButtonRound from "./ButtonDemo/ButtonRound.vue";
import ButtonDisabled from "./ButtonDemo/ButtonDisabled.vue";
import ButtonLoading from "./ButtonDemo/ButtonLoading.vue";
export default {
  components: { Demo },
  setup() {
    // console.log();
    // console.log("-------------------------");
    // document.body.scrollTop = 0;
    return {
      ButtonNormal,
      ButtonSize,
      ButtonRound,
      ButtonDisabled,
      ButtonLoading,
    };
  },
};
</script>

<style lang="scss" scoped></style>
