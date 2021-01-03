<template>
  <h1>Tabs 示例</h1>
  <section class="second-title">
    <h2>基础用法</h2>
    <p>
      使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Tabs</span>组件,指定默认<span
        >Tab</span
      >
    </p>
  </section>
  <Demo :component="TabsNormal" />
  <section class="second-title">
    <h2>支持disabled属性</h2>
    <p>
      在<span>Tab</span>组件中添加<span>disabled</span>属性，以此来禁止选中<span>该Tab</span>组件
    </p>
  </section>
  <Demo :component="TabsDisabled" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import TabsNormal from "./TabsDemo/TabsNormal.vue";
import TabsDisabled from "./TabsDemo/TabsDisabled.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    // document.body.scrollTop = 0;
    return {
      TabsNormal,
      TabsDisabled,
    };
  },
};
</script>
