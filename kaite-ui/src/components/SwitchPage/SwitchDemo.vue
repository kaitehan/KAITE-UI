<template>
  <div>
    <h1 class="first-title">Switch 组件示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch</span>组件
      </p>
    </section>
    <Demo :component="SwitchNormal" />
    <section class="second-title">
      <h2>支持disabled属性</h2>
      <p>
        在<span>Switch</span>组件中添加<span>disabled</span>属性，以此来<span>禁用Switch</span>组件
      </p>
    </section>
    <Demo :component="SwitchDisabled" />
    <section class="second-title">
      <h2>支持loading属性</h2>
      <p>
        在<span>Switch</span>组件中添加<span>loading</span>属性，显示<span>Switch</span>组件加载状态
      </p>
    </section>
    <Demo :component="SwitchLoading" />
  </div>
</template>
<script lang="ts">
import SwitchNormal from "./SwitchDemo/SwitchNormal.vue";
import SwitchDisabled from "./SwitchDemo/SwitchDisabled.vue";
import SwitchLoading from "./SwitchDemo/SwitchLoading.vue";

import Demo from "../Demo.vue";
import { ref } from "vue";
export default {
  components: { Demo },
  setup() {
    return { SwitchNormal, SwitchDisabled, SwitchLoading };
  },
};
</script>
<style lang="scss" scoped></style>
