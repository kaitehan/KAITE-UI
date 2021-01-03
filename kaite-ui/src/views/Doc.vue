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
  }
  > .content {
    flex-grow: 1; //高度变化时占据剩余空间
    padding-top: 75px;
    padding-left: 285px;
    @media (max-width: 500px) {
      padding-top: 75px;
      padding-left: 0;
    }
  }
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  > aside {
    flex-shrink: 0; //宽度变化时不收缩
  }
  > main {
    flex-grow: 1; //宽度变化时占据剩余空间
    padding: 60px;
    // padding-left: 100px;
    background-color: #fff;
    @media (max-width: 500px) {
      padding: 60px 30px;
    }
  }
}

main {
  height: 100vh;
  overflow: auto;
}
</style>
