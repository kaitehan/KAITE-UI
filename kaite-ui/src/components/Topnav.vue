<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul>
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background-color: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 10px 1em;
    }
  }
}
</style>
