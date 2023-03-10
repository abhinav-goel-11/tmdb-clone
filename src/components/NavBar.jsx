import React from 'react';
import Logo from '../Logo.png';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <>
        <div className="flex space-x-8 pl-12 border items-center py-4">
            <img src={Logo} className="h-[40px] md:h-[60px] "/>
            <Link to="/" className="text-blue-400 text-xl md:text-3xl font-bold">Home</Link>
            <Link to="/favourites" className="text-blue-400 text-xl md:text-3xl font-bold">Favourites</Link>
        </div>
    </>
  )
}

export default NavBar