<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <Aside></Aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, onBeforeMount, onMounted, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
import Aside from "./Aside.vue";
import { router } from "../router";
export default {
  components: { Topnav, Aside },
  setup() {
    onMounted(() => {
      let main = document.querySelector("main");
      router.beforeEach(() => {
        main.scrollTop = 0;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0; //高度变化时不收缩
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  > .content {
    display: flex;
    padding-top: 60px;
    padding-left: 285px;
    main {
      height: 100vh;
      overflow: auto;
      flex-grow: 1;
      padding: 60px;
    }
    @media (max-width: 500px) {
      padding-left: 0;
      main {
        height: 80vh;
        overflow: auto;
        flex-grow: 1; //高度变化时,占据剩余空间
        padding: 32px;
      }
    }
  }
}
</style>
