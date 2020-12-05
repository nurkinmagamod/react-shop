import React from 'react';
import StripeCheckot from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Hv0cHGTbz8rQUQmS3b0M6OekPcEVhn8gpHEInlMzGJp56Jxq9FprUIrrsuxdAPtsmoxYqWablLAKfUDQVmnlmNI00tYc4OeqT';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckot
      lable='Pay Now'
      name='React Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
