Copilot Instructions – Animated Next.js Homepage
🧠 Tech Stack
Next.js (App Router)
TypeScript
Tailwind CSS
GSAP
📁 Structure (STRICT)
/types → all TypeScript types (one file per section)
/components → section-based components
/app/page.tsx → main page
⚙️ Core Rules
Always use TypeScript (no any)
Never define types inside components
One section = one component
Use GSAP for all animations
Use useRef + useEffect for animation
Clean, production-level code only
📦 Install

npm install gsap

🎬 Sections to Build
Hero
The Agency Behind
Our Services
Not Algorithm
Legacy in the Making
What’s New
Ready to Rise
Footer
🎯 Animation Behavior

Hero:

Text bottom → up
Center image scale-in
Background zoom

Agency:

Horizontal scroll (left → right)

Services:

Glass hover effect
Background image reveal

Not Algorithm:

Mouse-follow button
Custom cursor

Legacy:

Stacked cards scroll animation

What’s New:

Cursor becomes circular arrow
Image hover animation

Ready to Rise:

Scroll-based text movement (left/right)
🧩 Component Rules

Each section must include:

Separate component file
Separate types file (in /types)
Imported in page.tsx
🚫 Do NOT
No inline types
No skipping GSAP
No mixing all code in one file
No messy structure
🎯 Output Expectation
Smooth animations
Clean UI
Fully typed
Modular & scalable code
💡 Workflow

User provides section name →
Generate full component + types + GSAP animation

🔥 Goal

Build a premium animated agency website with high-end UI/UX using GSAP.
That’s it — ONLY this much you need
Nothing more. This is:
✔ Clean
✔ Copilot-optimized
✔ Not overcomplicated

🚀 Next step
Now say:
👉 "Hero section build"
I’ll give you:


Ultra clean structure


Advanced GSAP (better than before)


Full A → Z code (your rule)

