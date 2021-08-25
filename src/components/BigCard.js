import React from 'react'
import pic from '../pictest.jpg'


export default function BigCard() {
    return (
        <div>
           <div className="grid m-8 lg:grid-cols-2 xl:grid-cols-5">

             <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 xl:col-span-2">
            
              <div className="xl:max-w-xl">
                
                    
                    <img className='mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden' src={pic} alt=""/>
                    </div>
                    <h1 className='mt-8 text-4xl text-center font-bold text-gray-900'>
                    Produit Cocktail
                    </h1>
                    <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa, fugiat corrupti architecto error nemo voluptates quasi nulla dignissimos commodi. Reprehenderit reiciendis impedit dolores in unde amet dicta neque esse?
                    </p>
                    <button className="mt-4 px-4 py-2 rounded-xl shadow-xl text-gray-700 bg-yellow-300 hover:bg-green-500 hover:text-gray-200"> 
                    Découvrir
                    </button>
                
             </div>

             <div class="hidden relative  lg:block xl:col-span-3">
                <img
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={pic}
                alt="Whisky Cocktail"
                />
             </div>
         </div>
        </div>
    )
}
