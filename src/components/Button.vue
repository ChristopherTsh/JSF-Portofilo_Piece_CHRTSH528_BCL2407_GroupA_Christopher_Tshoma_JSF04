<script setup>
import { computed } from 'vue';
import { cva } from 'class-variance-authority';

/**
 * Defines the props for the component.
 * 
 * @typedef {Object} Props
 * @property {string|Object} as - The HTML tag or Vue component to render as. Defaults to 'button'.
 * @property {string} intent - The intent of the button, which determines its styling. Can be 'view product' or 'Go back'. Defaults to 'view product'.
 */

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'button',
  },
  intent: {
    type: String,
    validator: (val) => ['view product', 'Go back'].includes(val),
    default: 'view product',
  },
});

/**
 * Computed class for the button, which varies based on the intent prop.
 * 
 * @returns {string} - The class string for the button.
 */
const buttonClass = computed(() => {
  return cva(
    'inline-flex items-center justify-center text-sm rounded min-h-[32px] px-3 py-0.5 font-semibold',
    {
      variants: {
        intent: {
          'view product': 'bg-black text-white hover:bg-gray-800',
          'Go back': 'bg-gray-200 text-gray-600 hover:bg-gray-300',
        },
      },
    }
  )({
    intent: props.intent,
  });
});
</script>

<template>
  <component :is="props.as" :class="buttonClass">
    <slot />
  </component>
</template>
