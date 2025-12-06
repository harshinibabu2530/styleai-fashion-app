# Fashion Recommendation App - Design Guidelines

## Design Approach: Reference-Based
**Primary Inspiration**: Pinterest (visual discovery), ASOS app (fashion commerce), Stitch Fix (personalized styling)

**Core Principles**:
- Visual-first interface celebrating fashion imagery
- Clean, gallery-like layouts that showcase clothing
- Warm, approachable AI assistant personality
- Effortless photo upload and outfit creation flow

## Typography System

**Font Families** (via Google Fonts):
- Primary: 'Inter' (400, 500, 600) - UI text, buttons, labels
- Display: 'Playfair Display' (600, 700) - Hero headlines, section titles

**Type Scale**:
- Hero: text-5xl md:text-6xl font-bold (Playfair Display)
- Section Headings: text-3xl md:text-4xl font-semibold
- Card Titles: text-xl font-medium
- Body: text-base (16px)
- Captions: text-sm
- AI Chat: text-base with tight line-height

## Layout System

**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16
- Component padding: p-4, p-6
- Section spacing: py-12, py-16
- Card gaps: gap-4, gap-6
- Margins: m-3, m-4, m-6

**Container Strategy**:
- Full-width sections: w-full with inner max-w-6xl
- Content areas: max-w-5xl mx-auto
- Chat interface: max-w-3xl

## Page Structure & Layout

### Hero Section (100vh)
**Layout**: Two-column split on desktop, stacked on mobile
- Left: Welcome message, tagline, primary CTA ("Start Your Style Journey")
- Right: Aspirational lifestyle fashion image (well-dressed person in trendy outfit)
- Button with blurred background overlay when on image

### Upload Interface
**Layout**: Centered upload zone with clear categorization
- Drag-and-drop areas for "Tops" and "Bottoms" side-by-side (2-column grid)
- Visual preview thumbnails in 3-4 column grid below upload zones
- Large, dashed border upload boxes with icon and text
- "Generate Outfit" prominent CTA button centered below

### AI Assistant Chat
**Layout**: Floating chat widget (bottom-right) that expands to modal
- Chat messages in alternating left (AI) and right (user) alignment
- AI avatar icon with each message
- Input field with send button at bottom
- Suggested quick-reply buttons for fashion preferences
- Conversational, friendly tone in placeholder text

### Outfit Recommendations Feed
**Layout**: Masonry grid or 2-3 column card layout
- Each card shows outfit combination (top + bottom preview)
- AI styling tip as overlay text or caption
- "Save to Favorites" heart icon
- "Try This Combo" CTA button
- Shuffle/refresh button for new suggestions

### User Profile Dashboard
**Layout**: Tab-based navigation
- Tabs: "My Wardrobe", "Saved Outfits", "Style Preferences"
- Wardrobe: Grid of uploaded clothing items (4-5 columns)
- Preferences: Interactive cards for trending styles with like/dislike toggles
- Clean, card-based organization

## Component Library

### Upload Card
- Large dashed border area (border-2 border-dashed)
- Icon (upload cloud) centered
- "Drag & drop or click to upload" text
- Accepted formats note in small text
- Hover state: subtle background shift

### Outfit Card
- Image area showing outfit combo mockup
- Gradient overlay at bottom for text readability
- AI tip badge (small pill with sparkle icon)
- Action buttons (Save, Share) in card footer
- Rounded corners (rounded-xl)

### Chat Message Bubble
- User messages: Right-aligned with subtle background
- AI messages: Left-aligned with avatar, lighter background
- Rounded bubbles (rounded-2xl)
- Timestamp in small gray text
- Typing indicator with animated dots

### Preference Toggle Cards
- Image of trend/style category as background
- Title overlay with gradient for readability
- Like/Dislike buttons as floating icons
- Selected state: border highlight

### Navigation
- Top bar with logo left, user profile avatar right
- Primary nav: Dashboard, Upload, Discover, Profile
- Clean, minimal design with active state underline

### Buttons
- Primary: Full background, medium rounded (rounded-lg)
- Secondary: Outline style
- Icon buttons: Circular with icon only
- All buttons: Smooth hover lift and slight scale

## Images

### Hero Image
Large lifestyle fashion photograph showing:
- Stylishly dressed person in trendy, coordinated outfit
- Clean, minimalist background (urban setting or studio)
- Bright, aspirational feeling
- Placement: Right side of hero section (50% width on desktop)

### Upload Zone Placeholders
- Light camera/upload icon graphics
- Optional: Example thumbnails showing clothing items

### Outfit Recommendation Cards
- AI-generated outfit combination previews (programmatically created)
- Real clothing photos from user's uploaded wardrobe
- Clean product-style photography presentation

### Style Preference Cards
- Fashion trend imagery (runway looks, street style, seasonal trends)
- High-quality editorial-style photos
- Each card represents different fashion categories

### AI Assistant Avatar
- Simple, friendly icon (sparkle or fashion-related symbol)
- Consistent throughout chat interface

## Animations

**Minimal, purposeful animations only**:
- Upload zone: Subtle pulse on drag-over
- Card hover: Slight lift (translateY)
- Chat messages: Gentle slide-in
- Loading states: Simple spinner for AI processing
- Page transitions: Smooth fade

## Accessibility

- High contrast text on all backgrounds
- Clear focus states on all interactive elements
- Alt text for all clothing images
- ARIA labels for upload zones and buttons
- Keyboard navigation support throughout