<template>
  <Markdown path="../markdown/intro.md"></Markdown>
</template>
<script>
import Markdown from "../components/Markdown.vue";
export default {
  setup(props, context) {
    return {
      Markdown,
    };
  },
};
</script>
