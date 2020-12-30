<template>
  <h1 class="first-title">Dialog 示例</h1>

  <section class="second-title">
    <h2>基础用法</h2>
    <p>
      使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件
    </p>
  </section>
  <Demo :component="Dialog1Demo" />

  <section class="second-title">
    <h2>支持 closeOnClickOverlay</h2>
    <p>
      在<span>Dialog</span>组件中添加<span>closeOnClickOverlay</span>属性，以此来决定是否通过<span>点击遮罩层</span>关闭<span>Dialog</span>组件
    </p>
  </section>
  <Demo :component="DialogOverlay" />

  <section class="second-title">
    <h2>支持 title</h2>
    <p>
      在<span>Dialog</span>组件中添加<span>title</span>属性，以此来决定<span>Dialog</span>组件是否显示<span
        >标题</span
      >
    </p>
  </section>
  <Demo :component="DialogTitle" />

  <section class="second-title">
    <h2>支持 bottomBtn</h2>
    <p>
      在<span>Dialog</span>组件中添加<span>bottomBtn</span>属性，以此来决定<span>Dialog</span>组件是否显示<span
        >处理button</span
      >
    </p>
  </section>
  <Demo :component="DialogBottom" />

  <section class="second-title">
    <h2>利用TS打开 Dialog</h2>
    <p>引入<span>openDialog</span>模块创建一个<span>Dialog</span>组件</p>
  </section>
  <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Dialog1Demo from "./DialogDemo/Dialog1.demo.vue";
import Dialog2Demo from "./DialogDemo/Dialog2.demo.vue";
import DialogTitle from "./DialogDemo/DialogTitle.vue";
import DialogBottom from "./DialogDemo/DialogBottom.vue";
import DialogOverlay from "./DialogDemo/DialogOverlay.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
      DialogOverlay,
      DialogTitle,
      DialogBottom,
    };
  },
};
</script>
