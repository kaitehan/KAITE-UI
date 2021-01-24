<demo>
支持value
</demo>
<template>
  <div>
    <Input v-model:value="val" v-model="blurval"></Input>
    <div class="showValue">
      <p>input与change事件触发：</p>
      <div class="card">{{ val }}</div>
      <p>input与change事件触发：</p>
      <div class="card">{{ blurval }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Input from "../../../lib/Input.vue";
export default {
  components: {
    Input,
  },
  setup() {
    const val = ref("111");
    const blurval = ref("222");
    return { val, blurval };
  },
};
</script>
<style lang="scss" scoped>
.showValue {
  > p {
    font-size: 14px;
    padding-left: 8px;
    margin: 0.5em;
  }
  > .card {
    width: 20em;
    height: 3em;
    color: #3296fa;
    font-size: 14px;
    padding: 0.5em 1em;
    margin-left: 8px;
    border: 1px solid #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px #999;
  }
}
</style>
