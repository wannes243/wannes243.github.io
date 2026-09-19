# Wannes Fraj — two worlds

The user's visual reference is https://cstam.ieee.tn/. Inspected the rendered site: midnight background, cyan/violet light, dimensional forms, large Syne typography and luminous rounded actions. This direction supersedes the earlier pale-blue design. Original portfolio content and artwork are used; no CSTAM logos, assets or code are copied.

Primary task: choose Edge AI & Robotics or AI & Automation immediately on arrival, then explore a dedicated portfolio and download the relevant CV. The header keeps both worlds visible with the current world marked. These are real page links, so direct links, refresh, browser history and no-JavaScript navigation work naturally.

Palette: midnight #090b1b, panel #11162c, text #f5f5ff, muted #abb0ca, Edge cyan #62e3ed, Automation violet #b4a0ff. Display: Syne 600/700. Body: Outfit 400/500. Utility: system monospace. Dimensional Higgsfield artwork represents hardware and neural computation; it is conceptual, not evidence of built hardware.

Layout: an immediate two-world gateway, then shared biography and contact. Dedicated worlds have a thematic hero, selected projects, relevant experience, focused technical stack, CV download, contact and a link to the other world. Mobile keeps both world links visible above vertically stacked gateway panels.

Motion: short entrance and hover transitions, disabled under reduced motion. Seeded star canvas is static and redraws only on resize. No loading intro, forced scroll, cursor replacement or autoplay video delays access to the work.

Critique: a palette swap would not satisfy the requested separation. The implementation separates the routes, content, calls to action and CVs, while retaining one personal identity. Typography and atmosphere draw from the supplied reference; the two-world information architecture belongs to this portfolio.


## Homepage introduction - 2026-09-10

The user rejected the added blue sky, waving-hand emoji and rounded typography. The homepage introduction is transparent over the existing full-page robotics/AI artwork; no extra sky, stars or emoji. A shared 38% dark tint supports contrast while leaving the illustration visible. Mobile crops the same image toward the neural side.

The homepage uses locally hosted IBM Plex Sans for display and body, with Segoe UI/Arial fallbacks and font-display swap. Greeting: 400 weight at 62% of the headline; identity: 600 at 31-62px, tracking -0.035em; prose: 16-17px with 1.75 line height. Other routes retain their existing typography. The title still rotates between Wannes Fraj, AI Engineer and Edge AI Engineer with reduced-motion support and no visible pause button, as requested by the user. The overlapping title grid permits wrapping without changing its reserved height.

Actions use restrained blue, 8px corners and no glow. The original portrait has a fine neutral ring. Primary action: Explore my work to #worlds; secondary: native CV disclosure with both existing PDFs. No new factual claims. The user reviewed the local version and authorized pushing this refinement after removal of the title pause button.


## WF monogram - 2026-09-10

User confirmed retaining WF while adopting the supplied Mc reference style: compact angular lettering, diagonally offset, silver W and muted blue F on a transparent background. The shared vector in assets/favicon.svg is used for all header/footer monograms and favicons. No enclosing square and no font dependency. Preserve the visible Wannes Fraj wordmark and its accessible link name.

## Project discovery refinement - 2026-09-19

The homepage now explicitly leads visitors toward My projects, replacing One mind. Two worlds. The existing portrait, IBM Plex Sans, robotics wallpaper, rotating identity and separate domain routes remain. The introduction is compact; on mobile, the portrait sits beside the identity. A prominent Projects link stays in the header alongside both domain links. The two homepage panels name actual projects and link directly to each route's #projects section.

On both domain routes, projects precede technologies. Automation follows with experience, technologies and CV. EventPlanner puts its existing outcome and explanation before the photo in mobile reading order, retaining desktop columns. Useful metadata and project tags use at least 12px. Experience/certification scroll stacks retain the user-requested overlap behavior.

This update supersedes earlier descriptions of a skills-first journey and the oversized gateway. See PROJECT_DISCOVERY_REVIEW.md for findings, corrections and verification.

## Homepage skills ordering - user correction, 2026-09-19

The homepage now shows Skills & technologies between the compact introduction and My projects. Edge AI & Robotics occupies the first horizontal row (17 existing technologies); AI & Automation occupies the second (21 existing technologies). Each row keeps its icons and text on one line with native horizontal scrolling, keyboard focus and no JavaScript requirement. Mobile labels sit above their respective single-line rails. Full skill sections remain on their domain pages. This explicit ordering supersedes the immediately-adjacent introduction/projects layout in the preceding review; its prior first-screen project coordinates are historical.

## Moving homepage skill rows - user correction, 2026-09-19

Both homepage skill rows now move continuously and independently, matching the earlier domain skill rails. home-skills.js adds seamless loops with mouse dragging, native touch/trackpad scrolling and Left/Right/Home/End keyboard navigation. Hover/focus and manual interaction pause motion; Space allows explicit pause/resume. Rows stop when offscreen or the document is hidden. Reduced motion shows only the original items with manual browsing. Without JavaScript, the same two single-line lists remain natively scrollable. Browser checks passed for both automatic loops, independent hover pause, dragging, keyboard navigation, Space, offscreen pause, touch swipes and reduced-motion fallback.

### Project illustration sizing — user correction, 2026-09-19
The robot must be prominent as well as fully visible. Project cards now reserve 40% of their width for artwork on large screens and use a 200px artwork banner above the text below 1000px. The original robot image is framed at 1.7 scale with contain sizing; only surrounding empty background is clipped. Checked subject bounds and page overflow at 1440, 1024, 800, 390 and 320px; inspected desktop and mobile screenshots.

### Curated skill rows ? user correction, 2026-09-19
Homepage logos are now 64px with labels below, generous horizontal spacing, and a heading above each moving row. Preserve transparent presentation and manual navigation.
The featured lists contain 17 unique technologies rather than 38 entries: Robotics = ROS 2, Gazebo, OpenCV, C++, ESP32, PlatformIO, MATLAB, MQTT; AI & Automation = Python, PyTorch, LangChain, LangGraph, MCP, n8n, Ollama, FastAPI, Docker. This is an editorial assignment for this portfolio, not a claim that tools belong exclusively to one discipline. Secondary utilities and overlapping frameworks are omitted from the featured rails; project descriptions and the expandable detailed toolkits retain context. The domain-page featured rails use the same selections.
Verified 8/9 original items, no cross-domain duplicates, automatic movement, keyboard browsing and no page overflow at 1440, 390 and 320px. Inspected desktop/mobile screenshots with reduced motion; checked both domain-page counts without JavaScript.

### Centralized skills and compact navigation ? user correction, 2026-09-20
Skills now appear only on the homepage. Removed both domain-page skill sections, including their expandable toolkits; their Technologies links lead to index.html#skills. Restored Apache Kafka to Edge AI & Robotics and Kubernetes to AI & Automation, for 9 and 10 unique entries respectively.
Each homepage rail gains one small right arrow with a 44px hit area. Native scrollbars are hidden only with enhancement; dragging, swiping, keyboard navigation and automatic motion remain. In reduced motion the button returns to the start after reaching the end. Without JavaScript native scrollbars remain available.
The AI project illustration uses an inline SVG viewport and explicit clipping to show only the violet artwork from the existing two-part source image. No generated or modified raster asset is required.
Checked arrow advancement, unique technology counts, hidden enhanced scrollbars, page overflow and JavaScript errors at 1440, 800, 390 and 320px. Verified both domain skill sections were removed and their links reach the homepage; inspected desktop/mobile artwork and mobile navigation screenshots.
