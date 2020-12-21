<template>
  <div class="kaite-tabs">
    <div class="kaite-tabs-nav" ref="container">
      <div
        class="kaite-tabs-nav-item"
        v-for="(itemTitle, index) in titles"
        :ref="
          (el) => {
            if (itemTitle === selected) selectedItem = el;
          }
        "
        @click="select(itemTitle)"
        :class="{ selected: itemTitle === selected }"
        :key="index"
      >
        {{ itemTitle }}
      </div>
      <div class="kaite-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="kaite-tabs-content">
      <component
        class="kaite-tabs-content-item"
        :key="current.props.title"
        :is="current"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, onMounted, watchEffect, onUpdated } from "vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    // const x = () => {
    //   const { width } = selectedItem.value.getBoundingClientRect();
    //   indicator.value.style.width = width + "px";
    //   const { left: left1 } = container.value.getBoundingClientRect();
    //   const { left: left2 } = selectedItem.value.getBoundingClientRect();
    //   const left = left2 - left1;
    //   indicator.value.style.left = left + "px";
    // };
    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        console.log(selectedItem.value);

        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        console.log(left);
        indicator.value.style.left = left + "px";
      });
    });
    // onMounted(x);
    // onUpdated(x);
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return {
      current,
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.kaite-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
