import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from "../assets/gr-logo.png";

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="GR Gym Logo"
            className="h-16 md:h-20 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`${scrolled ? 'text-textLight' : 'text-white'} hover:text-accent font-body font-medium text-sm tracking-wide transition-colors duration-200 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 font-sans" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-black font-bold text-sm rounded-sm hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-accent/30 hover:shadow-lg font-cta"
          >
            JOIN NOW
          </a>
          
          <button
            id="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 group"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-5'}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-textLight hover:text-accent font-medium text-base transition-colors duration-200 py-1 font-cta"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pricing"
                  onClick={handleNavClick}
                  className="inline-flex items-center px-5 py-2.5 bg-accent text-black font-bold text-sm rounded-sm hover:bg-yellow-400 transition-all duration-200 font-cta"
                >
                  Join Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
