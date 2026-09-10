# Personal life — 2026-09-10

The homepage's “Beyond the curriculum” contains a compact, fully clickable “The man behind the work” card after IEEE WIE and the NVIDIA certificate. It matches the WIE panel's midnight background, border and rounded corners. The personal story and all eight activity photos live exclusively on `who-is-wannes.html`, titled “Who is Wannes Fraj?”. This follows the user's corrected placement request. English follows the existing site. No ranks, awards, records or years of practice are claimed.

The mountain gallery has four equal square frames in a 2 × 2 grid, with Zaghouan and Rassas summit photos on the top row, then the forest and sunset photos. The spearfishing gallery has two landscape frames with the supplied marina and boat photos. MMA pairs the grappling photo with the newly supplied team photo, replacing the standing-on-the-mats image. Existing Syne/Outfit typography and midnight/cyan tokens continue on a quiet background. On mobile, each activity's text precedes its images. Top and bottom return links lead to `index.html#beyond`; the shared navigation still links to both engineering worlds and contact.

Images are local WebP exports with original proportions, explicit dimensions, lazy loading and asynchronous decoding. Content is visible by default; IntersectionObserver adds one short entrance animation per block. Reduced motion disables entrances and hover zoom. `personal-gallery.js` progressively enhances native image links with a modal HTML dialog: complete uncropped photos, per-gallery previous/next navigation, arrow keys, Escape, focus restoration and an original-image link. Without JavaScript, the original image links still work.

Verification using local Chromium / Playwright:

- Checked 320, 390, 768 and 1440px widths: three activities, all eight images loaded, equal mountain frames and summit order, no horizontal overflow.
- Verified the homepage contains only the invitation, with no activity gallery, and retains IEEE WIE.
- Verified card activation with keyboard Enter, direct page reload, browser Back and return links to the homepage section.
- Inspected real desktop and mobile viewport screenshots, including mountain and BJJ image crops.
- Photo links work with keyboard Enter; visible focus was checked.
- Verified viewer arrow keys, wraparound, close button, Escape, focus restoration, per-gallery counts and no-JavaScript image fallback.
- Content and image links remain available with JavaScript disabled.
- Entrance animation finishes visibly; reduced motion removes it.
- No observed JavaScript errors or local HTTP asset failures. `node --check script.js` passed.

## YouTube channel

A compact “Wannes World” section follows the three passions on the personal page. It introduces the user's adventure/travel videos and links to `https://www.youtube.com/@WannesFraj`, as supplied in the user's channel screenshot. The link opens a new tab with an accessible label. No subscriber/video counts or third-party embeds are used. The homepage retains only its personal-page invitation.
