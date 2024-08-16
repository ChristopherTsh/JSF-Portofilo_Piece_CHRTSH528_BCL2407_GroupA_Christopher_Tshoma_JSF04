<script setup>
import { computed } from 'vue';
import { cva } from 'class-variance-authority';
import { loadScript } from "@paypal/paypal-js";
import { ref } from "vue";

/**
 * Defines the props for the component.
 * 
 * @typedef {Object} Props
 * @property {string|Object} as - The HTML tag or Vue component to render as. Defaults to 'button'.
 * @property {string} intent - The intent of the button, which determines its styling. Can be 'Pay Now', 'view product', or 'Go back'. Defaults to 'view product'.
 * @property {boolean} isPayPal - Indicates if the button is for PayPal payment. Defaults to false.
 * @property {number} amount - The amount to be paid via PayPal. Required if isPayPal is true.
 */

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'button',
  },
  intent: {
    type: String,
    validator: (val) => ['Pay Now', 'view product', 'Go back'].includes(val),
    default: 'view product',
  },
  isPayPal: {
    type: Boolean,
    default: false,
  },
  amount: {
    type: Number,
    required: false,
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
          'Pay Now': 'bg-blue-600 text-white hover:bg-blue-700',
          'view product': 'bg-black text-white hover:bg-gray-800',
          'Go back': 'bg-gray-200 text-gray-600 hover:bg-gray-300',
        },
      },
    }
  )({
    intent: props.intent,
  });
});

// For handling PayPal payment
const isPayPalLoaded = ref(false);

if (props.isPayPal && props.amount) {
  loadScript({ "client-id": "YOUR_PAYPAL_CLIENT_ID" }).then((paypal) => {
    isPayPalLoaded.value = true;

    paypal.Buttons({
      createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: props.amount.toFixed(2),
            },
          }],
        });
      },
      onApprove(data, actions) {
        return actions.order.capture().then((details) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Handle successful payment here
        });
      },
      onError(err) {
        alert('Payment failed. Please try again.');
        // Handle payment error here
      },
      onCancel(data) {
        alert('Payment was canceled.');
        // Handle payment cancellation here
      },
    }).render('#paypal-button-container');
  });
}
</script>

<template>
  <component :is="props.as" :class="buttonClass">
    <slot />
    <div v-if="props.isPayPal" id="paypal-button-container"></div>
  </component>
</template>
