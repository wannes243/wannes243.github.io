# World entry motion

User-requested experiment on the two world landing pages only. Preserve the existing wallpaper assets, content, links and page layout.

- Edge AI: temporary SVG layers split the existing image between the fingertips. Each hand starts 100 source pixels farther away and moves inward over 2.6 seconds. Feathered edges soften the split; a cyan contact glow and a crossfade return to the original image by 2.9 seconds.
- AI & Automation: the hand starts 160 source pixels left and 26 pixels below its final position, then approaches the stationary brain over 2.8 seconds. The contact glow starts at 2.2 seconds, followed by current flowing from the fingertip into the brain and outward to the network nodes. A final crossfade restores the exact original image; temporary layers are removed at 4.9 seconds. Feathered SVG masks reuse the source image, with artwork below the readability overlay and electrical effects above it.
- The images are not regenerated or modified. SVG framing matches desktop cover and mobile contain/scaling. All animation layers sit behind content, ignore pointer events, and are hidden from assistive technology.
- `background-motion.js` waits for the existing image to decode, plays once, removes temporary layers and listeners after completion, and pauses playback when the document is hidden. Reduced motion and JavaScript-disabled visits retain the static originals.

Checked in Chromium at 1440 and 390px for both routes: animated transforms/current positions change, layers clean up, no horizontal overflow or JavaScript errors, static fallbacks work. Reviewed beginning/mid-sequence screenshots on desktop and mobile. The source hands initially showed a hard seam; feathered masks corrected it. The current is composited above the darkening overlay for visibility, while remaining below page content.

Files: `background-motion.js`, `background-motion.css`, and the two landing-page includes. Local check script and screenshots: `C:/Users/wannes/.cache/portfolio-visual-check/check-background-motion.cjs`.

Neural approach refinement verified in Chromium at 1440 and 390px: the hand moves while the brain remains fixed, electrical overlays stay invisible during the initial approach and appear near contact, and both SVG layers are removed after completion. No horizontal overflow or JavaScript errors. Reduced-motion startup, changing the preference during playback, JavaScript-disabled fallback, and the Edge entry sequence passed. Start/contact/current screenshots reviewed. Local verification: `C:/Users/wannes/.cache/portfolio-visual-check/check-neural-approach.cjs`.
