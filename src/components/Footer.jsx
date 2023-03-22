import React from 'react'
import { FaInstagram, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='h-[160px] md:h-[90px] flex flex-col items-center justify-center bg-jsf-blue'>
          <div className='flex items-center justify-center flex-wrap gap-4'>
            <a 
            className='flex text-white-100 text-[14px] items-center gap-1'
            href='https://www.google.com.br/maps/place/R.+Sete+de+Setembro,+23+-+Centro,+Nova+Friburgo+-+RJ,+28605-020/@-22.2780518,-42.5358951,17z/data=!3m1!4b1!4m5!3m4!1s0x978a94f854cffb:0x13221361679e9751!8m2!3d-22.2780518!4d-42.5337064?shorturl=1' 
            target='_blank'>
              <MdLocationOn size={24} /> <p>Rua Sete de Setembro, n° 23.206 / 207, Nova Friburgo, RJ.</p>
            </a>
            <a 
            className='flex text-white-100 text-[14px] items-center gap-1'
            href='tel:+55222522-3608' 
            target='_blank'>
              <FaPhoneSquareAlt size={24} /> <p>(22) 2522-3608 / (22) 2522-2073</p>
            </a>
            <a 
            className='flex text-white-100 text-[14px] items-center gap-1'
            href='mailto:contabilidadejfs@gmail.com' 
            target='_blank'>
              <FaEnvelope size={24} /> <p>contabilidadejfs@gmail.com</p>
            </a>
            <a 
            className='flex text-white-100 text-[14px] items-center gap-1'
            href='https://www.instagram.com/jsfcontabilidade/' 
            target='_blank'>
              <FaInstagram size={24} /> <p>@jsfcontabilidade</p>
            </a>
          </div>
          <div className='mt-4'>
            <p className='text-white-100 font-black'>&copy;JSF Contabilidade e Assessoria</p>
          </div>
    </footer>
  )
}

export default Footer