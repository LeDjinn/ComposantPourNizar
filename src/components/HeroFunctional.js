import React from 'react'
import pic from '../pictest.jpg'


export default function HeroFunctional() {
    return (
        <div>
<div className="relative bg-white overflow-hidden ">
                <div className=" max-w-7xl mx-auto">
                    <div className="relative  bg-blue-900 pb-8 sm:bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                   
                  

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                       <div className=" flex justify-evenly"> 
                        <div className="sm:text-center lg:text-left">
                        <h1 className=" mt-12 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Functional Hero</span><br className='hidden lg:block'/>
                            <span className="block text-green-400 xl:inline">pour tout business</span>
                        </h1>
                       
                        <p className="hidden sm:block mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                            <div href="#" className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-green-400 md:py-4 md:text-lg md:px-10">
                                Prendre rendez vous 
                            </div>
                            </div>
                            
                        </div>
                    </div>
                        <div className="  lg:hidden lg:absolute z-10 lg:inset-y-0 lg:right-0 lg:w-1/2">
                           <img class="w-40  h-40 mt-8 rounded-full sm:h-72 md:h-96 lg:w-full lg:h-full object-cover object-center " src={pic} alt=""
                          />
                       </div> 
                  </div>
             </main>
         </div>
               
                   
                </div>

            
               
                <div className=" hidden  lg:bg-gray-400 lg:absolute z-10 lg:p-24 lg:block lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <img class="h-52 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full " src={pic} alt=""
                 />
               </div> 
              
                </div>            
        </div>
    )
}
