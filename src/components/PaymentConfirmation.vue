<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div v-if="paymentSuccess" class="rounded-lg border border-green-200 bg-green-100 p-6 shadow-sm dark:border-green-700 dark:bg-green-800">
          <h2 class="text-2xl font-semibold text-green-900 dark:text-white">Payment Successful!</h2>
          <p class="mt-2 text-lg text-green-700 dark:text-green-300">Thank you for your purchase, {{ paymentDetails.payer.name.given_name }}!</p>
        </div>
        <div v-else-if="paymentError" class="rounded-lg border border-red-200 bg-red-100 p-6 shadow-sm dark:border-red-700 dark:bg-red-800">
          <h2 class="text-2xl font-semibold text-red-900 dark:text-white">Payment Failed</h2>
          <p class="mt-2 text-lg text-red-700 dark:text-red-300">Something went wrong with your payment. Please try again.</p>
        </div>
        <div v-else-if="paymentCancelled" class="rounded-lg border border-yellow-200 bg-yellow-100 p-6 shadow-sm dark:border-yellow-700 dark:bg-yellow-800">
          <h2 class="text-2xl font-semibold text-yellow-900 dark:text-white">Payment Cancelled</h2>
          <p class="mt-2 text-lg text-yellow-700 dark:text-yellow-300">You have cancelled the payment. No charges were made.</p>
        </div>
        <div v-else>
          <p class="text-lg text-gray-700 dark:text-gray-300">Processing your payment...</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentSuccess: false,
        paymentError: false,
        paymentCancelled: false,
        paymentDetails: null
      };
    },
    mounted() {
      this.$on('payment-success', this.handlePaymentSuccess);
      this.$on('payment-error', this.handlePaymentError);
      this.$on('payment-cancel', this.handlePaymentCancel);
    },
    methods: {
      handlePaymentSuccess(details) {
        this.paymentSuccess = true;
        this.paymentDetails = details;
      },
      handlePaymentError(err) {
        this.paymentError = true;
        console.error(err);
      },
      handlePaymentCancel() {
        this.paymentCancelled = true;
      }
    }
  };
  </script>
  