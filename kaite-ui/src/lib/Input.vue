<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      id="kaite"
      :value="value || value == '' ? value : modelValue"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="inputval"
      @input="inputval"
      @focus="inputBlur"
      @blur="inputBlur"
    />
    <template v-if="error">
      <icon></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script lang="ts">
import { readonly, reactive } from "vue";
export default {
  name: "kaite-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  setup(props, context) {
    const inputval = (e: KeyboardEvent) => {
      context.emit("update:value", (e.target as HTMLInputElement).value);
    };
    const inputBlur = (e: FocusEvent) => {
      context.emit("update:modelValue", (e.target as HTMLInputElement).value);
    };
    return {
      inputval,
      inputBlur,
    };
  },
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$red: #f1453d;
.wrapper {
  display: inline-flex;
  align-items: center;
  // border: 1px solid $border-color;
  font-size: 12px;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  &.error {
    > input {
      border-color: $red;
      &:hover {
        border-color: $red;
        &[disabled],
        &[readonly] {
          border-color: #ccc;
        }
      }
    }
    .errorMessage {
      color: red;
    }
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    outline: none;
    margin: 0.5em 0;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px rgba(#ccc, 0.8);
    }
    &[disabled],
    &[readonly] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
