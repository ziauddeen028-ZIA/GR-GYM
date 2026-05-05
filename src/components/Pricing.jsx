import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    id: 'weight-training',
    name: 'Weight Training',
    icon: '🏋️',
    highlight: false,
    tiers: [
      { duration: '1 Month', price: '₹600' },
      { duration: '3 Months', price: '₹1,500' },
      { duration: '6 Months', price: '₹2,800' },
      { duration: '1 Year', price: '₹5,000' },
    ],
    perks: ['Full gym floor access', 'Trainer guidance'],
  },
  {
    id: 'cardio-training',
    name: 'Cardio + Training',
    icon: '⚡',
    highlight: true,
    tiers: [
      { duration: '1 Month', price: '₹1,200' },
      { duration: '3 Months', price: '₹3,000' },
      { duration: '6 Months', price: '₹5,000' },
      { duration: '1 Year', price: '₹6,000' },
    ],
    perks: ['All Weight Training perks', 'Cardio equipment access', 'Diet guidance'],
  },
]

function PricingCard({ plan, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`relative flex flex-col rounded-sm overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl
        ${plan.highlight
          ? 'border-accent bg-secondary hover:shadow-accent/25'
          : 'border-white/15 bg-secondary hover:shadow-white/10 hover:border-white/30'
        }`}
    >
      {plan.highlight && <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />}
      {plan.highlight && (
        <div className="absolute top-4 right-4 bg-accent text-black font-body font-bold text-xs px-3 py-1 rounded-full">
          POPULAR
        </div>
      )}
      <div className="px-8 pt-8 pb-6 border-b border-white/10">
        <div className="text-3xl mb-3">{plan.icon}</div>
        <h3 className="font-heading text-3xl text-white tracking-wide mb-1">{plan.name}</h3>
        <p className="text-textLight text-sm font-sans">Flexible membership options</p>
      </div>
      <div className="px-8 py-6 flex flex-col gap-3 flex-1">
        {plan.tiers.map((tier) => (
          <div key={tier.duration} className="flex items-center justify-between py-3 px-4 bg-primary/50 rounded-sm border border-white/5 hover:border-accent/30 transition-colors duration-200">
            <span className="text-textLight text-sm font-sans">{tier.duration}</span>
            <span className="text-accent font-heading text-2xl">{tier.price}</span>
          </div>
        ))}
        <ul className="mt-4 space-y-2">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-textLight text-sm font-sans">
              <span className="text-accent font-sans">✓</span>{perk}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 pb-8">
        <a href="tel:9962717303" className={`block text-center py-3.5 font-body font-bold text-sm tracking-wide rounded-sm transition-all duration-200 hover:scale-105 active:scale-95 ${plan.highlight ? 'bg-accent text-black hover:bg-yellow-400' : 'bg-white/10 text-white hover:bg-accent hover:text-black'}`}>
          Join Now — Call Us
        </a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Membership Plans</p>
          <h2 className="section-title font-heading">Simple, <span className="text-accent font-sans">Affordable</span> Pricing</h2>
          <p className="text-textLight max-w-lg mx-auto text-sm mt-2 font-sans">No hidden fees. No contracts. Just results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => <PricingCard key={plan.id} plan={plan} index={i} />)}
        </div>
        <p className="text-center text-textLight/60 text-xs mt-8 font-sans">
          📞 Call <a href="tel:9962717303" className="text-accent hover:underline">9962717303</a> to enroll or for custom plans
        </p>
      </div>
    </section>
  )
}
