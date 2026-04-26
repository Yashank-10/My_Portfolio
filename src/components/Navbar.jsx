import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-6xl flex items-center justify-between py-4">
          <Link to="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src="https://plus.unsplash.com/premium_photo-1732757787588-29df717691f4?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logo"
              className="w-8 h-8 object-cover rounded-full"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            <li>
              {pathname !== '/about' ? (
                <Link to="/about" className="text-sm font-semibold tracking-widest hover:text-green-700 transition-colors">
                  ABOUT
                </Link>
              ) : (
                <Link to="/" className="text-sm font-semibold tracking-widest hover:text-green-700 transition-colors">
                  HOME
                </Link>
              )}
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1lMAohWOfEvRDZTntdqu27SOLVBZp56HB/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-widest bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-full transition-colors flex items-center gap-2"
              >
                RESUME
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="flex md:hidden items-center gap-3">
            <button
              className={`hamburger ${menuOpen ? 'open' : ''} flex flex-col justify-center`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} bg-white border-t border-gray-100`}>
          <ul className="flex flex-col items-center gap-6 py-8 text-sm font-semibold tracking-widest">
            <li>
              {pathname !== '/about' ? (
                <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition-colors">
                  ABOUT
                </Link>
              ) : (
                <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-700 transition-colors">
                  HOME
                </Link>
              )}
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1YW7sEpQRlCmoI7qtXrsELv9htoPr_aP3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-800 text-white py-2 px-5 rounded-full transition-colors"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
