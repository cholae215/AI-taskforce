# AI Taskforce Platform — Design System & UI/UX Specification (`design.md`)

This document defines the comprehensive visual language, design tokens, component architecture, and interaction patterns for the **AI Taskforce / AI Product Landing Page**, derived directly from [ai_website_development_blueprint.md](file:///c:/Users/Cho%20Lae%20Lae%20Yin/Downloads/aitaskforce/ai_website_development_blueprint.md).

---

## 1. Design Vision & Guiding Principles

### 1.1 Brand Identity & Ethos
* **Core Mission:** "Next-Generation AI for Local Context & Global Reach."
* **Aesthetic Metaphor:** *Illuminated Deep Space* — an ultra-deep obsidian background punctuated by precise, bioluminescent neon accents (Electric Indigo and Bio Emerald).
* **Tone & Voice:** Authoritative yet accessible, precision-engineered, culturally grounded, and privacy-centric.

### 1.2 Core Design Tenets
1. **Intelligence with Depth:** Avoid flat surfaces; utilize layered elevation, frosted glass (glassmorphism), and ambient radial illumination to indicate computational power.
2. **Trust & Transparency:** High visual hierarchy on privacy indicators, real-time metrics (latency, token speed), and ethical model boundaries.
3. **Hyper-Legibility:** Deep dark backgrounds paired with high-contrast typography (slate-50 to slate-400), ensuring effortless readability across code, interactive widgets, and technical prose.
4. **Responsive Fluidity:** Kinetic feedback on every interactive element using gentle springs and glowing borders rather than aggressive jarring transitions.

---

## 2. Color Palette & Token Architecture

The color system is optimized for high-contrast dark mode (`#0A0A0C`), paired with luminous indigo and emerald accents.

### 2.1 Surfaces & Canvas (Dark Neutrals)

| Token Name | Hex Code | Tailwind Equivalent | Role / Usage |
| :--- | :--- | :--- | :--- |
| `surface-canvas` | `#0A0A0C` | `bg-[#0A0A0C]` | Primary page background; deep void |
| `surface-subtle` | `#0F1015` | `bg-slate-950/80` | Secondary backdrops, table alternates |
| `surface-card` | `#13141B` | `bg-slate-900/60` | Interactive card surfaces with glass effect |
| `surface-elevated` | `#1A1B24` | `bg-slate-800/50` | Modals, flyout menus, hovered cards |
| `surface-glass` | `rgba(255, 255, 255, 0.03)` | `bg-white/[0.03]` | Glassmorphic overlays with backdrop blur |
| `border-subtle` | `rgba(255, 255, 255, 0.07)` | `border-white/[0.07]` | Hairline borders for structure |
| `border-hover` | `rgba(99, 102, 241, 0.35)` | `border-indigo-500/35`| Active & hovered card boundaries |

### 2.2 Brand & Neon Accents

| Token Name | Hex Code | Tailwind Class | Psychological Function |
| :--- | :--- | :--- | :--- |
| `brand-indigo-primary` | `#6366F1` | `text-indigo-500` / `bg-indigo-600` | Primary CTA, focus state, intellect & power |
| `brand-indigo-light` | `#818CF8` | `text-indigo-400` | Headline gradient stop, glowing tags |
| `brand-emerald-primary` | `#10B981` | `text-emerald-500` / `bg-emerald-500` | Real-time status, growth, privacy badges |
| `brand-emerald-glow` | `#34D399` | `text-emerald-400` | Gradient stop, live pulse dot, success feedback |
| `accent-cyan` | `#06B6D4` | `text-cyan-400` | Secondary data point, streaming token highlight |
| `accent-amber` | `#F59E0B` | `text-amber-400` | Latency / warning indicator, beta tags |

### 2.3 Typography & Text Shades

| Token Name | Hex Code | Tailwind Class | Contrast Role |
| :--- | :--- | :--- | :--- |
| `text-primary` | `#F8FAFC` | `text-slate-50` | Headings, hero display, button labels |
| `text-secondary` | `#94A3B8` | `text-slate-400` | Subtitles, descriptions, standard body text |
| `text-muted` | `#64748B` | `text-slate-500` | Captions, metadata, inactive links |
| `text-accent-gradient` | Gradient | `from-indigo-400 to-emerald-400` | Key hero highlights & milestone markers |

---

## 3. Typography Hierarchy

### 3.1 Font Families
* **Primary (Display & Body):** `Inter`, `Plus Jakarta Sans`, or `Geist Sans`
  * *Characteristics:* High x-height, clean geometry, exceptional legibility at small sizes.
* **Monospace (Code, Terminal, Prompts, Metrics):** `JetBrains Mono` or `Geist Mono`
  * *Characteristics:* Tabular numbers, crisp ligatures, ideal for tokens and API snippets.

### 3.2 Type Scale Specification

```
Display Large (Hero H1)  ─── 48px to 64px (3.5rem to 4.0rem)  ─── font-extrabold ─── tracking-tight ─── line-height: 1.1
Section Title (H2)       ─── 30px to 36px (2.0rem to 2.25rem) ─── font-bold      ─── tracking-tight ─── line-height: 1.2
Feature Title (H3)       ─── 20px to 24px (1.25rem to 1.5rem) ─── font-semibold  ─── tracking-normal─── line-height: 1.3
Card Heading (H4)        ─── 16px to 18px (1.0rem to 1.125rem)─── font-semibold  ─── tracking-normal─── line-height: 1.4
Body Large (Lead Intro)  ─── 18px to 20px (1.125rem to 1.25rem)── font-normal   ─── text-slate-400 ─── line-height: 1.6
Body Regular             ─── 14px to 16px (0.875rem to 1.0rem) ── font-normal   ─── text-slate-400 ─── line-height: 1.6
Caption / Monospace      ─── 12px to 13px (0.75rem to 0.8125rem)─ font-mono     ─── text-slate-500 ─── tracking-wide
Badge / Chip Text        ─── 12px (0.75rem)                   ─── font-medium    ─── uppercase       ─── tracking-wider
```

---

## 4. Spacing, Elevation & Glassmorphism

### 4.1 Grid & Layout Bounds
* **Max Container Width:** `max-w-7xl` (`1280px`) with fluid side gutters (`px-6 sm:px-8 lg:px-12`).
* **Content Reading Width:** `max-w-3xl` (`768px`) for titles, subtitles, and documentation excerpts.
* **Vertical Section Rhythms:**
  * Hero Section: `py-20 md:py-32`
  * Standard Content Sections: `py-16 md:py-24`
  * Compact Modules / Footers: `py-12 md:py-16`

### 4.2 Elevation & Shadow Layers

| Level | Tailwind Shadow Style | Border Treatment | Application |
| :--- | :--- | :--- | :--- |
| **Layer 0 (Base)** | None | None | Page Canvas (`#0A0A0C`) |
| **Layer 1 (Subtle)** | `shadow-sm` | `border border-white/[0.06]` | Static cards, secondary pills |
| **Layer 2 (Elevated)** | `shadow-lg shadow-black/40` | `border border-white/[0.10]` | Interactive cards, code sample box |
| **Layer 3 (Glow Aura)** | `shadow-xl shadow-indigo-500/20` | `border border-indigo-500/30` | Active cards, primary CTA buttons |
| **Layer 4 (Modal/Popover)** | `shadow-2xl shadow-black/80 backdrop-blur-xl` | `border border-white/[0.15]` | Dropdowns, mobile menu, modals |

### 4.3 Ambient Background Glows (Backdrop Mesh)
To reproduce the AI neon aesthetic:
* **Indigo Nebula Glow:** An absolute circular div placed behind the Hero:
  ```html
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
  ```
* **Emerald Ambient Spill:** A subtle accent spill placed under the interactive playground and feature matrix:
  ```html
  <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />
  ```

---

## 5. UI Component Design Specifications

Derived from Section 2 & 3 of the blueprint:

```
[ 1. Header / Navbar ]
       │
[ 2. Hero Section (Badge + H1 Gradient + Subtitle + Dual CTA) ]
       │
[ 3. Trust & Social Proof Marquee ]
       │
[ 4. Core Capabilities (3-Card Bento Matrix) ]
       │
[ 5. Interactive Model Architecture & Playground ]
       │
[ 6. Roadmap Timeline (Phase 1-3) ]
       │
[ 7. Footer (Links, Socials, Status Beacon) ]
```

---

### 5.1 Header / Sticky Navbar
* **Layout:** Fixed or sticky top bar with `backdrop-blur-md bg-[#0A0A0C]/75 border-b border-white/[0.08]`.
* **Components:**
  * **Brand Logo:** `[ AI Taskforce / Product ]` with an emerald micro-dot beacon.
  * **Nav Links:** `Features`, `Models`, `Roadmap`, `Docs` with subtle `text-slate-400 hover:text-white` transition.
  * **Action CTA:** Pill button `[ Launch App → ]` (`bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg`).
  * **Mobile:** Responsive hamburger icon expanding into a frosted glass drawer.

---

### 5.2 Hero Section

```
+--------------------------------------------------------------------------+
|                                                                          |
|         [  ●  Next-Gen AI Platform (Pill Badge with Pulse Dot)  ]        |
|                                                                          |
|       Building Intelligent Tools for Real-World Impact (Gradient)       |
|                                                                          |
|   Empowering communities and businesses through tailored, responsible     |
|             artificial intelligence solutions.                           |
|                                                                          |
|       [ Try the Model → ] (Primary)      [ View Documentation ] (Ghost)  |
|                                                                          |
|                  ✦ Ultra-low Latency   ✦ Privacy-First                   |
+--------------------------------------------------------------------------+
```

* **Badge:** Rounded-full pill (`bg-indigo-500/10 border border-indigo-500/20 text-indigo-400`). Houses an animated pulsating circle dot (`animate-pulse bg-indigo-400`).
* **H1 Title:** Dual-tone gradient styling:
  * White text for the base headline.
  * Gradient `bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-emerald-400` for impactful keywords (*"Real-World Impact"*).
* **CTA Button Group:**
  * **Primary:** `bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 rounded-lg px-6 py-3 font-medium transition-all transform hover:-translate-y-0.5`.
  * **Secondary:** `bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60 rounded-lg px-6 py-3 font-medium transition-all`.

---

### 5.3 Social Proof & Trust Marquee
* **Style:** Semi-transparent horizontal ticker showcasing research partners, local language initiatives, and enterprise early adopters.
* **Metrics Counter Strip:**
  * `<15ms` Median Inference Latency
  * `100%` Privacy-Guaranteed Boundary
  * `40+` Regional Languages & Dialects Supported
  * `99.98%` Platform Uptime

---

### 5.4 Core Features: The 3-Card Bento Matrix

Based on Section 3 of the blueprint:

```
+--------------------------+--------------------------+--------------------------+
| 1. Bilingual & Contextual| 2. Real-Time Processing  | 3. Privacy-First         |
|                          |                          |                          |
| [ Language Switcher UI ] | [ <12ms Latency Wave ]   | [ Zero-Data Retention ]  |
| Culturally accurate LLMs | Ultra-low latency edge   | End-to-end encryption &  |
| trained on domain-       | inference with streaming | customizable data        |
| specific datasets.       | token pipelines.         | residency controls.      |
|                          |                          |                          |
| [ Learn More → ]         | [ Benchmark Data → ]     | [ Compliance Docs → ]    |
+--------------------------+--------------------------+--------------------------+
```

1. **Card 1: Bilingual & Contextual LLMs**
   * *Visual Element:* Interactive language toggle demo (`English ⇄ Local Dialect`) showing contextual semantic preservation.
   * *Accent:* Indigo highlight border on hover.
2. **Card 2: Real-Time Processing**
   * *Visual Element:* Miniature animated waveform or live ping badge (`< 12ms Edge Response`).
   * *Accent:* Cyan & Emerald dual-colored streaming indicator.
3. **Card 3: Privacy-First Governance**
   * *Visual Element:* Cryptographic shield icon, "Local Air-Gap Ready" badge, transparent audit pipeline visual.
   * *Accent:* Emerald security badge (`border-emerald-500/30 text-emerald-400 bg-emerald-500/10`).

---

### 5.5 Interactive Model Playground / Terminal Component
* **Purpose:** Showcase model agility, instant responses, and developer friendliness right in the landing page.
* **Design Layout:**
  * Top bar mimicking an IDE / Terminal window: Three macOS-style window dots (Red, Yellow, Green), model selector dropdown (`taskforce-v1-multilingual`), latency badge (`18ms`).
  * Two-column split or stacked query-response card:
    * Left / Top: Interactive prompt box with preset prompt chips.
    * Right / Bottom: Streaming token output container with syntax-highlighted code and natural language translation.
  * Border glow: Subtle pulsing `border-indigo-500/20` transitioning to `border-indigo-500/40` when focused.

---

### 5.6 Development Roadmap Timeline

Visual translation of the blueprint's 3-phase roadmap:

```
    [ Phase 1: Foundation ]          [ Phase 2: Expansion ]            [ Phase 3: Scale ]
       (Status: Complete)              (Status: In Progress)          (Status: Target Q4)
              ●                                  ●                              ●
              │                                  │                              │
    ├── Core Model Training            ├── Multi-Modal Fine-Tuning    ├── Enterprise Deploy
    └── API Integration                └── Community Workshops        └── Open-Source Tools
```

* **Timeline Line:** Subtle dashed gradient line connecting phases (`from-emerald-500 via-indigo-500 to-slate-700`).
* **Phase Markers:**
  * **Complete (Phase 1):** Solid emerald dot with checkmark, emerald glow badge.
  * **Active (Phase 2):** Pulsing indigo node with halo ring, current milestone tag.
  * **Upcoming (Phase 3):** Frosted slate badge with projected roadmap targets.

---

### 5.7 Footer Component
* **Grid:** 4-column layout:
  * Column 1: Brand Logo, mission statement ("Empowering communities through responsible AI"), copyright.
  * Column 2: Platform Links (`Features`, `Models`, `Benchmarks`, `Changelog`).
  * Column 3: Resources & Docs (`API Reference`, `Community Grants`, `Research Papers`).
  * Column 4: Newsletter / Early Access input field with embedded submit button.
* **System Status Indicator:** Bottom badge showing a steady green dot: `"All Model Endpoints Operational (99.98%)"`.

---

## 6. Motion & Micro-Interaction Guidelines

All animations must utilize **Framer Motion** or hardware-accelerated CSS transitions for maximum 60fps performance.

### 6.1 Transition Presets

```typescript
// Framer Motion Standard Springs & Transitions
export const transitions = {
  springSmooth: { type: "spring", stiffness: 260, damping: 20 },
  springSnappy: { type: "spring", stiffness: 400, damping: 30 },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  }
};
```

### 6.2 Micro-Interactions
* **Button Tap Feedback:** `whileTap={{ scale: 0.98 }}` with instant response.
* **Card Hover:** Smooth vertical translation `translate-y-[-4px]` coupled with `border-indigo-500/40` and dynamic inner radial glow following the cursor.
* **Beacon Pulse:** 2-second infinite ease ping for online service indicators and status lights.

---

## 7. Tailwind CSS Configuration Spec (`tailwind.config.ts`)

To implement this design system seamlessly, configure `tailwind.config.ts` with these extended design tokens:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0A0A0C',
          subtle: '#0F1015',
          elevated: '#13141B',
          card: '#181920',
        },
        brand: {
          indigo: {
            DEFAULT: '#6366F1',
            hover: '#4F46E5',
            light: '#818CF8',
            dim: 'rgba(99, 102, 241, 0.12)',
          },
          emerald: {
            DEFAULT: '#10B981',
            glow: '#34D399',
            dim: 'rgba(16, 185, 129, 0.12)',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.3)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 8. Accessibility (a11y) & UX Standards

* **Contrast Ratio:** All primary text (`#F8FAFC`) against canvas (`#0A0A0C`) achieves a **17.8:1** contrast ratio, surpassing the WCAG AAA requirement (7:1).
* **Keyboard Navigation:** High-visibility focus ring on all buttons and inputs: `focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black`.
* **Reduced Motion:** All Framer Motion and CSS keyframe animations must respect user preferences via `@media (prefers-reduced-motion: reduce)`.
* **Semantic HTML:** Strict structure utilizing `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks for complete screen reader compatibility.

---

## 9. Alignment with Project Blueprint

| Blueprint Requirement (`ai_website_development_blueprint.md`) | Design Spec Implementation (`design.md`) |
| :--- | :--- |
| **Dark Mode Neutral (`#0A0A0C`)** | Defined as `canvas.DEFAULT` and layered through 4 surface depths. |
| **Neon Accents (`#6366F1`, `#10B981`)** | Electric Indigo for primary CTAs/badges; Bio Emerald for status/roadmap. |
| **Key Features (Bilingual, Real-time, Privacy)** | Detailed 3-card Bento Grid with interactive UI widgets & badges. |
| **Roadmap (Phase 1, 2, 3)** | Interactive connected timeline with complete, active, and planned nodes. |
| **Framer Motion + Tailwind Sample** | Complete spring configurations, hover transitions, and Tailwind config extension. |
