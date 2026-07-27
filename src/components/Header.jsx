import './style.comp.css'
import LogoArc from '../assets/logo-arc.png'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram ,faTiktok} from '@fortawesome/free-brands-svg-icons'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-md '>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16'>
        {/* Logo Desktop*/}
        <div className='p-4 shrink-0 flex items-center gap-3'>
            <img src={LogoArc} className='h-8 w-auto'/>
            <h2 className='text-blue-950 font-bold tracking-tight'>BPR Adiartha Reksacitra Grup</h2>
        </div>

        {/* Navigation Links Desktop */}
        <nav className='hidden md:flex items-center space-x-4'>
          <Link to="/" className='text-blue-950 hover:text-blue-600 transition-colors'>Simulasi Kredit</Link>
          <Link to="/deposito" className='text-blue-950 hover:text-blue-600 transition-colors'>Simulasi Deposito</Link>
        </nav>
        
        {/* Social Media Links Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
        </div>

        {/* Tombol Hamburger */}
        <div className='flex md:hidden items-center'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type='button' className='text-gray-700 hover:text-indigo-600 focus:outline-none' aria-label='Toggle-menu'>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : ( <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg> )}
            </button>
        </div>
      </div>
      {/* menu mobile dropdown */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 border-t border-gray-200 shadow-inner`}>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-2'>
                  <Link to="/" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>Simulasi Kredit</Link>
                  <Link to="/deposito" className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'>Simulasi Deposito</Link>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Facebook</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Instagram</a>
                  <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">Twitter</a>
                </div>
            </div>
    </header>
  )
}

export default Header;