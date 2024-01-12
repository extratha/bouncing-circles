import React from "react";
import BouncingCircles from "@/components/BouncingCircles";
const BouncingCircleDemo: React.FC = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "360px",
        }}
      >
        <h1
          style={{
						position: "absolute",
						right:"10px",
						top:0,
						transform: "translateY(50%)",
					}}
        >Welcome to BouncingCircles Demo</h1>
        <BouncingCircles
					circleColor="#e5e0f4"
					baseCircleSize={2}
					connectedRadius={140}
				/>
      </div>
    </div>
  );
};

export default BouncingCircleDemo;