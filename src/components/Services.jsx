import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: 'weight-training',
    icon: '🏋️',
    title: 'Weight Training',
    description:
      'Build strength and sculpt your physique with our full range of free weights, machines, and structured progressive overload programmes.',
  },
  {
    id: 'cardio',
    icon: '🏃',
    title: 'Cardio Training',
    description:
      'Burn calories and boost endurance on treadmills, cycles, and ellipticals — guided by our certified cardio coaches.',
  },
  {
    id: 'muscle-building',
    icon: '💪',
    title: 'Muscle Building',
    description:
      'Targeted hypertrophy programmes designed to maximise muscle gain with proper nutrition and recovery strategies.',
  },
  {
    id: 'personal-training',
    icon: '🎯',
    title: 'Personal Training',
    description:
      'One-on-one sessions with expert trainers who create a custom plan tailored specifically to your body and goals.',
  },
  {
    id: 'diet-nutrition',
    icon: '🥗',
    title: 'Diet & Nutrition',
    description:
      'Expert dietary guidance and meal plans to complement your training — because great bodies are built in the kitchen too.',
  },
]

function ServiceCard({ service, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-80px' })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 14
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -14
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.25s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-secondary border border-white/10 rounded-sm p-7 group hover:border-accent/60 hover:glow-yellow hover:scale-[1.03] transition-all duration-300 cursor-default"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500 rounded-sm" />

      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-heading text-2xl text-white mb-3 tracking-wide">{service.title}</h3>
      <p className="text-textLight text-sm leading-relaxed font-sans">{service.description}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">
            What We Offer
          </p>
          <h2 className="section-title font-heading">
            Our <span className="text-accent font-sans">Services</span>
          </h2>
          <p className="text-textLight max-w-xl mx-auto text-sm mt-2 font-sans">
            Everything you need to reach your fitness goals — under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
