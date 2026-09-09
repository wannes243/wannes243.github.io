# Portfolio imagery and profile placement

Latest homepage imagery: [simplified Edge card and balanced AI/robotics wallpaper](IMAGERY_REFINEMENT.md). This supersedes the earlier card and homepage asset descriptions below.

The homepage opens with Wannes Fraj's existing portrait, name, engineering course, location and LinkedIn link. The personal introduction sits directly below this identity strip, before the two-world gateway. Following the latest placement request, both education entries are back below the gateway, followed by the NVIDIA certificate and WIE webmaster experience in Beyond the curriculum. The introductory block excludes NVIDIA and WIE.

Placement verified in Chrome at 1440, 768, 390 and 320px: identity → introduction → world gateway → education → additional experience → contact. Education appears once and is outside the introduction. No horizontal overflow was observed. The existing gradient heading remains the only mechanical detector warning for the edited styles.

The Edge AI portal uses an original conceptual rover render with stereo camera, LiDAR and onboard computing, replacing the abstract cube. It is an illustrative domain image, not a photograph of the user's built hardware.

The homepage and AI Automation route use fixed wallpaper behind all content, scoped by `.with-wallpaper`. The homepage depicts a robotics/electronics atelier; Automation depicts a human fingertip connected to an artificial neural network. Both inherit the existing midnight, cyan/violet and Syne/Outfit system. The old standalone Automation sculpture has been removed. The existing Edge page wallpaper is preserved.

All three assets were generated with the built-in imagegen tool and exported to WebP at 1536 × 1024. No new animation or JavaScript is required.

## Generation prompts

### Edge AI card

Saved asset: `assets/edge-robot-perception.webp`.

Use case: stylized-concept. Asset: professional Edge AI and Robotics portfolio card cover. Create a premium photorealistic engineering visualization, landscape 3:2 1536x1024. A credible compact autonomous wheeled research rover in three-quarter front view in a dark high-tech laboratory. Show its two substantial drive wheels, machined aluminum chassis, clearly recognizable forward stereo camera pair, top-mounted small cylindrical LiDAR, and a visible compact onboard AI computing module behind a transparent side cover with real circuit-board texture and a finned heatsink. A restrained fan of cyan LiDAR scan rays meets the floor ahead, hinting at local perception and autonomous navigation. The robot is the main subject, large and centered, all essential parts within middle 75 percent of frame, readable when cropped into a wide landscape card. Camera and processor indicate intelligence on the device, not a cloud. Cool titanium and dark carbon materials, controlled cyan practical light, deep midnight navy environment, sharply detailed engineering, sophisticated aerospace editorial realism. No cubes floating in space, no abstract stacked cubes, no human-like toy robot, no human, no brain sculpture, no text, labels, logos, watermark, fake UI or diagram. Dark unobtrusive background, elegant grounded robotics rather than fantasy.

### Homepage wallpaper

Saved asset: `assets/wannes-ai-robotics-workshop.webp`.

Use case: stylized-concept. Asset: fixed background wallpaper behind the text of a personal portfolio of an industrial computer engineering student working in AI, robotics and embedded systems. Create an original premium cinematic engineering atelier scene, landscape 3:2 1536x1024. Deep midnight navy #090b1b canvas with generous dark, visually quiet central and upper areas for overlaid website text. Arrange meaningful engineering details around the edges and lower third: on the left an elegant articulated industrial robot arm with a precise gripper hovering over a small real circuit board; on the right the partially visible compact autonomous rover with stereo camera and LiDAR; between them at the bottom a subtle flowing web of cyan and lavender neural signal filaments connecting a real processor to mechanical hardware. The scene represents a young engineer's practice of turning AI into working machines and systems, not generic cyberpunk. Real titanium, circuit boards, tiny solder joints, dark workbench, restrained teal and violet practical lighting, soft depth of field, exquisitely realistic materials. The machinery is peripheral and lower frame, the central 45 percent remains quiet dark navy, seamless dark edges to blend into a website wallpaper. No people, no portrait, no hands, no text, no labels, no logos, no floating cubes, no invented dashboards, no numbers, no watermark. Calm sophisticated innovation studio, not a cluttered collage.

### AI Automation wallpaper

Saved asset: `assets/ai-human-neural.webp`.

Use case: stylized-concept. Asset: original fixed background wallpaper for AI and Automation portfolio, companion to a cinematic human hand meeting robotic hand scene, but explicitly representing artificial intelligence and human intent. Landscape 3:2, 1536x1024. A photorealistic natural human hand enters from the lower left, index finger extended toward a luminous artificial neural intelligence suspended on the right. The AI form is a refined semi-transparent brain-shaped structure woven from hundreds of delicate lavender optical fibers and sparse bright violet neural junctions, recognizable but not a solid plastic brain. A single narrow thread of light links the fingertip to the neural network and then branches toward a few small connected light nodes suggesting automated actions. Human intention becoming connected intelligent processes. Main encounter spans the lower middle of the image, around 60 percent height. Leave the upper 35 percent and broad central upper region very dark and calm for website headings. Deep midnight navy #090b1b blending to black at all edges, lavender and subtle cyan rim lighting on real skin, refined restrained volumetric light around neural fibers, realistic skin anatomy, high-end cinematic VFX quality. Sophisticated and quiet, not loud neon or cartoon. Only one human hand, no humanoid robot, no mechanical hand, no floating cubes, no text, no labels, no brands, no watermarks, no UI, no icons or windows. Broad composition readable as a wallpaper behind text, keep fingertip and neural form comfortably within the central 70 percent for responsive cropping.

## Verification

Chrome checks at 1440, 390 and 320px on the homepage, Automation and Edge routes: no horizontal overflow or runtime exceptions. Both new wallpapers remain at viewport y=0 after 650px scrolling. Inspected top and scrolled desktop/mobile captures. The homepage has exactly one profile strip as the first main content element. New images load locally. Detector reported only the pre-existing gradient heading text in style.css, outside this change.

Local link and anchor checks on both edited pages pass. All three new images and both CV downloads return HTTP 200. Independent finish review: ready for the requested scope, no material blockers. Profile placement, concrete robotics imagery, both wallpapers, scrolling behavior and desktop/mobile composition passed the screenshot review. This is not a separate cross-browser or full accessibility audit.
