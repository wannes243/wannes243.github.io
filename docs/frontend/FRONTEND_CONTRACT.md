# Frontend contract

- Keep the site static and compatible with relative GitHub Pages paths.
- Use the two supplied CVs as the source for biographical and project claims. Do not invent results, employer links, badges or measurements.
- Content, downloads and contact links must work without JavaScript. Interactive controls progressively enhance the page.
- Use actual links for navigation and downloads, buttons for actions, visible keyboard focus and accessible names. Keep both world links visible on mobile; there is no modal navigation to dismiss.
- Respect reduced motion. No autoplay animation is necessary for understanding the page.
- Scope visual tokens in style.css. Preserve readable contrast, semantic heading order and sufficient touch targets.
- Before delivery, inspect real desktop/mobile screenshots and verify assets and primary actions. Record observed checks, not assumed success.
- The generated hero visual and CubeSat orbital render are conceptual illustrations, not evidence of built hardware or prediction accuracy.
- Keep Edge and Automation project lists separate. Mark the current world with aria-current on its navigation link, and keep its matching CV in both the hero and download section.
- User-requested exception: CubeSat Thermal Prediction appears in both worlds with the same image and complete project content. Its Automation detail page is `project-cubesat-ai.html`, with Automation navigation and CV; keep its project content synchronized with `project-cubesat-thermal.html`.
