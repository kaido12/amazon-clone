import Image from "next/image";
import Header from "../components/Header";


function Checkout() {
  return (
    <div className="bg-gray-100">
        <Header />

        <main className="lg:flex max-w-screen-xl mx-auto">
        {/* LeftSide */}
            <div>
                <Image 
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit='contain'
                />
            </div>

        {/* RightSide */}
            <div>

            </div>
        </main>
    </div>
  )
}

export default Checkout;