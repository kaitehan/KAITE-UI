<template>
  <div>
    <button><span></span></button>
  </div>
</template>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  display: inline-block;
  width: $h * 2;
  height: $h;
  line-height: $h;
  vertical-align: middle;
  border: none;
  background-color: #1890ff;
  border-radius: $h/2;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border: none;
    border-radius: $h/2;
    background-color: #fff;
  }
}
</style>
