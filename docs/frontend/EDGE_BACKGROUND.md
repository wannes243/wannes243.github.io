# Edge AI background

Surface: `edge-ai.html`, existing engineering portfolio; Experience mode.
Audience: recruiters and engineering teams exploring robotics projects and downloading the Edge AI CV.

This is a scoped surface note for the hero background addition. The portfolio's existing visual authority remains [DESIGN.md](DESIGN.md).

The user clarified that the image must be wallpaper behind the entire page, not a dedicated hero section. A fixed, viewport-sized decorative layer sits directly inside the Edge landing-page body, underneath all content. A dark overlay preserves text readability while the content scrolls over the hands. The introduction returns to its compact layout. Mobile uses a centered, contained image scaled slightly to keep both hands recognizable. The image has an empty alt and is hidden from assistive technology. No JavaScript or animation is required. This treatment is scoped to `edge-with-backdrop` on `edge-ai.html`.

Asset: `assets/edge-human-robot.webp`, 1536 × 1024, 70,714 bytes. Generated with the built-in imagegen tool and exported to WebP.

## Exact generation prompt

Use case: stylized-concept. Create an original photorealistic cinematic background for an Edge AI and robotics engineering portfolio, inspired by the attached reference's human-to-robot fingertip encounter. The attached image is a composition and mood reference only; do not reproduce its branding, typography, mascot, UI, or decorative floating cubes. Wide landscape 3:2 composition, 1536x1024 or larger. A realistically anatomical human hand and forearm enter from the left, index finger reaching right. A highly detailed articulated robotic hand and forearm enter from the right, index finger reaching left. Their fingertips nearly meet at the horizontal center, around 60 percent down the image, with a small precise cyan-white light illuminating both fingertips. The arms and hands stretch horizontally across the lower half of the canvas. Preserve ample very dark empty space throughout the top 35 percent for a website headline. Robot made of elegant titanium silver armor, dark carbon fiber joints, fine mechanical linkages and subtle teal illuminated circuitry, physically plausible finger anatomy. Human skin natural detailed texture, violet and cool blue rim light. Deep midnight navy background #090b1b, restrained indigo atmospheric haze, soft cyan light around the meeting point. High-end cinematic VFX rendering, elegant and immersive, sharp hands and slightly soft background, sophisticated material realism. Clear silhouettes that remain visible on a dark website. Dark corners and lower edge fade smoothly into near-black navy. Only two hands; no extra limbs, no oversized neon bloom, no busy background, no text, no logo, no watermark, no mascot, no website UI. Keep fingertips separated by a narrow gap, not intersecting.

## Verification

After the wallpaper correction, captured Chrome screenshots at 1440, 390 and 320px both at the top and after scrolling 800px. The background remains fixed at viewport y=0 in both positions; the image loads at natural width 1536px, with no horizontal overflow. The introduction measures 250–258px high. Inspected desktop and mobile screenshots for readable text and persistent background placement. Existing project and CV links are retained.

## Final review

The earlier dedicated-hero review is superseded by the user's wallpaper correction. The current result places the image behind the complete page and retains the compact introduction, existing content, typography and actions.

The existing 2px keyboard focus styles remain unchanged.
