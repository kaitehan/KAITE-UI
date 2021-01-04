<demo>
支持 round
</demo>
<template>
  <div>
    <div>
      <Button round>Click it</Button>
      <Button level="primary" round>Click it</Button>
      <Button level="success" round>Click it</Button>
      <Button level="warning" round>Click it</Button>
      <Button level="error" round>Click it</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../../../lib/Button.vue";
// import { Button } from "../../../lib/index";
export default {
  components: {
    Button,
  },
};
</script>
