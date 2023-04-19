import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from 'react-currency-formatter';
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);


function Checkout() {
    const {data: session} = useSession();
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);

    debugger

    const  createCheckoutSession = async () => {
        const stripe = await stripePromise;

        
        // Call the backend to create a checkout session
        const checkoutSession = await axios.post('/api/create-checkout-session',
        {
            items,
            email: session.user.email
        });

        // Redirect user/customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });
        console.log(result)
        
        if (result.error) {
            alert(result.error.message);
        }
    }; 
  return (
    <div className="bg-gray-100">
        <Header />

        <main className="lg:flex max-w-screen-xl mx-auto">
        {/* LeftSide */}
            <div className="flex-grow m-5 shadow-sm">
                <Image 
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit='contain'
                />

                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">
                        {items.length === 0 ? "Your Amazon Basket is empty." : "Your Shopping Basket" }
                    </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct 
                                key={i}
                                id={item.id} 
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}
                                image={item.image}
                                category={item.category}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                </div>
            </div>

        {/* RightSide */}
            <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length > 0 && (
                    <div>
                        <h2 className="whitespace-nowrap font-bold">
                            Subtotal ({items.length} items):{" "}
                            <span className="font-bold">
                                <Currency quantity={total} />
                            </span>
                        </h2>
                        <button
                            role="link"
                            onClick={createCheckoutSession}
                            disabled={!session}
                            className={`button px-8 mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                        >
                            {!session ? 'Sign in to checkout':'Proceed to checkout'}
                        </button>
                    </div>
                )}
            </div>
        </main>
    </div>
  )
}

export default Checkout;