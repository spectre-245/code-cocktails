import React from "react";
import "./AnimatedBar.css";

function AnimatedBar({
  startHeight = 50,
  maxHeight = 180,
  color = "#4CAF50",
  duration = 2,
  width = 40,
}) {
  return (
    <div
      className="animated-bar"
      style={{
        "--startHeight": `${startHeight}px`,
        "--maxHeight": `${maxHeight}px`,
        "--barColor": color,
        "--duration": `${duration}s`,
        "--barWidth": `${width}px`,
      }}
    ></div>
  );
}

export default AnimatedBar;
