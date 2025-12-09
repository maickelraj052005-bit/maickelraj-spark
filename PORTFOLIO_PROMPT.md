# Complete Portfolio Website Prompt for ChatGPT

## Project Overview
Create a modern, responsive portfolio website for **Maickelraj**, a Frontend Developer from Salem, India. The design should feature a cyberpunk/neon aesthetic with glassmorphism effects, smooth animations, and gradient text effects.

---

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui
- **Type Animation**: react-type-animation

---

## Design System (index.css)

### Light Theme Colors (HSL format)
```css
:root {
  --background: 0 0% 100%;
  --foreground: 220 20% 10%;
  --card: 0 0% 98%;
  --card-foreground: 220 20% 10%;
  --primary: 195 100% 50%;          /* Cyan/Neon Blue */
  --primary-foreground: 0 0% 100%;
  --secondary: 280 85% 55%;          /* Purple/Violet */
  --secondary-foreground: 0 0% 100%;
  --muted: 220 15% 95%;
  --muted-foreground: 220 15% 45%;
  --accent: 330 100% 65%;            /* Pink/Magenta */
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84.2% 60.2%;
  --border: 220 15% 90%;
  --input: 220 15% 90%;
  --ring: 195 100% 50%;
  --radius: 1rem;
}
```

### Dark Theme Colors
```css
.dark {
  --background: 220 30% 8%;          /* Deep dark blue */
  --foreground: 0 0% 98%;
  --card: 220 25% 12%;
  --card-foreground: 0 0% 98%;
  --primary: 195 100% 50%;
  --primary-foreground: 220 30% 8%;
  --secondary: 280 85% 55%;
  --muted: 220 20% 18%;
  --muted-foreground: 220 15% 65%;
  --accent: 330 100% 65%;
  --border: 220 20% 20%;
  --input: 220 20% 20%;
}
```

### Neon Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(195 100% 50%), hsl(280 85% 55%));
--gradient-accent: linear-gradient(135deg, hsl(280 85% 55%), hsl(330 100% 65%));
--gradient-cyber: linear-gradient(135deg, hsl(195 100% 50%), hsl(280 85% 55%), hsl(330 100% 65%));
```

### Glow Effects
```css
/* Light mode */
--glow-primary: 0 0 30px hsl(195 100% 50% / 0.3);
--glow-secondary: 0 0 30px hsl(280 85% 55% / 0.3);
--glow-accent: 0 0 30px hsl(330 100% 65% / 0.3);

/* Dark mode (stronger) */
--glow-primary: 0 0 50px hsl(195 100% 50% / 0.5);
--glow-secondary: 0 0 50px hsl(280 85% 55% / 0.5);
--glow-accent: 0 0 50px hsl(330 100% 65% / 0.5);
```

### Glass Effect
```css
.glass {
  background: hsl(0 0% 100% / 0.7);  /* Light mode */
  /* background: hsl(220 25% 15% / 0.6); Dark mode */
  backdrop-filter: blur(12px);
  border: 1px solid hsl(220 15% 90% / 0.3);
}
```

### Utility Classes
```css
.gradient-text {
  background: var(--gradient-cyber);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}
```

---

## Personal Information

### Owner Details
- **Name**: Maickelraj
- **Role**: Frontend Developer (NOT full-stack)
- **Location**: Salem, India
- **Email**: maickelraj052005@gmail.com
- **Education**: B.E. in Computer Science and Engineering at Sri Shanmugha College of Engineering and Technology
- **Goal**: To become a professional Frontend Developer known for clean design, performance, and creative animations

### Social Links
- **GitHub**: https://github.com/Maickelraj
- **LinkedIn**: https://www.linkedin.com/in/maickelraj/

### CV/Resume
- File: `/public/Maickelraj_Sakthivel_Resume.pdf`

---

## Website Sections

### 1. Navbar
- Fixed position with glassmorphism effect
- Logo: "Maickelraj" with gradient text
- Navigation links: Home, About, Skills, Projects, Certifications, Contact
- Smooth scroll to sections
- Mobile hamburger menu with slide-in animation
- Dark/Light theme toggle (persists to localStorage)

### 2. Hero Section
- Full viewport height with animated gradient background
- Floating animated blobs in background
- Title: "Hi, I'm Maickelraj" (large, bold)
- Typewriter effect showing: "Frontend Developer", "UI/UX Enthusiast", "Creative Coder"
- Two CTA buttons:
  - "Download CV" (primary gradient button with glow)
  - "Contact Me" (outline button)
- Social icons (GitHub, LinkedIn) with hover glow effects
- Scroll indicator animation at bottom

### 3. About Section
- Profile photo (circular with gradient border and glow)
- Bio text:
  ```
  Hi there! 👋 I'm Maickelraj, a passionate Frontend Developer from Salem. 
  I enjoy creating beautiful, responsive, and user-friendly websites using 
  HTML, CSS, and JavaScript. I'm currently pursuing my B.E. in Computer 
  Science and Engineering at Sri Shanmugha College of Engineering and Technology.
  
  I love bringing creative ideas to life through clean code and smooth 
  animations that make every webpage more interactive and alive. When I'm 
  not coding, I enjoy exploring new design styles, learning modern frontend 
  techniques, and improving my visual creativity every day.
  
  🎯 Goal: To become a professional Frontend Developer known for clean design, 
  performance, and creative animations.
  ```
- Stats cards with icons:
  - 3+ Projects
  - 5+ Certifications  
  - 10+ Technologies

### 4. Skills Section (Frontend Only)
Skills with proficiency levels (animated progress bars):

**Frontend Development:**
- HTML - 95%
- CSS - 90%
- JavaScript - 85%
- React - 80%
- TypeScript - 75%
- Tailwind CSS - 85%

**Tools & Technologies:**
- Git & GitHub - 80%
- VS Code - 90%
- Figma - 70%
- Responsive Design - 85%

Colors for skill bars: Use gradient from primary to secondary

### 5. Projects Section (3 Projects)

**Project 1: Login Page Design**
- Description: A modern, responsive login page with glassmorphism effects and smooth animations
- Technologies: HTML, CSS, JavaScript
- Image: Login page screenshot
- Live Demo & GitHub links
- Features: Form validation, animated backgrounds, responsive design

**Project 2: Interactive Whiteboard**
- Description: A collaborative whiteboard application with real-time drawing capabilities
- Technologies: React, TypeScript, Canvas API
- Image: Whiteboard screenshot
- Live Demo & GitHub links
- Features: Drawing tools, color picker, save/export functionality

**Project 3: Portfolio Website**
- Description: This portfolio website showcasing my work and skills
- Technologies: React, TypeScript, Tailwind CSS, Framer Motion
- Image: Portfolio screenshot
- Live Demo & GitHub links
- Features: Animations, dark mode, responsive design

Card styling: Glass effect with hover tilt animation and glow

### 6. Certifications Section (5 Certifications)

1. **Web Development Fundamentals**
   - Issuer: Udemy
   - Date: 2024
   - Description: Comprehensive course covering HTML, CSS, and JavaScript basics

2. **React - The Complete Guide**
   - Issuer: Udemy
   - Date: 2024
   - Description: In-depth React course including hooks, routing, and state management

3. **JavaScript Algorithms and Data Structures**
   - Issuer: freeCodeCamp
   - Date: 2024
   - Description: Certification covering JavaScript fundamentals and problem-solving

4. **Responsive Web Design**
   - Issuer: freeCodeCamp
   - Date: 2023
   - Description: Building responsive websites using CSS flexbox, grid, and media queries

5. **Frontend Developer Career Path**
   - Issuer: Scrimba
   - Date: 2024
   - Description: Complete frontend development bootcamp with hands-on projects

Layout: Grid of cards with Award icon, hover animation

### 7. Contact Section
- Heading: "Get In Touch" with gradient text
- Contact form with fields:
  - Name (required)
  - Email (required, validated)
  - Subject (required)
  - Message (required, min 20 characters)
- Submit button with loading state
- Success toast notification on submission
- Contact info cards:
  - Email: maickelraj052005@gmail.com
  - Location: Salem, India
  - Social links

### 8. Footer
- Logo with gradient text
- Quick links to all sections
- Social media icons with hover effects
- Copyright: "© 2024 Maickelraj. All rights reserved."
- "Built with React & Tailwind CSS"

---

## Animation Specifications

### Framer Motion Animations
```javascript
// Fade in up animation
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scale on hover
const scaleHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

// Glow effect on hover
const glowHover = {
  whileHover: { 
    boxShadow: "0 0 30px hsl(195 100% 50% / 0.5)"
  }
}
```

### useInView for scroll animations
- Trigger animations when sections come into viewport
- Use threshold of 0.1-0.3

---

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components must be fully responsive with mobile-first approach.

---

## Accessibility Requirements
- Proper semantic HTML landmarks
- Form labels and aria attributes
- Sufficient color contrast
- Visible focus states
- Keyboard navigation support
- prefers-reduced-motion respect

---

## File Structure
```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/ (shadcn components)
├── pages/
│   └── Index.tsx
├── assets/
│   ├── profile-photo.png
│   └── project-images/
├── index.css (design system)
└── App.tsx
```

---

## Key Design Principles
1. **Cyberpunk/Neon Aesthetic**: Use cyan, purple, and pink gradients
2. **Glassmorphism**: Frosted glass effects with backdrop blur
3. **Smooth Animations**: Framer Motion for all transitions
4. **Gradient Text**: Use gradient-text class for headings
5. **Glow Effects**: Add glows on hover and focus states
6. **Dark Mode First**: Design primarily for dark mode
7. **Floating Elements**: Animated floating shapes in background
8. **Card Tilt Effects**: Subtle 3D tilt on project cards

---

## Important Notes
- All colors must use HSL format
- Use Tailwind semantic tokens (bg-background, text-foreground, etc.)
- Never hardcode colors directly in components
- All buttons should have hover glow effects
- Profile image should have animated gradient border
- Section headings should use gradient-text class
- Cards should have glass effect and subtle shadows

Create this complete portfolio website with all the specified features, animations, and styling. Make sure the design is cohesive, modern, and showcases Maickelraj's skills as a Frontend Developer.
