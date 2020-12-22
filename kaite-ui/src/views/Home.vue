<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>kaiteUI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/kaitehan">github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue3"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-typescript-icon"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-Tools"></use>
      </svg>
    </div>
  </div>
</template>

<script type="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components:{ Topnav }
}
</script>
<style lang="scss" scoped>
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: rgb(202, 249, 234);

  > .actions {
    padding: 8px 0;
    color: white;
    outline: none;
    a {
      margin: 0 8px;
      background: #02bcb0;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 5px 8px;
    }
  }
}
</style>
