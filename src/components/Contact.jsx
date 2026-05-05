import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 font-sans">Get in Touch</p>
          <h2 className="section-title font-heading">Contact <span className="text-accent font-sans">Us</span></h2>
          <p className="text-textLight text-sm mt-2 font-sans">Visit us today and start your fitness journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-secondary border border-white/10 rounded-sm p-8"
          >
            <h3 className="font-heading text-3xl mb-6 text-white">Gym Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary border border-white/10 flex items-center justify-center rounded-full flex-shrink-0">
                  <span className="text-accent text-xl font-sans">📍</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 font-heading">Address</h4>
                  <p className="text-textLight text-sm leading-relaxed font-sans">
                    Dilli St, Abdul Kalam Nagar,<br />
                    Shiva Shankar Nagar, Secretariat Colony,<br />
                    Pallavaram, Chennai – 600043, Tamil Nadu
                  </p>
                  <a
                    href="https://maps.google.com/?q=GR+Gym+Fitness+Pallavaram+Chennai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-accent font-body text-sm hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary border border-white/10 flex items-center justify-center rounded-full flex-shrink-0">
                  <span className="text-accent text-xl font-sans">📞</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 font-heading">Phone</h4>
                  <p className="text-textLight text-sm font-sans">
                    Owner: K. Jayanthran<br />
                    <a href="tel:9962717303" className="text-white hover:text-accent font-semibold mt-1 inline-block">
                      +91 99627 17303
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary border border-white/10 flex items-center justify-center rounded-full flex-shrink-0">
                  <span className="text-accent text-xl font-sans">💬</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 font-heading">WhatsApp</h4>
                  <p className="text-textLight text-sm mb-2 font-sans">Message us for quick replies.</p>
                  <a
                    href="https://wa.me/919962717303"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white font-bold text-xs rounded-sm hover:bg-[#1ebe57] transition-colors font-cta"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-auto bg-secondary border border-white/10 rounded-sm relative overflow-hidden group"
          >
            {/* Real map iframe can be placed here. For now using a styled placeholder */}
            <div className="absolute inset-0 bg-[#1A1A1A] flex flex-col items-center justify-center p-6 text-center">
               <div className="w-16 h-16 bg-primary border border-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-sans">🗺️</span>
               </div>
               <h4 className="font-heading text-2xl text-white mb-2">Find Us on Map</h4>
               <p className="text-textLight text-sm max-w-xs mb-6 font-sans">
                 We are located in Abdul Kalam Nagar, Pallavaram. Drop by for a free gym tour!
               </p>
               <a
                  href="https://maps.google.com/?q=GR+Gym+Fitness+Pallavaram+Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-accent text-accent font-bold text-sm rounded-sm hover:bg-accent hover:text-black transition-colors font-cta"
                  
                >
                  Open in Google Maps
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
