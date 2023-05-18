import React from "react";

function Card1(props: {}) {
    return (

        <div className="flex justify-center items-center mt-6 h-full lg:h-screen overflow-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        
                <div className="w-80 h-full  relative">
        
                    <div className="pb-24 bg-white py-4 px-4 border-8 border-pink-600 rounded-3xl h-full shadow-2xl">
                        <img src="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png"
                            className="w-64 h-64 " />
        
                        <div className="flex justify-between">
                            <div className="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p className="text-lg font-semibold">Pizza</p>
                            </div>
                            <div className="py-4 pr-5">
                                <p className="text-sm font-semibold text-gray-400">Total Bill</p>
                                <p className="text-lg font-semibold">RM 6.00</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="absolute bottom-0 left-0 ">
                        <div className="flex justify-between">
                            <div className="bg-pink-600 py-4 px-6 rounded-lg w-full ">
                                <p className="text-white text-lg font-semibold pb-4">
                                    Split with
                                </p>
                                <div className="flex space-x-2">
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                            </div>
                            <div className="py-4 px-6 rounded-lg w-full flex items-end">
                                <button
                                    className="bg-gradient-to-b from-blue-400 to-blue-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                                    Split Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="w-80 h-full  relative">
        
                    <div className="pb-24 bg-white py-4 px-4 shadow-2xl border-8 border-blue-600 rounded-3xl h-full">
                        <img src="https://pngimg.com/uploads/ice_cream/ice_cream_PNG20987.png" className=" w-64 h-64" />
        
                        <div className="flex justify-between">
                            <div className="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p className="text-lg font-semibold">Ice Cream</p>
                            </div>
                            <div className="py-4 pr-5">
                                <p className="text-sm font-semibold text-gray-400">Total Bill</p>
                                <p className="text-lg font-semibold">RM 2.00</p>
                            </div>
                        </div>
                    </div>
        
                    <div className="absolute bottom-0 left-0 ">
                        <div className="flex justify-between">
                            <div className="bg-blue-600 py-4 px-6 rounded-lg w-full ">
                                <p className="text-white text-lg font-semibold pb-4">
                                    Split with
                                </p>
                                <div className="flex space-x-2">
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                            </div>
                            <div className="py-4 px-6 rounded-lg w-full flex items-end">
                                <button
                                    className="bg-gradient-to-b from-pink-400 to-pink-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                                    Split Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card1;