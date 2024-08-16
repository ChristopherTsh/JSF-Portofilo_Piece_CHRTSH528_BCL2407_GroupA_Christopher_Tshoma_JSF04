<template>
    <div>
      <button @click="createPayment">Pay with PayPal</button>
      <div v-if="paymentStatus">
        <p>{{ paymentStatus }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentStatus: null,
      };
    },
    methods: {
      async createPayment() {
        try {
          const response = await fetch('/api/paypal/create-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 100 }), // Example amount
          });
          const data = await response.json();
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          } else {
            this.paymentStatus = 'Payment creation failed';
          }
        } catch (error) {
          console.error(error);
          this.paymentStatus = 'Payment creation failed';
        }
      },
      async verifyPayment(paymentId) {
        try {
          const response = await fetch('/api/paypal/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paymentId }),
          });
          const data = await response.json();
          if (data.status === 'success') {
            this.paymentStatus = 'Payment successful';
          } else {
            this.paymentStatus = 'Payment verification failed';
          }
        } catch (error) {
          console.error(error);
          this.paymentStatus = 'Payment verification failed';
        }
      },
    },
    created() {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentId = urlParams.get('paymentId');
      if (paymentId) {
        this.verifyPayment(paymentId);
      }
    },
  };
  </script>
  