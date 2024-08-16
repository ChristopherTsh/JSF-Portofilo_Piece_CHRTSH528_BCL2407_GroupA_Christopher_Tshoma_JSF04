const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');
const router = express.Router();

// PayPal environment setup
const environment = new paypal.core.SandboxEnvironment(
  'PAYPAL_CLIENT_ID',
  'PAYPAL_CLIENT_SECRET'
);
const client = new paypal.core.PayPalHttpClient(environment);

router.post('/create-payment', async (req, res) => {
  const { amount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount.toFixed(2),
        },
      },
    ],
  });

  try {
    const order = await client.execute(request);
    res.json({ redirectUrl: order.result.links.find(link => link.rel === 'approve').href });
  } catch (error) {
    console.error(error);
    res.status(500).send('Payment creation failed');
  }
});

router.post('/verify-payment', async (req, res) => {
  const { paymentId } = req.body;

  const request = new paypal.orders.OrdersCaptureRequest(paymentId);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    if (capture.result.status === 'COMPLETED') {
      res.json({ status: 'success' });
    } else {
      res.json({ status: 'failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Payment verification failed');
  }
});

module.exports = router;
