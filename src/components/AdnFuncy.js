import React from 'react'

export default function AdnFuncy() {
    const picture ='https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    const picture2 ="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80"
    const picture3 ="https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    return (
        <div className="container mx-auto px-4 ">
           <img src ={picture} alt='groupes de moches'
           className="px-8 py-4 shadow-xl"/> 
           <h1 className="text-center text-4xl font-bold text-gray-900 px-4 py-8">Nous sommes les "Moches.com"</h1>
           <h1 className=" text-center text-2xl font-medium text-gray-800">C'est notre histoire !</h1>
           <p className="px-8 py-4">La page “qui sommes-nous” d’un site e-commerce est absolument essentielle, mais elle est souvent ratée. Certains ne veulent pas prendre de temps pour ce qu’ils considèrent comme une perte de temps. D’autres vont y passer des heures sans savoir où ils vont.

                Bref, nous sommes là pour vous aider sur le sujet.

                On vous a préparé une petite liste d’exemples de pages qui sommes-nous efficaces, on vous explique les points importants qui doivent figurer dans une page à propos et on vous donne toutes les clés pour savoir comment faire une page de présentation entreprise pour votre
           </p>
           <div className="flex mt-10">
                <img src={picture2}
                     alt='La moche'
                     className="h-32 pl-8 pr-4 py-4 shadow-2xl"/>
                     <div className="py-4">
                         <div className=" text-gray-900 text-xl font-bold  ">CEO Lucile Moche</div>
                         <p className="mt-8 pl-4">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberis</p>
                     </div>
            </div>    

            <div className="flex mt-10">

                    <div className="py-4">
                   
                         <div className=" text-gray-900 text-xl font-bold pl-8 ">Stagiaire Incom Pétante</div>
                         <p className="mt-8 pl-8">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberis</p>
                     </div>
                  <img src={picture3}
                          alt='La moche'
                          className="h-32 pl-8 pr-4 py-4 shadow-2xl"
                 />                          
            </div> 
        </div>
    )
}

