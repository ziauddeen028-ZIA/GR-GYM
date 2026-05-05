export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="flex items-center gap-2 mb-2">
            <span className="text-accent font-heading text-3xl tracking-widest leading-none">GR</span>
            <span className="text-white font-heading text-xl tracking-wider leading-none mt-1">GYM</span>
          </a>
          <p className="text-textLight/50 text-xs font-sans">
            Premium fitness, affordable price.
          </p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-textLight font-body text-sm">
          <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
          <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>

        {/* Copyright */}
        <div className="text-textLight/40 font-body text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} GR Gym Fitness.<br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  )
}
