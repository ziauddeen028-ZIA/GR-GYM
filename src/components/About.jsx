import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
const aboutImg = 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop'

const stats = [
  { value: '500+', label: 'Members' },
  { value: '5+', label: 'Years Experience' },
  { value: '₹600', label: 'Starting Price' },
  { value: '6', label: 'Days/Week' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="GR Gym Fitness interior"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-sm -z-10" />
            {/* Owner badge */}
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-accent/30 px-4 py-3 rounded-sm">
              <p className="text-accent font-bold text-sm font-sans">Head Coach & Owner</p>
              <p className="text-white font-semibold text-base font-sans">K. Jayanthran</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">
              About Us
            </p>
            <h2 className="section-title mb-6 font-heading">
              Train Hard.<br />
              <span className="text-accent font-sans">Live Stronger.</span>
            </h2>
            <div className="space-y-4 text-textLight font-body text-base leading-relaxed mb-8">
              <p>
                GR Gym Fitness is Pallavaram's most affordable premium fitness centre. 
                Founded by <span className="text-white font-semibold font-sans">K. Jayanthran</span>, 
                our mission is simple — deliver professional-grade training without the 
                premium price tag.
              </p>
              <p>
                Whether you're a beginner looking to shed weight or an athlete building 
                muscle, our expert coaches and fully-equipped floor will get you there. 
                We offer personalised diet plans, dedicated women-only hours, and flexible 
                membership packages to suit every lifestyle.
              </p>
              <p>
                Located in the heart of <span className="text-white font-semibold font-sans">Abdul Kalam Nagar, Pallavaram</span>, 
                we're your neighbourhood gym — but with results that speak for themselves.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-4 bg-primary border border-white/10 rounded-sm"
                >
                  <div className="text-accent font-heading text-3xl">{stat.value}</div>
                  <div className="text-textLight font-body text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
