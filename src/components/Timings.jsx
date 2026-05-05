import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timings = [
  {
    id: 'mon-sat',
    day: 'Monday – Saturday',
    slots: [
      { time: '5:00 AM – 10:00 AM', label: 'Unisex', isWomen: false },
      { time: '10:00 AM – 4:00 PM', label: 'Women Only', isWomen: true },
      { time: '4:00 PM – 9:00 PM', label: 'Unisex', isWomen: false },
    ],
  },
  {
    id: 'sunday',
    day: 'Sunday',
    slots: [
      { time: '5:00 AM – 12:00 Noon', label: 'Unisex', isWomen: false },
    ],
  },
]

export default function Timings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="timings" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Opening Hours</p>
          <h2 className="section-title font-heading">Gym <span className="text-accent font-sans">Timings</span></h2>
          <p className="text-textLight text-sm mt-2 font-sans">We're open early so you can train on your schedule.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {timings.map((timing, i) => (
            <motion.div
              key={timing.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-primary border border-white/10 rounded-sm p-6 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-sans">🗓️</span>
                <h3 className="font-heading text-2xl text-white tracking-wide">{timing.day}</h3>
              </div>
              <div className="space-y-3">
                {timing.slots.map((slot) => (
                  <div
                    key={slot.time}
                    className={`flex items-center justify-between px-4 py-3 rounded-sm border ${
                      slot.isWomen
                        ? 'border-accent/40 bg-accent/5'
                        : 'border-white/5 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base font-sans">⏰</span>
                      <span className="text-white text-sm font-medium font-sans">{slot.time}</span>
                    </div>
                    <span className={`font-body font-bold text-xs px-2 py-1 rounded-full ${
                      slot.isWomen
                        ? 'text-black bg-accent'
                        : 'text-textLight bg-white/10'
                    }`}>
                      {slot.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center p-4 bg-accent/10 border border-accent/25 rounded-sm"
        >
          <p className="text-accent font-semibold text-sm font-sans">
            ✨ Special women-only hours — 10 AM to 4 PM, Monday to Saturday
          </p>
        </motion.div>
      </div>
    </section>
  )
}
