<demo>
支持 closeOnClickOverlay
</demo>
<template>
  <div>
    <Button level="warning" @click="toggle">禁用遮罩层关闭Dialog</Button>
    <Dialog v-model:visible="showDialog" :closeOnClickOverlay="false">
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
