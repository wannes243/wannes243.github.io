# Automation refinement — 2026-09-09

Scope: existing AI portfolio, keeping the dark violet identity and static relative links. Visitors browse technologies, open EventPlanner, and return to the project list.

- Replaced the TuniPages asset with the supplied transparent PNG. A compact light backing keeps its original dark lettering readable; the source file is unchanged.
- Added a moving technology rail with mouse dragging, native touch scrolling and keyboard navigation. Following the user's refinement, buttons and the scrollbar are removed to match the Edge AI presentation. Automatic motion pauses on hover, rail focus, offscreen, or a hidden document. Manual browsing briefly pauses playback, which resumes once interaction and focus end. Space toggles playback while the rail is focused. Reduced motion starts paused. Without JavaScript, the original list remains scrollable.
- EventPlanner shows only the supplied award ceremony photo on its card. Both the image and project link open `project-eventplanner.html`, which displays the other team photo and preserves the repository link.

Verified with local Chromium at 1440, 390 and 320px: autoplay, pause, arrow buttons, keyboard navigation, mouse dragging, detail navigation and return link all passed. Both pages have no horizontal overflow or observed JavaScript errors. Reduced motion and no-JavaScript navigation passed separately. Desktop and mobile screenshots inspected. Fixed a narrow-screen internship grid overflow and heading margin during verification. The Impeccable detector returned no findings.

Screenshots and the interaction check script are in `C:/Users/wannes/.cache/portfolio-visual-check/`. Changes are local.

The button-free refinement was checked at 1440 and 390px: no buttons or visible scrollbar, autoplay, hover pause, keyboard browsing, automatic resumption and reduced motion all passed without JavaScript errors.
