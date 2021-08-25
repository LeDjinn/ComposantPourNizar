
import pic from '../pictest.jpg'
import React, { useState } from 'react';


export default function ProductCardMinimalist() {

    const [hidmin, setHidmin] = useState(false);
    return (
        <div>
            
  
    
                <div className="flex w-72 xl:w-1/3 items-center p-4 bg-white  shadow-sm dark:bg-gray-800">
                    <div id="body" className="flex flex-col ml-5">
                        <div className=' flex justify-start'>
                           <img 
                           alt="mountain" 
                           className="w-40  h-40 rounded-full  hover:shadow-2xl transition duration-200 cursor-pointer mt-6  sm:mt-8 sm:h-64 sm:w-full object-cover object-center" 
                           src={pic}
                           onClick={() =>  setHidmin(!hidmin)} />
                        </div>
                        {hidmin && 
                        <div>
                            <h4 id="name" className=" mt-4 text-xl  font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                            <p id="job" className="text-gray-800  mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="flex mt-5">
                            <p >John Doe</p>
                            </div>
                            <button className="mt-4 px-2 w-24 py-2  shadow-xl text-gray-700 bg-yellow-300 hover:bg-green-500 hover:text-gray-200"> 
                                Découvrir
                            </button>
                        </div>}
                    </div>
                </div>

    
         
            
        </div>
    )
}
