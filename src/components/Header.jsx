import './style.comp.css'
import LogoArc from '../assets/logo-arc.png'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-white border-b border-gray-200'>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16'>
        {/* Logo */}
        <div className='p-4 shrink-0 flex items-center gap-3'>
            <img src={LogoArc} className='h-8 w-auto'/>
            <h2 className='text-blue-950 font-bold tracking-tight'>BPR Adiartha Reksacitra Grup</h2>
        </div>

        {/* Navigation Links */}
        <nav className='flex items-center space-x-4'>
          <Link to="/" className='text-gray-700 hover:text-blue-600 transition-colors'>Simulasi Kredit</Link>
          <Link to="/deposito" className='text-gray-700 hover:text-blue-600 transition-colors'>Simulasi Deposito</Link>
        </nav>
        
        {/* Social Media Links */}
        <div className="flex items-center space-x-4 text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Twitter
            </a>
        </div>
      </div>
    </header>
  )
}

export default Header;