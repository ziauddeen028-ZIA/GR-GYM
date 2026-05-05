import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: 'Arjun Selvam',
    role: 'Member since 2022',
    avatar: '💪',
    rating: 5,
    review:
      'Best gym in Pallavaram! The trainers are very knowledgeable and the equipment is top-notch. The pricing is unbeatable — I pay ₹600/month and get incredible value.',
  },
  {
    id: 2,
    name: 'Priya Devi',
    role: 'Member since 2023',
    avatar: '🏃',
    rating: 5,
    review:
      'The women-only hours are amazing. I feel so comfortable and safe training here. Jayanthran sir is very supportive and the diet guidance changed my life!',
  },
  {
    id: 3,
    name: 'Karthik Rajan',
    role: 'Member since 2021',
    avatar: '🔥',
    rating: 5,
    review:
      'Lost 12 kg in 4 months with the Cardio + Training plan. The coaches are strict but genuinely care about your progress. 100% recommend to anyone in Chennai.',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent text-lg font-sans">★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ review, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-secondary border border-white/10 rounded-sm p-7 hover:border-accent/30 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 flex flex-col"
    >
      <StarRating count={review.rating} />
      <p className="text-textLight text-sm leading-relaxed flex-1 mb-6 italic font-sans">
        "{review.review}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 bg-accent/15 border border-accent/30 rounded-full flex items-center justify-center text-xl">
          {review.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm font-sans">{review.name}</p>
          <p className="text-textLight text-xs font-sans">{review.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Real Stories</p>
          <h2 className="section-title font-heading">What Our <span className="text-accent font-sans">Members</span> Say</h2>
          <p className="text-textLight text-sm mt-2 font-sans">Real transformations from real people in Pallavaram.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <TestimonialCard key={review.id} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
