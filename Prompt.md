Create a modern, premium, mobile-first gym website using React (Vite) and Tailwind CSS.

PROJECT GOAL:
Build a high-converting local gym website for GR Gym Fitness that attracts nearby customers and encourages them to call or join.

THEME:
- Primary: Black (#0B0B0B)
- Secondary: Dark Grey (#1A1A1A)
- Accent: Yellow (#FFD600)
- Text: White (#FFFFFF), Light Grey (#BDBDBD)
- Style: Bold, energetic, minimal, fitness-focused
- Use yellow ONLY for highlights, buttons, and pricing

FONTS:
- Headings: Bebas Neue or similar bold font
- Body: DM Sans or Inter

GYM DETAILS:
Name: GR Gym Fitness
Owner: K. Jayanthran
Phone: 9962717303

Address:
Dilli St, Abdul Kalam Nagar,
Shiva Shankar Nagar, Secretariat Colony,
Pallavaram, Chennai – 600043, Tamil Nadu

TIMINGS:
Monday – Saturday:
5:00 AM – 10:00 AM (Unisex)
10:00 AM – 4:00 PM (Women Only)
4:00 PM – 9:00 PM (Unisex)

Sunday:
5:00 AM – 12:00 Noon (Unisex)

PRICING:

Weight Training:
₹600/month
₹1500/3 months
₹2800/6 months
₹5000/year

Cardio + Training:
₹1200/month
₹3000/3 months
₹5000/6 months
₹6000/year

SERVICES:
- Weight Training
- Cardio Training
- Muscle Building
- Personal Training
- Diet & Nutrition Guidance

WEBSITE STRUCTURE:

1. NAVBAR
- Sticky navbar
- Logo: GR Gym
- Links: Home, Services, Pricing, Contact
- CTA button: "Join Now" (yellow)
- Mobile hamburger menu

2. HERO SECTION
- Full screen height
- Background gym image with dark overlay (bg-black/70)
- Heading: "Transform Your Body at GR Gym"
- Subheading: "Starting from ₹600/month"
- Buttons:
  - Join Now (yellow)
  - Call Now (tel link)
- Add subtle zoom animation on background
- Text fade-in animation

3. ABOUT SECTION
- Short intro about gym and owner
- Focus on affordability and coaching
- Add image of gym or trainer
- Clean 2-column layout (stack on mobile)

4. SERVICES SECTION
- Card grid layout
- Each card:
  - Icon or image
  - Title
  - Short description
- Add hover animation:
  - Slight scale
  - 3D tilt effect
  - Yellow border glow

5. PRICING SECTION (IMPORTANT)
- Highlight section visually
- Two pricing cards:
  1. Weight Training
  2. Cardio + Training
- Large yellow price text
- Clean spacing
- "Join Now" button on each card
- Add hover effect (scale + shadow)

6. TIMINGS SECTION
- Card layout
- Highlight "Women Only" in yellow
- Clear readable format
- Add icons for time

7. GALLERY SECTION
- Grid layout (responsive)
- 2 columns mobile, 3–4 desktop
- Use images from src/assets
- Add hover zoom + slight rotate effect
- Smooth transitions

8. TESTIMONIALS SECTION
- 3 sample reviews
- Card layout
- Add star icons (yellow)
- Subtle animation on scroll

9. CONTACT SECTION
- Address
- Phone (click-to-call)
- WhatsApp button
- Google Maps embed placeholder
- "Get Directions" button

10. FOOTER
- Quick links
- Contact info
- Social links (optional)
- Dark minimal design

ANIMATIONS (IMPORTANT):
- Use Framer Motion
- Add:
  - Fade-in on scroll
  - Slide-up animations
  - Hover scale effects
  - Button animations (glow + scale)
- Keep animations smooth and lightweight

3D EFFECTS:
- Add subtle 3D tilt on cards (CSS transform or motion)
- Do NOT use heavy libraries like Three.js

IMAGES:
- Use local images from "src/assets/"
- Add placeholder imports
- Use object-cover and responsive sizes

FEATURES:
- Fully mobile responsive (priority)
- Sticky navbar
- Smooth scrolling
- WhatsApp floating button
- Click-to-call button
- Fast loading

SEO:
- Title: "Best Affordable Gym in Pallavaram Chennai"
- Add basic meta tags

TECH:
- React (Vite)
- Tailwind CSS
- Framer Motion
- Functional components
- Clean folder structure

CODE REQUIREMENTS:
- Create separate components:
  Navbar.jsx
  Hero.jsx
  About.jsx
  Services.jsx
  Pricing.jsx
  Timings.jsx
  Gallery.jsx
  Testimonials.jsx
  Contact.jsx
  Footer.jsx
  WhatsAppButton.jsx

- Clean reusable code
- Proper imports
- No errors

OUTPUT:
- Full working code
- Ready to run with npm install and npm run dev
- Clean UI
- Premium look

IMPORTANT:
- Do NOT overuse yellow
- Do NOT break mobile layout
- Focus on clean spacing and readability
- Make it look like a professional gym website

FINAL GOAL:
A fast, modern, visually strong gym website that converts visitors into customers.