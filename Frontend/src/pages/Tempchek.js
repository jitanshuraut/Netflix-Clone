import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51MQQhrSH9sr4A0xt9JwnABL7xEx9hqzR0tL3XVc9kzD47gE0cIbS2bKW149gQ1A486yX2cyV4bGa9ACLBiluBbTa00qtBb167t');

export default function Tempchek() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51MQQhrSH9sr4A0xtWvLFpbYKuF3yx9v8Aq94Jh7fc8NgLMmQzBKhO4SBFOnqgddaYLXtWcd2O3J3yTWv9MNb3vuj00MaSSStFB',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};