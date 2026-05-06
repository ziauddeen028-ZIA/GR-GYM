import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img7 from "../assets/img7.jpeg"

const gym1 = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop'
const gym2 = 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1331&auto=format&fit=crop'
const gym3 = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop'
const gym4 = 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop'
const gym5 = 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374&auto=format&fit=crop'
const gym6 = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1470&auto=format&fit=crop'

const images = [
  { src: img1, alt: 'GR Gym weight training floor' },
  { src: img2, alt: 'GR Gym cardio equipment' },
  { src: img3, alt: 'GR Gym free weights section' },
  { src: img4, alt: 'GR Gym personal training session' },
  { src: img5, alt: 'GR Gym members working out' },
  { src: img7, alt: 'GR Gym Pallavaram Chennai' },
]

function GalleryItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-sm group cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-52 md:h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
      />

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Inside GR Gym</p>
          <h2 className="section-title font-heading">Our <span className="text-accent font-sans">Gallery</span></h2>
          <p className="text-textLight text-sm mt-2 font-sans">State-of-the-art equipment in a premium training environment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((item, i) => (
            <GalleryItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
