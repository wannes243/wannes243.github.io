# Homepage imagery refinement — 2026-09-09

The user requested a simpler, professional Edge AI card and equal visual emphasis on AI and robotics in the homepage wallpaper. The existing midnight palette, page structure, content and navigation are preserved.

Generated with the built-in imagegen tool. The images are conceptual illustrations, not photographs of Wannes's built hardware. Final workspace assets:

- `assets/edge-vision-minimal.png`: one enclosed stereo vision module on a small pan-tilt base, isolated on a dark studio background.
- `assets/ai-robotics-balanced.png`: revised workshop with neural intelligence on the left and one rover on the right, connected across the workbench; the large arm is removed.

These replace the homepage's references to `edge-robot-perception.webp` and `wannes-ai-robotics-workshop.webp`. Original assets remain available. Other routes retain their existing imagery.

## Verification

Checked the local homepage in headless Chrome at 1440, 390 and 320px. Both images loaded at their expected 1536px natural width, no horizontal overflow, no JavaScript page exceptions, and both portal destinations remain correct. Inspected desktop and full mobile screenshots saved under `docs/frontend/previews/homepage-refined-*.png`. The card has ample negative space and the wallpaper exposes both AI and robotics around the content. The Impeccable detector returned no findings for the changed HTML. This is a scoped visual check, not a full accessibility or cross-browser audit.

## Final generation prompts

### Card

Use case: product-mockup. Asset: restrained professional Edge AI and Robotics portfolio card cover, landscape 1536x1024. Create a premium photoreal studio product photograph of ONE compact autonomous vision sensor module: a refined horizontal graphite and satin aluminum stereo camera with two small optical lenses, mounted on a very short precise mechanical pan-tilt joint and minimal low round base. Elegant credible industrial design, enclosed smooth surfaces, almost no exposed screws, no exposed circuit boards. A tiny muted cyan indicator subtly conveys onboard AI. Single object centered, occupies only 45 percent of image width and 45 percent height, ample calm negative space on every side. Seamless deep midnight navy #0a1024 studio backdrop and floor, soft controlled top light and delicate cyan rim light, subtle grounded shadow, realistic optical glass and matte metal, editorial product photography. Understated, simple, professional, carefully composed and uncluttered. No rover, wheels, robot arm, hands, brain, lab, furniture, wires, scan rays, particle effects, luminous network, dramatic glow, text, typography, labels, logos, watermark, UI. Output one finished image, no collage.

### Wallpaper edit

Reference/edit target: `assets/wannes-ai-robotics-workshop.webp`.

Use case: precise-object-edit. Asset: homepage background wallpaper, landscape 1536x1024. Edit the supplied engineering workshop wallpaper. The user loves its atmosphere and wants to preserve it, but currently it reads 80 percent robotics. Rebalance the scene so ARTIFICIAL INTELLIGENCE and ROBOTICS have equal visual presence and salience, with simpler, professional composition. Preserve the original deep midnight navy palette, realistic cinematic materials, calm dark central and upper negative space for white webpage text, workbench at bottom, and muted cyan/lavender practical lighting. REMOVE the enormous industrial arm on the LEFT and replace its entire visual footprint with an elegant substantial luminous three-dimensional artificial neural network, a recognizable delicate brain-shaped structure of sparse violet optical fibers and connected nodes, floating above a small AI computing module near the lower-left workbench. Keep this AI sculpture peripheral on the LEFT, similar size and visual weight to the right robot, clearly identifiable as AI, not a solid plastic brain. Keep ONE compact refined rover on the RIGHT, simplify its exposed mechanics and make it slightly smaller. No robot arms anywhere. Balance left AI violet and right robotics cyan at roughly 50/50 in subject prominence. Link the two with just a few subtle flowing signal filaments along the bottom. Remove loose tools, loose boards, clutter and dramatic lighting. Middle 45 percent and upper middle remain deep nearly plain navy, preserving text readability. Make neural network and robot visible within frame, neither cut off. Keep the sophisticated photographic workshop atmosphere and dark edges; avoid a collage, split screen, screens, UI panels, text, logos, watermark, or bright neon. A calm unified composition of intelligence becoming physical action.
