import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiPencilRuler } from 'react-icons/gi'
import { AiOutlineCalculator } from 'react-icons/ai'

import { styles } from "../styles/styles";
import { navLinks } from "../constants";
import logo from '../assets/logo.png'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white-100`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-20"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <div className="flex items-center text-golden">
            <img src={logo} alt="logo" className="w-[120px] object-contain"/>
          </div>
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? 'text-golden' 
                : 'text-primary'
              }text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a className="hover:text-golden" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center" onClick={() => setToggle(!toggle)}>
          <div className="cursor-pointer">
            { toggle 
              ? <GiPencilRuler size={24} color="#080671" /> 
              : <AiOutlineCalculator size={24} color="#080671" /> 
            } 
          </div>


          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-jsf-blue text-white-100 absolute top-20 right-0 my-2 min-w-[140px] min-h-[500px] z-10 rounded-l-xl`}>
            <ul className="list-none flex justify-evenly items-start gap-6 flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                  active === link.title
                  ? 'text-golden' 
                  : 'text-primary'
                  }text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() =>{ 
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a className="hover:text-golden" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar