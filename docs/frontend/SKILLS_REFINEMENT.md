# Skills refinement — 2026-09-10

The robotics rail now contains 15 technologies focused on embedded systems, robotics and perception. Removed NumPy, Pandas, Scikit-learn, TensorFlow, Apache Kafka, MCP, FastAPI, JavaScript, Java, Flutter and Kubernetes from its former 26-item list. Retained Python, PyTorch and OpenCV alongside C, C++, ESP32, PlatformIO, ROS 2, Gazebo, MATLAB, MQTT, WebSocket, Git, Linux and Docker. The disclosure also drops DeepFace / FaceNet and Jupyter. Project descriptions and their technology tags remain intact.

The AI rail and LLM/agent disclosure now place LangGraph, LangSmith and MCP directly after LangChain, as requested by the user. LangGraph uses Simple Icons; LangSmith uses the symbol extracted from the official LangChain repository SVG, without its wordmark. Sources are recorded in `assets/tech/SOURCES.json`.

Both rails move twice as fast: robotics spends 1400ms per item (previously 2800ms); AI scrolls at 70px/s (previously 35px/s). Existing hover/focus pause, keyboard interaction and reduced-motion behavior are retained.

Verified in Chromium at 320, 390, 768 and 1440px: correct item counts and ordering, all icons decode, no horizontal page overflow and no JavaScript errors. Reviewed desktop/mobile screenshots. Measured the robotics loop at 21 seconds for 15 items and AI movement near 70px/s; focus pauses both rails and reduced motion stops automatic movement. JavaScript syntax and Git whitespace checks pass.
