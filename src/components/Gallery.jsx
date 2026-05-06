import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, X } from 'lucide-react'

import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"
import img7 from "../assets/img7.jpeg"
import img9 from "../assets/gym1.jpeg"
import img10 from "../assets/gym2.jpeg"
import img11 from "../assets/gym3.jpeg"
import img12 from "../assets/gym4.jpeg"
import img13 from "../assets/gym5.jpeg"
import img14 from "../assets/gym6.jpeg"
import img15 from "../assets/gym7.jpeg"
import img16 from "../assets/gym8.jpeg"

const images = [
  { src: img6, alt: 'GR Gym Pallavaram Chennai' },
  { src: img7, alt: 'GR Gym Pallavaram Chennai' },
  { src: img9, alt: 'GR Gym cardio equipment' },
  { src: img10, alt: 'GR Gym free weights section' },
  { src: img11, alt: 'GR Gym personal training session' },
  { src: img12, alt: 'GR Gym members working out' },
  { src: img13, alt: 'GR Gym Pallavaram Chennai' },
  { src: img14, alt: 'GR Gym Pallavaram Chennai' },
  { src: img1, alt: 'GR Gym weight training floor' },
  { src: img2, alt: 'GR Gym cardio equipment' },
  { src: img3, alt: 'GR Gym free weights section' },
  { src: img4, alt: 'GR Gym personal training session' },
  { src: img5, alt: 'GR Gym members working out' },
  { src: img15, alt: 'GR Gym Pallavaram Chennai' },
  { src: img16, alt: 'GR Gym Pallavaram Chennai' },
]

function GalleryItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative overflow-hidden rounded-xl group cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-56 md:h-64 object-cover transition-all duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
    </motion.div>
  )
}

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)

  const visibleImages = showAll ? images : images.slice(0, 6)

  return (
    <section id="gallery" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">
            Inside GR Gym
          </p>

          <h2 className="section-title font-heading">
            Our <span className="text-accent font-sans">Gallery</span>
          </h2>

          <p className="text-textLight text-sm mt-2 font-sans">
            State-of-the-art equipment in a premium training environment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {visibleImages.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-accent hover:scale-105 transition-all duration-300 text-black font-semibold px-6 py-3 rounded-full"
          >
            {showAll ? (
              <>
                <X size={18} />
                Show Less
              </>
            ) : (
              <>
                <Plus size={18} />
                View More
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  )
}