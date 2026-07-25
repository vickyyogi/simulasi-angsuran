import './style.comp.css'
import LogoArc from '../assets/logo-arc.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path></svg>
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
        </div>
      </div>
    </header>
  )
}

export default Header;