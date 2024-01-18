import React from "react";
import BouncingCircles from "t-bouncing-circles"
import LocalBouncingCircles from "@/components/LocalBouncingCircles"
const BouncingCircleDemo: React.FC = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
        }}
      >
        <h1
          style={{
            position: "absolute",
            right: "10px",
            top: 0,
            transform: "translateY(50%)",
          }}
        >Welcome to BouncingCircles Demo</h1>
        <div style={{ height: "900px" }}>
          {/* <LocalBouncingCircles
          height={300}></LocalBouncingCircles> */}
          <BouncingCircles></BouncingCircles>
        </div>
      </div>
    </div>
  );
};

export default BouncingCircleDemo;