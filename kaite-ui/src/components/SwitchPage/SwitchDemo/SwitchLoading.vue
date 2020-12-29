<demo>
支持Loading
</demo>

<template>
  <Switch v-model:value="bool" loading />
</template>

<script lang="ts">
import Switch from "../../../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
