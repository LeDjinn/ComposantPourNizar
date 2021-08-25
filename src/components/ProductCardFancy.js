import React from 'react'
import pic from '../pictest.jpg'

export default function ProductCardFancy({cardName}) {
    return (
        <div>
            
  
    
                <div className="flex w-72 xl:w-1/3 items-center p-4 bg-gray-100   border-gray-300 rounded-lg shadow-sm dark:bg-gray-800">
                    <div id="body" className="flex flex-col ml-5">
                        <div className=' flex justify-start'>
                           <img alt="mountain" className="w-40  h-40 rounded-full shadow-2xl object-cover object-center" src={pic} />
                        </div>
                        <h4 id="name" className=" mt-4 text-xl  font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                        <p id="job" className="text-gray-800  mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="flex mt-5">
                           <p >{cardName}</p>
                        </div>
                        <button className="mt-4 px-2 w-24 py-2 rounded-sm shadow-xl text-gray-700 bg-yellow-300 hover:bg-green-500 hover:text-gray-200"> 
                            Découvrir
                        </button>
                    </div>
                   
                    


                </div>
               { /*<div className='relative z-10 pb8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 '>
                <svg className=' hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 '
                height='100%'
                 width='100%'
                 viewBox='0 0 100 100'
                 fill='blue'>
                    <polygon points="50,0 100,0 50,100 0,100"></polygon>
                </svg>
                

    </div>*/}

    
         
            
        </div>
    )
}
