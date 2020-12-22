<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <transition name="slide">
        <aside v-show="menuVisible">
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
      </transition>

      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
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
    padding-left: 153px;
    @media (max-width: 500px) {
      padding-top: 52px;
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0; //宽度变化时不收缩
  }
  > main {
    flex-grow: 1; //宽度变化时占据剩余空间
    padding: 16px;
    background-color: #fff;
  }
}
aside {
  background: lightblue;
  width: 285px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 75px;
  height: 100%;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>
