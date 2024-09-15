import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>

      <header className='fixed top-0 left-0 w-full z-50 bg-white drop-shadow-md'>
        <nav className='flex justify-between items-center px-8 md:px-32 py-4'>


          <img className='w-32' src="./public/img1.png" alt="Logo" />


          <ul className='hidden xl:flex items-center gap-12 font-semibold text-base'>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
              <Link to='/' onClick={handleLinkClick}>Home</Link>
            </li>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
              <Link to='about' onClick={handleLinkClick}>About</Link>
            </li>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
              <Link to='contact' onClick={handleLinkClick}>Contact</Link>
            </li>
            <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>
              <Link to='product' onClick={handleLinkClick}>Product</Link>
            </li>
          </ul>


          <div className='relative hidden md:flex items-center justify-center gap-3'>
            <i className='bx bx-search absolute left-3 text-2xl text-gray-500'></i>
            <input
              type="text"
              placeholder='Search...'
              className='py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500'
            />
          </div>

          <i
            className='bx bx-menu xl:hidden block text-5xl cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </nav>
      </header>


      <div
        className={`fixed top-16 pt-14 left-0 w-full h-[calc(100vh-4rem)] bg-white flex flex-col items-center gap-1 font-semibold text-lg transition-transform duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease', zIndex: 40 }}
      >
        <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
          <Link to='/' onClick={handleLinkClick}>Home</Link>
        </li>
        <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
          <Link to='about' onClick={handleLinkClick}>About</Link>
        </li>
        <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
          <Link to='contact' onClick={handleLinkClick}>Contact</Link>
        </li>
        <li className='list-none w-full text-center hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>
          <Link to='product' onClick={handleLinkClick}>Product</Link>
        </li>
      </div>


      <main className={`transition-all duration-300 ${isMenuOpen ? 'pt-[calc(100vh-4rem)]' : 'pt-16'}`}>

      </main>
    </>
  );
};

export default Navbar;



