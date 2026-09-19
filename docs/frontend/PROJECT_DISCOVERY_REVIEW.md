# Portfolio review and corrections — 19 September 2026

## Scope and method

The request was to replace the abstract gateway heading with a clear projects entry, improve its visibility and correct observed portfolio problems. Skills applied: UI/UX, Impeccable, Frontend Design and UI/UX Pro Max. Impeccable's design and technical assessments ran independently in two agents. The design assessment covered the homepage, both domain routes, personal page and EventPlanner at desktop/mobile sizes. The technical assessment covered all 12 HTML routes, local links and fragments, browser errors, automated accessibility, responsive layout and key interactions.

The portfolio is distinctive through its real portrait, project photography, separate engineering disciplines and dark robotics imagery. The main weakness was how long visitors had to scroll before seeing recognizable project content. The reported 80% visitor figure was not independently verified; no analytics data was available.

## Findings and completed fixes

| Priority | Finding | Correction |
|---|---|---|
| P1 | “One mind. Two worlds.” did not identify project content. | Replaced with “My projects”; both panels now name actual work and link directly to project sections. |
| P1 | Domain routes placed technology inventories before the projects. | Moved projects before technologies on both routes; Automation also places projects before its internship. |
| P2 | The homepage introduction and large mobile portrait pushed projects beyond the first screen. | Shortened introduction, reduced spacing and placed the mobile portrait beside the identity. Added a prominent Projects navigation link. |
| P2 | EventPlanner mobile put a tall photograph before its outcome and explanation. | Moved factual outcome/workflow text earlier in DOM order; retained desktop two-column composition. |
| P2 | Neural background details competed with EventPlanner prose. | Strengthened the reading backdrop while retaining the original image. |
| P2 | Useful metadata and technology tags were often 9–10px. | Increased project tags, education dates, experience labels and case facts to 12px; retained wrapping. Increased text-link touch areas. |
| P3 | Two project screenshots required about 937KB. | Added lossless WebP display copies totaling about 523KB, a 44% reduction; original PNG download links remain. |

Additional consistency fixes: homepage social metadata now matches the English page language; project category headings use h3 beneath the section h2; obsolete gradient-heading styling removed. No new project outcomes or credentials were invented.

## Measured discoverability

Positions are CSS pixels from the document top, after font loading. They describe layout, not conversion rates.

| Measurement | Before | After |
|---|---:|---:|
| Homepage projects heading, 1440px wide | 808 | 506 |
| Homepage projects heading, 390px wide | 1,142 | 569 |
| Homepage domain heading/panel, 1440px wide | Heading at 1,396 | Panel begins at 622 |
| Homepage domain heading/panel, 390px wide | Heading at 1,572 | Panel begins at 698 |

The projects heading is also visible at 320×640, around y=575. Homepage panels now take visitors directly to project evidence rather than another introductory screen.

## UX judgment

The initial independent design review scored 16/24 on six applicable Nielsen heuristics. After corrections, the implementation review scores 21/24. These are qualitative judgments, not automated accessibility or usability-study results.

| Applicable heuristic | Before | After |
|---|---:|---:|
| Visibility of current location | 3 | 3 |
| Familiar, concrete vocabulary | 2 | 4 |
| User control and navigation | 4 | 4 |
| Consistency | 3 | 3 |
| Recognition and discoverability | 2 | 4 |
| Focused visual hierarchy | 2 | 3 |

Error prevention, advanced workflow efficiency, error recovery and help systems were not scored because this portfolio has no comparable transactional flow. Cognitive load is reduced by removing repeated introductions from the route to projects. The personal narrative, direct CV access and contact paths remain strengths.

For a recruiter, concrete project names and direct project links now appear early. For a first-time visitor, “Projects” replaces an ambiguous metaphor. On mobile, the introduction no longer needs a separate large portrait block before the work begins. The journey retains its personal opening and reaches evidence sooner. The design question guiding the correction was whether a visitor can identify relevant work and open it within seconds.

## Verification and practical limits

Final independent technical checks covered 12 routes at 1440, 390 and 320px: no missing local paths/fragments, horizontal page overflow, uncaught JavaScript errors, failed requests, broken loaded images or axe-core WCAG 2/2.1 A/AA violations. This is automated coverage, not comprehensive accessibility certification. CV disclosure/Escape, clipboard feedback, photo gallery keyboard navigation/focus restoration and reduced motion passed.

Project-discovery checks at 1440, 768, 390 and 320px verified heading placement, visible project navigation, unobscured anchor targets, correct domain destinations, project-first section order and EventPlanner's mobile reading order. Desktop/mobile screenshots were inspected. Dedicated stack checks confirmed scroll overlap, covering and focus recovery at 1440/390/320px, plus all five cards and links reachable without JavaScript and with reduced motion.

The source of the earlier gradient-text detector warning was overridden by solid CSS and has now been removed. Color/style heuristics and closed-CV-menu occlusion warnings were not treated as proven defects. Two transient failed image requests during server startup were rechecked successfully.

Remaining observations: the optional generative-art page intentionally loads local p5; replacing its runtime would be a separate change. External destinations and real-user performance/conversion metrics were not audited. The existing rotating identity respects reduced motion, and user-requested experience/certification scroll stacks remain.

## Subsequent user adjustment

After this review, the user explicitly requested both skill categories on the homepage before My projects. Two compact horizontal rows now occupy that position, with the 17 robotics and 21 AI technologies reused from the respective domain pages. The first-screen coordinates above describe the review version before this requested insertion. The prominent Projects header/hero links remain. Follow-up checks at 1440/390/320px confirmed the order, two non-wrapping lists, native scrolling, keyboard focus, no horizontal page overflow, operation without JavaScript and a clean automated accessibility check of the new section.
