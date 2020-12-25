<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switch1Demo.__sourceCode }}</pre>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <Switch2Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{ Switch2Demo.__sourceCode }}</pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import Button from "../lib/Button.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";

import { ref } from "vue";
export default {
  components: { Switch, Button, Switch1Demo, Switch2Demo },
  setup() {
    return { Switch1Demo, Switch2Demo };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    overflow: auto;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
