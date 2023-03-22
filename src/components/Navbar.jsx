import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiPencilRuler } from 'react-icons/gi'
import { BiMenuAltRight } from 'react-icons/bi'

import { styles } from "../styles/styles";
import { navLinks } from "../constants";
import logo from '../assets/logo.png'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-1 fixed top-0 z-20 bg-white-100`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-20"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <div className="flex items-center text-jsf-blue">
            <img id="home" src={logo} alt="logo" className="w-[120px] object-contain"/>
          </div>
        </Link>
        
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? 'text-jsf-blue' 
                : 'text-primary'
              }text-[18px] font-medium cursor-pointer`}
            >
              <a className=" duration-300 hover:text-jsf-blue" href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center" onClick={() => setToggle(!toggle)}>
          <div className="cursor-pointer">
            { toggle 
              ? <GiPencilRuler size={24} color="#1b536c" /> 
              : <BiMenuAltRight size={24} color="#1b536c" /> 
            } 
          </div>


          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-jsf-blue text-white-100 absolute top-20 right-0 my-2 min-w-[140px] min-h-[500px] z-10 rounded-l-xl`}>
            <ul className="list-none flex justify-evenly items-start gap-6 flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                  active === link.title
                  ? 'text-jsf-blue' 
                  : 'text-primary'
                  }text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() =>{ 
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>
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