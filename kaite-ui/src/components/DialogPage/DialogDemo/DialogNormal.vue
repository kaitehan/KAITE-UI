<demo>
基本用法
</demo>
<template>
  <div>
    <Button level="primary" @click="toggle">打开Dialog</Button>
    <Dialog v-model:visible="showDialog">
      <p>这是内容</p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../../../lib/Dialog/Dialog.vue";
import Button from "../../../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const showDialog = ref(false);
    const toggle = () => {
      showDialog.value = !showDialog.value;
    };
    return {
      showDialog,
      toggle,
    };
  },
};
</script>
