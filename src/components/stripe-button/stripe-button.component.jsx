import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.component";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51JvwV1SA0Cn51C4DsKrgJLOqcNrr5DEAxJQ38838sEiiC2ZJqyzhhUizfnRn7OAAeXBnjNyt3x6ITJUdCHh0jzA000UFj2PdFO";
  const priceForStripe = { price } * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment is successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Clothing Chain Pvt. Ltd."
        description={`Your total is $${price}`}
        image="https://ibb.co/BGm9R7N/shopping-store.png"
        stripeKey={publishableKey}
        amount={priceForStripe}
        currency="USD"
        billingAddress
        shippingAddress
        panelLabel="Pay Now"
        token={onToken}
      />
    </div>
  );
};
export default StripeCheckoutButton;
