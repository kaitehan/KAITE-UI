<template>
  <div class="topnav">
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleMenu"
    >
      <transition name="fade">
        <svg v-if="menuVisible">
          <use xlink:href="#icon-close"></use>
        </svg>
        <svg v-else>
          <use xlink:href="#icon-menu"></use>
        </svg>
      </transition>
    </span>
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-logo"></use></svg
      ></router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu, menuVisible };
  },
};
</script>
<style lang="scss" scoped>
$lightbgc: #e8cbc0;
$deepbgc: #44295b;
$text: #6f2e6a;
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(#333, 0.1);
  display: flex;
  padding: 16px;
  z-index: 10;
  color: $text;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > a {
      text-decoration: none;
      svg {
        width: 42px;
        height: 34px;
      }
    }
  }
  > .menu {
    display: flex;
    flex-direction: row;
    // 不换行
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 10px 1em;
      > a {
        text-decoration: none;
        &:hover {
          color: #be3765;
          border-bottom: none;
        }
      }
    }
  }
  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;

    > svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
