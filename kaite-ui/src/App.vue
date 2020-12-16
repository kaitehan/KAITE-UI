<template>
  <div>
    hi | <router-link to="/">Frank</router-link> |
    <router-link to="/x">Frank2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
import Frank from "./components/Frank.vue";

export default {
  name: "App",
};
</script>
