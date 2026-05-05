import { motion } from 'framer-motion'
const heroBg = 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1800&q=80'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with zoom animation */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomIn"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">


        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl mt-16 sm:mt-24 md:mt-28 lg:mt-32 sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-4 text-left"
        >
          Transform<br />
          <span className="text-accent font-sans">Your Body</span><br />
          at GR Gym
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 border border-accent/50 text-accent font-body text-xs tracking-widest uppercase mb-6"
        >
          Pallavaram, Chennai
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-body text-textLight text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          Starting from <span className="text-accent font-bold font-sans">₹600/month</span>.
          World-class training, real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="px-8 py-4 bg-accent text-black font-bold text-base rounded-sm hover:bg-yellow-400 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 active:scale-95 transition-all duration-200 font-cta"
          >
            Join Now
          </a>
          <a
            href="tel:9962717303"
            className="px-8 py-4 border border-white/40 text-white font-medium text-base rounded-sm hover:border-accent hover:text-accent hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-sm font-cta"
          >
            📞 Call Now — 9962717303
          </a>
        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4 text-textLight/50 text-xs font-body tracking-widest uppercase">
            <span>Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-6 bg-accent/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
