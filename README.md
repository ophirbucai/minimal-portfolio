# Develophir — Minimal Portfolio

## The Sandals-Man Walks Barefoot

There’s a saying in Hebrew: the sandals-man walks barefoot. It’s absurd, isn’t it? The person who can craft the best sandals chooses to go without. But why? Maybe it’s about initiative. Maybe it’s about understanding what it’s like to walk without them—to question whether they’re even necessary.

That’s the story here. I’ve spent years building things for others, almost three years without ever having my own website. I know what it’s like not to have one. And yet, in today’s world, without an online presence, we’re practically invisible—to recruiters, to potential collaborators. Meanwhile, information is just a click away. That’s _magical_. In some ways, it’s _wondrous_.

### Why This Exists
This website is not just a portfolio. It’s a space that represents my work, my ideas, and the things I’ve built. It’s my _digital footprint_.

#### You’ll find:

- Projects I’ve worked on, from concept to execution.
- Ideas and insights—things I’ve learned along the way.
- A reflection of how I think about building software.

#### What You Won’t Find Here

- A corporate, buzzword-filled about page.
- Overly polished marketing fluff.
- Anything that doesn’t feel like me.

    This is a place for real things—code, experiments, thoughts.<br />
    It **evolves**, just like everything else I work on.

### The Future

I’ve spent years helping others build their ideas.<br/>
Now, I’m carving out a space for mine. It starts [<u>here</u>](https://github.com/ophirbucai/minimal-portfolio).

<br/>

---

<br/>

## A modern, responsive portfolio built with Nx, React, and Vite.
#### You can find the released version here: https://develophir.com

- **Cloudflare Worker integration** for hassle-free resume updates (no rebuild needed).
- **Motion-based animations** for smooth scrolling and fading elements.
- **Radix UI** for accessible dialogs and triggers.
- **React Hook Form + Zod** for robust form handling and validation.


## Tech Stack
- **Nx**: Monorepo tooling for efficient workspace management.
- **React + Vite**: Fast development experience with modern bundling.
- **CSS Modules**: Scoped styling for maintainability.
- **Motion**: Subtle animations and transitions.
- **React Hook Form**: Lightweight form state management.
- **Radix UI**: Unstyled, accessible components.
- **Zod**: Runtime validation for form data.
- **Cloudflare Worker**: Fetches and serves the resume file independently.

## Project Structure
```
├── src
│   ├── app/                 # Main entry component (App)
│   ├── components/          # Modular, reusable UI components
│   ├── context/theme/       # Theme context & provider
│   ├── hooks/               # Custom React hooks (e.g., form, recaptcha, etc.)
│   ├── services/            # API calls & helper functions
│   ├── setupTests/          # Test setup files
│   └── main.tsx             # App entry point
├── stylelint.config.js      # Stylelint config
└── vite.config.ts           # Vite configuration (NX + React)
```

## Getting Started
1. **Clone the repository**

    ```bash
    git clone https://github.com/ophirbucai/minimal-portfolio.git
    ```
2. **Install dependencies**

    ```bash
    cd minimal-portfolio
    npm install
    ```
3. **Local development**

    ```bash
    npx nx serve 
    ## or if you have Nx installed globally, simply run:
    nx serve
    ```
4. **Open your browser**

    Visit http://localhost:4200 (or the indicated port).

## Features
- **Responsive UI**: Works great on mobile, tablet, and desktop.
- **Animated Elements**: Uses motion for subtle fade/scroll animations.
- **Seamless Resume Updates**: A Cloudflare Worker handles resume download outside the main build.
- **Accessible Dialogs**: Employs Radix UI for modal windows and triggers.
- **Robust Form Handling**: React Hook Form + Zod ensure validation and a solid user experience.

## Development Process
1. **Design & Planning**
   - Chose a minimal aesthetic to emphasize content.
   - Structured components by functionality (e.g. contact-form, hero, etc.).
   Implementation

2. **Set up Nx with React + Vite** for speed and modular structure.
   - Created context providers (e.g., theme) for global state.
   - Integrated form validation using React Hook Form + Zod.

3. **Testing & Linting**
   - Used Vitest for testing, with a few spec files (app.spec.tsx, etc.).
   - Configured Stylelint + Nx to maintain code cleanliness.

4. **Deployment**
   - Deployed the main site to Cloudflare Pages for excellent CI/CD.
   - Leveraged a Cloudflare Worker for the resume PDF, ensuring no site downtime for file updates.

--- 

**&copy; 2025 Ophir Bucai.** All Rights Reserved. [**develophir.com**](https://develophir.com)
