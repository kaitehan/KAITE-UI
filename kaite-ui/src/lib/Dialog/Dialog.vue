<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="kaite-dialog-overlay" @click="onClickOverlay"></div>
      <div class="kaite-dialog-wrapper">
        <div class="kaite-dialog">
          <span class="kaite-dialog-close" @click="close"></span>
          <header v-if="showTitle">
            <h1>{{ title }}</h1>
          </header>
          <main>
            <slot />
            <slot name="content" />
          </main>
          <footer v-if="bottomBtn">
            <Button level="primary" @click="ok">confirm</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import { computed } from "vue";
import Button from "../Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    bottomBtn: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    ok: Function,
    cancel: Function,
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const showTitle = computed(() => {
      if (props.title == "") {
        return false;
      } else {
        return true;
      }
    });

    const ok = () => {
      if (props.ok && props.ok() !== false) {
        // 等价于props.ok?.() !==false
        close();
      }
    };
    const cancel = () => {
      props.cancel && props.cancel(); // 等价于props.cancel?.()
      close();
    };
    return {
      close,
      onClickOverlay,
      showTitle,
      ok,
      cancel,
    };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.kaite-dialog {
  position: relative;
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(#333, 0.5);
  min-width: 18em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(#ddd, 0.3);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    > h1 {
      font-size: 1em;
    }
  }
  > main {
    min-height: 8em;
    padding: 32px 16px 16px 20px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 50%;
      top: 50%;
      left: 50%;
      background: black;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    @media (min-width: 500px) {
      &:hover {
        background-color: #f57272;
        &::before,
        &::after {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
