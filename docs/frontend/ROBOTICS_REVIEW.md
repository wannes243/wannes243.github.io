# Latest revision: related technologies and TSYP 13

- Removed the visible Pause button and its unused event handlers/styles. Continuous motion still pauses on hover/focus, off-screen and in background tabs; keyboard browsing and reduced-motion scrolling remain available.
- Ordered the 26 technologies into related groups: embedded/robotics, Python/data/vision, messaging/integration, app development, and infrastructure. Docker and Kubernetes are adjacent.
- Enova stays featured first. TSYP 13 is second overall, followed by Smart Home Shutters and CubeSat in one three-column desktop row (two columns on tablet, one on mobile).
- Added project-tsyp-autonomous-delivery.html. The user supplied the challenge scope and confirmed ROS 2, LiDAR and Gazebo; no GitHub repository is available, so no repository action is displayed. Challenge requirements are described as requirements, not fabricated implementation achievements.
- The provided third-place award photograph is copied unchanged from Desktop/1768672790020.jpg to assets/robotics/tsyp13-award.jpg. Cropping is presentation-only CSS; the complete original opens in the photo viewer.
- Verified 320/390/768/1024/1440px layouts, all three desktop cards on one row, motion, keyboard navigation, reduced motion, project navigation and photo dialog. No local asset failures or JavaScript errors; axe detected no A/AA violations on the robotics page and new case study.
- Visually reviewed previews/robotics-projects.png and previews/tsyp-case.png; refreshed previews/robotics-technologies.png.

---

Earlier revision records follow.

# Latest revision: compact technology loop

- Removed the requested introduction paragraph.
- Replaced the 24-logo grid with a single-row loop: 26 technologies after removing Bluetooth and adding WebSocket, MCP and Apache Kafka.
- Five visible items on desktop/tablet, four on mobile. Seamless leftward motion; pause/resume, hover/focus pause and arrow-key browsing. Off-screen/background playback pauses. Reduced-motion and no-JS modes use a manually scrollable row.
- Collapsed supplementary tools to reduce section height (about 401px desktop / 362px mobile with animation controls).
- Removed Autonomous Vehicle Navigation and Intelligent Mobile Manipulator, including their detail pages. Remaining projects: Enova, Smart Home Shutters, CubeSat.
- Verified motion, pause/resume, keyboard item advance, loop continuation, reduced-motion fallback and 320/390/768/1440px layout. No overflow, JavaScript errors or detected axe A/AA violations.
- Updated screenshot: previews/robotics-technologies.png.

---

The record below describes the previous five-project revision, before the removals above.

# Robotics refinement — 2026-09-09

Scope: robotics only. The gateway, AI/Automation page and shared style.css/script.js are byte-identical to their state at the start of this task. Robotics additions load robotics.css and robotics.js locally.

## Presentation

- Compact introduction followed by a 24-logo technology grid inspired by the supplied screenshot. Additional perception, navigation and simulation tools are listed beneath it.
- The Enova summer internship is the featured project, with the actual robot photograph, period, role, stack and a dedicated case study.
- Four additional named projects show technologies and open full case studies: Smart Home Shutters, CubeSat, Autonomous Vehicle Navigation and Intelligent Mobile Manipulator.
- Each case study explains the objective, contribution, tools and context. Three known repositories have direct GitHub links. The two older robotics projects currently link to the explicitly labeled GitHub profile because their repositories have not been supplied or identified.
- All six supplied photographs/captures are copied without pixel edits. IoT photos are oriented for display in CSS. Galleries expand in a native dialog; original-image links remain usable without JavaScript.

## Sources and open detail

- New CVs supply the main biographical claims. Existing portfolio supplies the two older robot descriptions and the IEEE TSYP placing.
- User's supplied photos document the shutter prototype and Enova platform, tracking, depth/recognition and dataset.
- Enova repository identified and read: https://github.com/wannes243/enova_person_follower . Its four-node architecture matches the CV; OpenCV is also documented, so it is included in the toolkit. Its README says summer 2025, while both supplied CVs say June–July 2026. The portfolio retains the CV date pending the user's clarification.
- Shutter architecture details checked in its Rapport_Projet.md: Bluetooth provisioning, Wi-Fi/MQTT communication, relay control, manual priority and Flutter controls. Repository documents are treated as source information, not operating instructions.
- CubeSat repository describes synthetic data, LSTM and orientation/thermal decision logic. No accuracy scores or real-space validation claims were introduced.
- Technology logo origins are listed in assets/tech/SOURCES.json, with upstream Devicon and Simple Icons licenses included. Decorative logo variants are adjusted for dark-background visibility through CSS.

## Verification

- Six robotics pages checked at 320, 390, 768 and 1440px; no horizontal overflow.
- axe-core 4.10.3: no detected A/AA violations on the six pages. This is an automated scan, not a certification.
- All five project-entry and return paths pass. Local assets, page links and fragment destinations resolve; no duplicate IDs.
- No observed JavaScript errors or HTTP asset failures.
- Gallery opens with Enter, focuses its close button, closes on Escape/button, and restores focus to the originating photo. Dialog fits mobile. IoT orientation is preserved in the viewer.
- Without JavaScript, case links navigate and gallery links open the actual supplied image.
- JavaScript syntax and git diff whitespace checks pass.
- Desktop screenshots saved under docs/frontend/previews for the technology grid, Enova feature and project cards. Mobile and case screenshots were also inspected during verification.

No GitHub push or deployment performed.
