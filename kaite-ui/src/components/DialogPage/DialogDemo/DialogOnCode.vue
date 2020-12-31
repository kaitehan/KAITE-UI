<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../../../lib/Dialog/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "我的标题",
        bottomBtn: true,
        content: "这是内容",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>
