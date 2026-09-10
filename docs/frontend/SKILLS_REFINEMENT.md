# Skills refinement — 2026-09-10

The robotics rail now contains 17 technologies focused on embedded systems, robotics and perception. Removed NumPy, Pandas, Scikit-learn, TensorFlow, FastAPI, JavaScript, Java, Flutter and Kubernetes from its former 26-item list. Retained Python, PyTorch and OpenCV alongside C, C++, ESP32, PlatformIO, ROS 2, Gazebo, MATLAB, MQTT, WebSocket, Git, Linux and Docker. Apache Kafka and MCP were restored after WebSocket at the user's request. The disclosure also drops DeepFace / FaceNet and Jupyter. Project descriptions and their technology tags remain intact.

The AI rail and LLM/agent disclosure now place LangGraph, LangSmith and MCP directly after LangChain, as requested by the user. LangGraph uses Simple Icons; LangSmith uses the symbol extracted from the official LangChain repository SVG, without its wordmark. Sources are recorded in `assets/tech/SOURCES.json`.

Robotics spends 1400ms per item (originally 2800ms). AI now scrolls at 80px/s, a small increase from the last 70px/s setting, as requested. Existing hover/focus pause, keyboard interaction and reduced-motion behavior are retained.

Verified in Chromium at 320, 390, 768 and 1440px: correct item counts and ordering, all icons decode, no horizontal page overflow and no JavaScript errors. Reviewed desktop/mobile screenshots. Measured the robotics loop at 21 seconds for 15 items and AI movement near 70px/s; focus pauses both rails and reduced motion stops automatic movement. JavaScript syntax and Git whitespace checks pass.

Follow-up verification at 390 and 1440px confirms 17 robotics items including Apache Kafka and MCP, a 23.8-second loop with unchanged 1400ms per item, and AI movement near 80px/s. Icon loading, responsive layout, focus pause and reduced motion still pass.
