import React from 'react'
import web from '../images/web_constructions.svg'
import mobile from '../images/Mobile_first.svg'
import wordrpress from '../images/wordpress.svg'

export default function ServicesHero() {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 ">
            <div className="relative   overflow-hidden ">
                <div className="max-w-7xl mx-auto">
                    <div className="relative pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                   
                  

                    <main className="mt-10 mx-auto max-w-7xl px-4   sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block text-white xl:inline">Nos Services </span><br className='hidden lg:block'/>
                        </h1>
                        <div className=" relative lg:hidden lg:absolute z-10 lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img class="h-42 animate-pulse object-cover sm:h-72 md:h-96 lg:w-full lg:h-full " src={web} alt=""/> 
                            <div className="bg-blue-400 animate-ping absolute rounded-full w-32 h-32 right-32 top-60"  ></div>

                            <img src={mobile} alt="" className="absolute  right-20 top-72 h-20" />
                           
                            <div className="bg-yellow-400 absolute animate-pulse transition duration-75 right-56 top-56 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}} ></div>



                          </div> 
                       
                        
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                            <div href="#" className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-green-400 md:py-4 md:text-lg md:px-10">
                                Prendre rendez vous 
                            </div>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                            
                            </div>
                        </div>
                        </div>
                        
                    </main>
                    </div>
               
                   
                </div>

            
               
                <div className=" hidden lg:absolute z-10 lg:block lg:inset-y-0 lg:right-0 lg:w-1/2">
                  {/* <img class="h-52 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full " src={pic} alt=""
                   style={{
                    clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)"
                  }}/> */}

                        
                                           <div className="bg-indigo-400  absolute animate-bounce rounded-full w-10 h-10  left-32 top-64 "  >
                                                  
                                           </div>
                                           <div className="bg-yellow-400  absolute rounded-full w-24 h-24 left-36 bottom-44 "  >
                                                  
                                           </div>
                                           <img src={web} alt="we" className=" absolute  left-72 top-0 h-24 "/>
                                           <img src={wordrpress} alt="" className="absolute  left-80 top-56 h-24"/>
                                           <img src={mobile} alt=""className="absolute  left-20 bottom-44  h-32"/>
                                           <div className="bg-purple-900 absolute animate-pulse transition duration-75 left-64 bottom-72 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 34%, 73% 100%)"}} ></div>
                                           <div className="bg-blue-400 absolute animate-bounce transition duration-75 right-72 bottom-64 w-5 h-5 " style ={{clipPath: "polygon(100% 35%, 0 35%, 50% 100%)"}} ></div>
                                           <div className="bg-blue-400 absolute animate-bounce transition duration-75 right-72 bottom-56 w-5 h-5 " style ={{clipPath: "polygon(100% 35%, 0 35%, 50% 100%)"}} ></div>
                                           <div className="bg-gradient-to-r opacity-80 from-gray-400 to-blue-500 absolute animate-pulse duration-700 -left-48 bottom-44 w-1/6 h-16 " style ={{clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"}} ></div>
                                           <div className="bg-gradient-to-r opacity-80 from-purple-400 via-pink-500 to-red-500 absolute animate-pulse  -left-16 bottom-44  w-1/6 h-16 " style ={{clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"}} ></div>





    
               </div> 
              
            </div>

        </div>
    )
}
