import React from 'react'

export default function Articles() {
    const picture ='https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    const picture2 ="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80"




    return (
        <div classname="container mx-auto px-4 py-8">
           <h1 className= " mb-6 text-gray-900 text-4xl font-bold px-6">Comment augmente le nombre de clients et de lead ? </h1> 
           <h2 className="mb-2 px-6 text-xl text-gray-500">Suivez ces conseils et vous allez augmenter votre chiffre d'affaire </h2>
           <div className="flex px-4 py-8">
               <img src={picture2}
                    alt="user"
                    className=" rounded-full h-10"
                    />
                <p className="text-gray-400 ml-6 pt-2">John Doe  Feb 14 2022</p>    

           </div>
           <img src={picture}
                alt="some text"
                className="px-4 py-8 h-96 w-full   object-cover object-center"/>

            <div className="px-4 py-8">
                <p className="mb-2">Do you want to write more but have a hard time knowing where to start?
                    Well, you’re not alone. The writing process creates certain roadblocks that can slow down even the best writers. From choosing the right topic to finding a working title, it’s a science.</p>
                <p className="mb-2">Do you want to write more but have a hard time knowing where to start?
                    Well, you’re not alone. The writing process creates certain roadblocks that can slow down even the best writers. From choosing the right topic to finding a working title, it’s a science.</p>
                <p className="mb-2">Do you want to write more but have a hard time knowing where to start?
                     Well, you’re not alone. The writing process creates certain roadblocks that can slow down even the best writers. From choosing the right topic to finding a working title, it’s a science.</p>
          </div>
        </div>
    )
}
