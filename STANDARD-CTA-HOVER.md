# Standard CTA Hover Animation

## 🎯 Definition
The **Standard CTA Hover** is the consistent rectangle-to-pill hover animation pattern used across all Call-to-Action buttons on the Yoder Construction website.

## ⚡ Implementation

### CSS Classes & Inline Styles:
```tsx
<Link
  href="/target-url"
  className="inline-block px-6 py-3 bg-accent text-background font-dm-sans font-medium tracking-wide hover:bg-opacity-90 transition-colors duration-300"
  style={{
    borderRadius: '6px',
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderRadius = '50px';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderRadius = '6px';
  }}
>
  Button Text
</Link>
```

### For Border Buttons (like Footer CTA):
```tsx
<Link
  href="/target-url"
  className="inline-block px-6 py-3 border-2 border-white text-white font-dm-sans font-medium tracking-wide hover:bg-white hover:text-primary-dark transition-colors duration-300"
  style={{
    borderRadius: '6px',
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderRadius = '50px';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderRadius = '6px';
  }}
>
  Button Text
</Link>
```

## 🎨 Animation Details

- **Initial State:** `border-radius: 6px` (rectangle with rounded corners)
- **Hover State:** `border-radius: 50px` (pill shape)
- **Timing Function:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (smooth ease-out)
- **Duration:** `0.6s`
- **Additional:** `transition-colors duration-300` for color changes

## 📍 Current Implementations

✅ **Navbar CTA:** "Request Consultation"  
✅ **Footer CTA:** "Get Free Consultation"  
✅ **About Page CTA:** "Work With Matt"  
✅ **About Page Project Section:** "Request Consultation" & "View Our Work"  
✅ **Mobile Menu CTA:** "Request Your Consultation"  

## 🎯 Usage Guidelines

1. **Consistency:** All primary CTA buttons should use Standard CTA Hover
2. **Timing:** Always use the exact same cubic-bezier timing function
3. **Shape:** Rectangle (6px) → Pill (50px) transition
4. **Color:** Maintain existing color schemes (accent, border, etc.)
5. **Padding:** Use appropriate padding for button size context

## 🛠️ Benefits

- **Professional appearance:** Smooth, luxurious animation
- **Brand consistency:** Same experience across all CTAs
- **User engagement:** Visual feedback encourages interaction
- **Modern design:** Current with 2024+ UI/UX trends