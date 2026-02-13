

const Cart = () => {
    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="sm:flex shadow-md my-10">
                    <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">3 Items</h2>
                        </div>
                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
                                <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

                                <div className="flex items-center justify-between w-full">
                                    <p className="text-xl font-black leading-none text-gray-800">Luxe card holder</p>

                                </div>
                                <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                <p className="w-96 text-xs leading-3 text-red-600">Remove from Cart</p>
                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex items-center gap-4">
                                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add Item</p>
                                        <p className="p-1 bg-gray-100 border border-gray-200 rounded-xs h-8 w-8 flex items-center justify-center cursor-pointer">1</p>
                                        <p className="text-xs leading-3 underline text-red-500  cursor-pointer">Remove Item</p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">$,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-6 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div className="border-t-1 border-gray-200 pt-6 text-sm">
                            <div className="flex items-center justify-between border-b-1 border-gray-200 pb-2">
                                <p>This is the name</p>
                                <p>$900.00</p>

                            </div>
                        </div>


                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart