<template>
    <component
        :is="tag"
        ref="_ref"
        class="er-button"
        :type="tag === 'button' ? nativeType : void 0"
        :class="[
          plain?? 'is-plain',
          round?? 'is-round',
          circle?? 'is-circle',
          disabled?? 'is-disabled',
          loading ?? 'is-loading',
          `er-button--${type}`,
          `er-button--${size}`
        ]"
        :disabled="disabled || loading ? true : void 0"
    >
    <slot></slot></component>
</template>

<script setup>
import { ref, defineProps, defineSlots } from 'vue'
// import { ButtonProps } from './types.ts'
defineOptions({
    name: 'ErButton'
});

const props = defineProps({
    tag: {
        type: String,
        default: () => "button",
    },
    size: {
        type: String,
        default: () => "small",
    },
    nativeType: {
        type: String,
        default: () => "button",
    },
    type: {
        type: String,
        default: () => "small",
    },
    plain: {
        type: Boolean,
        default: () => false,
    },
    round: {
        type: Boolean,
        default: () => false,
    },
    circle: {
        type: Boolean,
        default: () => false,
    },
    disabled: {
        type: Boolean,
        default: () => false,
    },
    loading: {
        type: Boolean,
        default: () => false,
    },
})
// const props = withDefaults(defineProps<ButtonProps>(), {
//   tag: "button",
//   nativeType: "button",
//   useThrottle: true,
//   throttleDuration: 500,
// });

const slots = defineSlots()

const _ref = ref()
</script>

<style scoped>
@import "./style.css";
</style>
