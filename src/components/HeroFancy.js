import React from 'react'
import dataUp from '../images/data_upgrading.svg'
import eCommerce from '../images/e-commerce.svg'
import responsive from '../images/responsive.svg'
import brain from '../images/otos-brain.png'

export default function HeroFancy() {
    return (
        <div>
            <div className="relative  bg-white overflow-hidden ">
                <div className="max-w-7xl mx-auto">
                    <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                   
                  

                    <main className="mt-10 mx-auto max-w-7xl px-4   sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Fancy Hero</span><br className='hidden lg:block'/>
                            <span className="block text-green-400 xl:inline">pour tout business</span>
                        </h1>
                        <div className=" relative lg:hidden lg:absolute z-10 lg:inset-y-0 lg:right-0 lg:w-1/2">
                            <img class="h-42 animate-pulse object-cover sm:h-72 md:h-96 lg:w-full lg:h-full " src={brain} alt=""/> 
                            <div className="bg-blue-400 animate-ping absolute rounded-full w-32 h-32 right-32 top-60"  ></div>

                            <img src={responsive} alt="" className="absolute  right-20 top-72 h-20" />
                           
                            <div className="bg-yellow-400 absolute animate-pulse transition duration-75 right-56 top-56 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}} ></div>



                          </div> 
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        
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

                            <div className="lg:w-full bg-gradient-to-r from-gray-100 via-blue-300 to-purple-400 lg:h-full lg:relative " style={{clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)"}}>
                                           <div className="bg-blue-400 absolute rounded-full w-32 h-32 right-56 top-96"  >
                                                  
                                           </div>
                                           <div className="bg-indigo-400 animate-pulse absolute rounded-full w-32 h-32  left-32 top-64 "  >
                                                  
                                           </div>
                                           <div className="bg-yellow-400 animate-bounce absolute rounded-full w-24 h-24   right-16 top-72 "  >
                                                  
                                           </div>
                                          <img src={brain} alt="we" className=" absolute animate-pulse left-72 top-20 h-48 "/>
                                           <img src={eCommerce} alt="" className="absolute  left-32 top-64 h-20"/>
                                           <img src={dataUp} alt=""className="absolute  right-20 top-80 h-16"/>
                                           <img src={responsive} alt="" className="absolute  right-32 top-96 h-32" />
                                           <div className="bg-purple-900 absolute animate-pulse left-72 bottom-80 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 34%, 73% 100%)"}} ></div>
                                           <div className="bg-purple-900 absolute animate-pulse transition duration-75 left-64 bottom-72 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 34%, 73% 100%)"}} ></div>
                                           <div className="bg-blue-400 absolute animate-pulse transition duration-75 right-72 bottom-64 w-5 h-5 " style ={{clipPath: "polygon(100% 35%, 0 35%, 50% 100%)"}} ></div>
                                           <div className="bg-blue-400 absolute animate-pulse transition duration-75 right-72 bottom-56 w-5 h-5 " style ={{clipPath: "polygon(100% 35%, 0 35%, 50% 100%)"}} ></div>
                                           <div className="bg-yellow-400 absolute animate-pulse transition duration-75 right-36 top-64 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}} ></div>
                                           <div className="bg-yellow-400 absolute animate-pulse transition duration-75 right-44 top-56 w-5 h-5 " style ={{clipPath: "polygon(100% 0, 0 0, 0 100%)"}} ></div>
                                           <div className="bg-green-400 absolute  transition duration-75 -left-32 top-42 w-1/2 h-72 " style ={{clipPath: "polygon(50% 0%, 100% 60%, 50% 100%, 0% 50%)"}} ></div>





                            </div>
               </div> 
              
            </div>

        </div>
    )
}
