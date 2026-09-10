# Homepage introduction - 2026-09-10

Scope: replace the small profile strip and separate biography with the portrait-led introduction requested in the supplied reference. Existing static portfolio for recruiters and engineering teams; visitors meet Wannes, explore one of two project domains or open the corresponding CV. Preserve the original portrait, factual student biography, shared navigation and underlying project pages. Use the existing HTML/CSS foundation with a small homepage-only enhancement.

Design: dark blue sky, sparse static stars, blue circular portrait, white greeting and a blue title cycling through Wannes Fraj, AI Engineer and Edge AI Engineer. Keep actions together and visible before the portrait on mobile. Avoid invented experience claims, clipped long titles, hidden project navigation and uncontrolled motion.

Verified locally in headless Chrome using Playwright:

- 320, 390, 768, 1024 and 1440px: no horizontal overflow; all three titles fit; expanded CV menu remains within the viewport.
- Both CV links return HTTP 200 and PDF content. Native disclosure works without JavaScript; Escape closes it and returns focus to its summary.
- Explore my work reaches #worlds below the sticky header. Both project portals navigate to their existing pages; browser Back returns to the homepage.
- Title rotation, pause and resume work. Enabling reduced motion at runtime hides the control and restores the static name. Static identity, CV access and project anchor work without JavaScript.
- No observed JavaScript errors or failed local asset responses in the viewport/navigation checks. JavaScript syntax and git diff whitespace checks pass.
- Desktop, 390px, 320px and the longest desktop title screenshots captured in previews/homepage-intro-*.png. Desktop and mobile screenshots visually reviewed; narrow-screen button spacing adjusted to keep the two principal actions together.

Checks cover this introduction and its navigation, not a new full-site accessibility audit.
