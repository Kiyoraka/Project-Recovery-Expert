# Recovery Xpert Sdn Bhd - Corporate Website

**Professional Smart Ethical Debt Recovery Services**

A modern, responsive corporate website for Recovery Xpert Sdn Bhd (1634727-H), Malaysia's trusted debt recovery agency combining human insight and technology for sustainable financial outcomes.

---

## 🌟 Overview

Recovery Xpert Sdn Bhd is a newly established yet professionally led Malaysian-based debt collection agency formed in 2025. The company focuses on redefining debt recovery with integrity, professionalism, and innovation.

**Company Registration**: 1634727-H

---

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphism Design** - Elegant glass-effect cards with backdrop blur
- **Gold/Black/White Theme** - Professional color scheme with gold accents
- **Responsive Layout** - Mobile-first design with breakpoints at 480px, 768px, 1024px
- **Smooth Animations** - Fade-in effects, rise animations, and staggered card reveals
- **Fixed Navigation** - Glassmorphism navbar with smooth section transitions

### 📄 Sections

#### 1. Home Section
- Company name with registration number (gold-colored)
- Professional tagline
- Call-to-action buttons (About Us, Contact Us)
- Vertically centered full-viewport layout

#### 2. About Us Section
- **Company Background** - Mission and founding story
- **Vision** - Malaysia's most trusted ethical debt recovery agency
- **Mission** - Three-pillar approach with bullet points

#### 3. Management Team Section
- Interactive team member cards with clickable avatars
- Modal popup biographies
- **Chairman**: Lieutenant General Dato' Sri Azzuddin bin Ahmad (Retired)
- **CEO**: Mr. Nivas Ragavan - Business leader and chamber president
- **COO**: Mr. Kumareswaran Sinayah - Operations expert with insurance recovery background

#### 4. Services Section
Six professional debt recovery services:
- Account Receivables Management
- Soft Collection Strategies
- Field Collection Services
- Legal Liaison Services
- Credit Tracing & Profiling
- Reporting & Analytics

#### 5. Contact Section
- Two phone numbers
- Professional email (admin@recoveryxpert.com.my)
- Office address in Petaling Jaya, Selangor

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript (ES6+)** - No framework dependencies

### CSS Features
- CSS Custom Properties (variables)
- Flexbox & CSS Grid layouts
- Backdrop filters for glassmorphism
- CSS animations and transitions
- Media queries for responsive design

### External Libraries
- **Font Awesome 6.5.1** - Icon library (CDN)

---

## 📁 Project Structure

```
Website Recovery Expert/
├── index.html                          # Main HTML file
├── README.md                           # Project documentation
├── assets/
│   ├── images/
│   │   ├── logo.png                    # Company logo & favicon
│   │   ├── chairman.png                # Chairman photo (placeholder)
│   │   ├── ceo.png                     # CEO photo (placeholder)
│   │   └── coo.png                     # COO photo (placeholder)
│   ├── style/
│   │   ├── theme.css                   # CSS variables & theme colors
│   │   ├── master.css                  # Base styles & utilities
│   │   └── components/
│   │       ├── logo-animation.css      # Loading screen animation
│   │       ├── navigation.css          # Navbar styling
│   │       ├── home.css                # Section layouts & hero
│   │       ├── cards.css               # Card components
│   │       ├── modal.css               # Team member modals
│   │       └── animations.css          # Fade & rise animations
│   └── script/
│       ├── master.js                   # Main application logic
│       └── components/
│           ├── logo-animation.js       # Loading screen script
│           ├── navigation.js           # Nav menu & smooth scroll
│           ├── section-manager.js      # Section switching
│           └── team-modal.js           # Team biography popups
```

---

## 🚀 Installation & Setup

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional for local development)

### Quick Start

1. **Clone or download** the project files

2. **Open directly in browser**:
   ```bash
   # Navigate to project directory
   cd "Website Recovery Expert"

   # Open index.html in browser
   # Double-click index.html OR use a local server
   ```

3. **Using a local server** (recommended):
   ```bash
   # Python 3
   python -m http.server 8000

   # PHP
   php -S localhost:8000

   # Node.js (with http-server)
   npx http-server -p 8000
   ```

4. **Access the website**:
   ```
   http://localhost:8000
   ```

---

## 🎨 Customization

### Color Theme
Edit `assets/style/theme.css` to change colors:

```css
:root {
    /* Primary Colors */
    --color-primary: #0a0a0a;        /* Deep black background */
    --color-secondary: #1a1a1a;      /* Dark black */
    --color-accent: #d4af37;         /* Gold accent */
    --text-accent: #f4d03f;          /* Lighter gold */

    /* Text Colors */
    --text-primary: #ffffff;         /* Pure white */
    --text-secondary: #b0b0b0;       /* Gray */

    /* Additional Colors */
    --color-white: #ffffff;
    --color-black: #000000;
}
```

### Company Information
Update in `index.html`:
- Company name and registration number (Home section)
- About Us content (lines 136-173)
- Team member information (lines 182-209, modals 336-408)
- Contact details (lines 297-324)

### Team Photos
Replace placeholder images in `assets/images/`:
- `chairman.png` - 500x500px recommended
- `ceo.png` - 500x500px recommended
- `coo.png` - 500x500px recommended

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (full layout)
- **Tablet**: 768px - 1023px (adjusted font sizes)
- **Mobile**: 481px - 767px (stacked layout)
- **Small Mobile**: 480px and below (compact layout)

---

## ⚡ Performance Features

- Preloaded logo image for faster loading
- Modular CSS architecture for better caching
- Modular JavaScript for code organization
- Debounced window resize handlers
- Optimized animations with CSS transforms
- Minimal external dependencies (Font Awesome only)

---

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

**Note**: Modern browser features used (CSS Grid, Flexbox, Backdrop Filter)

---

## 📝 Development Notes

### CSS Architecture
- **theme.css** - Global CSS variables
- **master.css** - Reset, base styles, utilities
- **components/*.css** - Modular component styles

### JavaScript Architecture
- **master.js** - Application initialization & utilities
- **components/*.js** - Self-contained feature modules

### Animation System
- Section fade-in on activation
- Rise-from-below card animations
- Staggered delays for card grids
- Smooth scroll navigation

---

## 🏢 Company Information

**Recovery Xpert Sdn Bhd (1634727-H)**

**Address**:
T2-L6-12, Tower 2, Level 6
Wisma MCIS, Jalan Barat
46200, Petaling Jaya
Selangor DE, Malaysia

**Contact**:
- Phone: +6012 383 0389 / +6012 222 5772
- Email: admin@recoveryxpert.com.my

**Management Team**:
- **Chairman**: Lieutenant General Dato' Sri Azzuddin bin Ahmad (Retired)
- **CEO**: Mr. Nivas Ragavan
- **COO**: Mr. Kumareswaran Sinayah

---

## 📜 License

© 2025 Recovery Xpert Sdn Bhd. All rights reserved.

---

## 🤝 Credits

**Development**: Kiyo Software TechLab
**Design**: Modern glassmorphism with gold/black theme
**Framework**: Vanilla JavaScript (no framework dependencies)
**Icons**: Font Awesome 6.5.1

---

## 📞 Support

For technical support or inquiries about the website, please contact:
- Email: admin@recoveryxpert.com.my
- Phone: +6012 383 0389

---

**Built with 💜 by Kiyo Software TechLab**
