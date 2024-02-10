import React from 'react'
import Logo from "../../assets/food-logo.png";
import {FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';



const Menu = [
    {
        id: 1,
        name : "Home",
        link: "/#",
    },

    {
        id: 2,
        name : "Services",
        link: "/#services",
    },

    {
        id: 3,
        name : "About",
        link: "/#about",
    }
]

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
     <div className="container py-3 sm:py-0"> 
       <div className='flex justify-between items-center'>
           <div>
               <a href='#' className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="logo" className="w-10" srcset="" />
                Foodie
               </a>
           </div>

           <div className="flex justify-between items-center gap-4">
            <div>
             <DarkMode />
           </div>

           <ul className="hidden sm:flex items-center gap-4">
            {Menu.map((menu) => (
                <li key={menu.id}>
                    <a href={menu.link} className="inline-block py-4 px-4 hover:text-yellow-500">
                        {menu.name}
                    </a>
                </li>
            ))}
           </ul>
           <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
    Order
    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
</button>


       </div>
       </div>
     </div>

    </div>
  )
}

export default Navbar