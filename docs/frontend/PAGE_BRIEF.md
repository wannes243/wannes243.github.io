# Page brief — two engineering worlds

- Stage: existing portfolio, user-requested visual and information-architecture redesign.
- Users: technical recruiters, engineering teams and internship supervisors.
- Primary task: choose an engineering domain, assess its projects and download the corresponding CV.
- Entry: index.html, a personal introduction with rotating engineering titles and an original portrait, followed by the two-world gateway. No mixed project feed at the entrance.
- First decision: explore the work or view a domain-specific CV; project exploration then offers Edge AI & Robotics versus AI & Automation.
- Edge route: edge-ai.html. Smart Home Shutters, CubeSat, existing additional robotics projects; Enova experience; perception/robotics/embedded stack; Edge AI CV.
- Automation route: ai-automation.html. EventPlanner, Bicycle Demand Forecasting; Tunipage experience; agents/ML/MLOps stack; AI & MLOps CV.
- Shared identity: biography, education and IEEE volunteering on the gateway; direct contact in every world.
- Success: clear domain separation, a working route to projects and a working relevant CV download.
- Recovery: persistent world links, a back-to-gateway link, browser Back support and a cross-world action at the bottom.
- Mobile primary action: choose a world using the visible header links or the large panels; download its CV.
- Temperament: immersive, dimensional, technical; inspired by the user's CSTAM reference.
- Foundation: semantic HTML, shared custom CSS, small progressive JavaScript. Native links rather than a JavaScript-only view switcher.
- Risks: mixing project categories, returning to the wrong world, hiding world choice behind a mobile menu, low contrast, excessive motion or decorative assets that delay real content.
- Verification: all three pages at 320/390/768/1024/1440px, actual world navigation and browser history, direct reload, projects isolated by route, correct CVs, keyboard access, no-JS, reduced motion, axe checks and real screenshots.

Claims remain sourced from root cv IA.pdf and cv edga ia.pdf. Autonomous Vehicle Navigation and Intelligent Mobile Manipulator are preserved from the original portfolio, not invented from the new CVs. CubeSat is presented in the Edge AI world because of its physical orientation/thermal application; it remains in both supplied PDF originals.

## Revised entry and journey - 2026-09-19

The user prioritized immediate project discoverability. Entry is now a compact identity hero followed by My projects, with a persistent Projects header link. Domain panels describe real work and open the relevant #projects anchor. Project categories remain separate. Both domain routes show projects before technology inventories. See PROJECT_DISCOVERY_REVIEW.md for verified positions and audit coverage.

## Homepage skills ordering - user correction, 2026-09-19

The homepage now shows Skills & technologies between the compact introduction and My projects. Edge AI & Robotics occupies the first horizontal row (17 existing technologies); AI & Automation occupies the second (21 existing technologies). Each row keeps its icons and text on one line with native horizontal scrolling, keyboard focus and no JavaScript requirement. Mobile labels sit above their respective single-line rails. Full skill sections remain on their domain pages. This explicit ordering supersedes the immediately-adjacent introduction/projects layout in the preceding review; its prior first-screen project coordinates are historical.

## Moving homepage skill rows - user correction, 2026-09-19

Both homepage skill rows now move continuously and independently, matching the earlier domain skill rails. home-skills.js adds seamless loops with mouse dragging, native touch/trackpad scrolling and Left/Right/Home/End keyboard navigation. Hover/focus and manual interaction pause motion; Space allows explicit pause/resume. Rows stop when offscreen or the document is hidden. Reduced motion shows only the original items with manual browsing. Without JavaScript, the same two single-line lists remain natively scrollable. Browser checks passed for both automatic loops, independent hover pause, dragging, keyboard navigation, Space, offscreen pause, touch swipes and reduced-motion fallback.
