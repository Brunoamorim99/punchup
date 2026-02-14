# punchup
Project OverviewI am upgrading my portfolio from a static layout to a high-motion interactive experience. 
The "punch-up" focuses on three core functional components inspired by high-end design portfolios: a dynamic pre-loader, an interactive process-reveal gallery, and a high-inertia vertical scroll system.

Objective & ImpactThis work enhances my portfolio by transforming it into a live demonstration of my front-end and UX/UI bridging skills. 
Instead of just showing finished products, the "Hover-to-Process" feature immediately validates my design methodology,
while the motion system proves technical competency in animation and performance.

Features
The Energy Bar (Pre-loader): A minimalist charging bar that tracks the site’s readyState. 
This establishes a "tech-forward" brand identity the moment a user lands on the page.
Process-Reveal Hover: Project thumbnails will cycle through process images upon hover. 
This allows recruiters to see the depth of projects like Panday and Aidile without extra clicks.
Vertical Inertia Carousel: A full-screen project navigation where the background imagery and project titles move at different speeds, creating a premium parallax feel.

Implementation PlanLo-fi Concept: A split-screen layout where the left side holds fixed project typography and the right side scrolls through large-scale imagery with smooth-scroll snapping.
Resources: GSAP (GreenSock) for high-inertia motion and scroll-triggering; Framer Motion for hover-state image cycling; existing project assets from BCIT coursework.Technical Risks (FUD)Performance: Loading multiple process images for hover states could impact page speed. I will mitigate this with aggressive image optimization and lazy loading.Mobile UX: High-inertia scrolling can feel like "scroll-jacking" on touchscreens. I plan to implement a simplified, gesture-based fallback for mobile devices to ensure accessibility.
