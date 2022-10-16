import Image from "next/image";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems } from "../slices/basketSlice";


function Checkout() {

    const items = useSelector(selectItems);
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
            <div>

            </div>
        </main>
    </div>
  )
}

export default Checkout;