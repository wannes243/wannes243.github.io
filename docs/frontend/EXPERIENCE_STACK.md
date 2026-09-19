# Experience and certification scroll stacks

The homepage Experience section contains NA Consulting, ENOVA Robotics and IEEE WIE. Certifications contains the two supplied PDFs. Keep their existing content, logos, detail links, midnight panels and cyan accents.

The user's final reference is a stack tied to normal page scrolling: each card rises from below and covers the preceding card. There are no navigation arrows, counters, autoplay, gesture interception, artificial backing cards or timed transitions. Scrolling upward naturally uncovers previous cards.

Cards remain in normal document flow and use CSS sticky positioning with later cards painted above earlier cards. `profile-stack.js` measures card and header sizes so tall cards can be read before settling into the stack. It also reveals covered links when reached by keyboard. Without JavaScript or with reduced motion, cards form a regular vertical list.

Verified in Chromium at 1440, 390 and 320px: both stacks overlap at intermediate scroll positions, the next card covers the previous one at its resting position, keyboard focus reveals a covered link, no controls or inert cards remain, and the page has no horizontal overflow. Desktop/mobile screenshots were inspected against the supplied reference. PDF and experience links work with JavaScript disabled and reduced motion enabled. The design scan reports only an existing gradient-text rule outside this surface.
