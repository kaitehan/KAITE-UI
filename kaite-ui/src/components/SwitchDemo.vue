<template>
  <div>
    <Switch v-model:value="flag" />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const flag = ref(false);
    return { flag };
  },
};
</script>
