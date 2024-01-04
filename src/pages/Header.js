import React from 'react'
import {Link} from "react-scroll"

const Header = () => {
  console.log(window.innerWidth)
  return (
    <div className='h-20 w-full flex justify-between  items-center absolute bg-white px-5'>
        <div className=' font-extrabold text-2xl'> Rolling Reactions</div>
        {window.innerWidth > 400 && 
        <div className='z-10 flex justify-around w-4/5 relative sm:w-3/5 md:w-2/5 lg:w-1/5'> 
            <Link to="about" spy={true} smooth={true} offset={75} duration={500} className='cursor-pointer'> About </Link>
            <Link to="team" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> Team </Link>
            <Link to="media" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> Media </Link>
            <Link to="credits" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> Credits </Link>
        </div>
      }
    </div>
  )
}

export default Header