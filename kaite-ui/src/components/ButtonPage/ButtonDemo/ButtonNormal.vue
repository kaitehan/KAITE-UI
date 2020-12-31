<demo>
基础使用
</demo>
<template>
  <div>
    <Button>Click it</Button>
    <Button level="primary">Click it</Button>
    <Button level="success">Click it</Button>
    <Button level="warning">Click it</Button>
    <Button level="error">Click it</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
