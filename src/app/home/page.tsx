import React from 'react';
import BouncingCircles from "@/components/BouncingCircles"

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div
        style={{
          width:"100vw",
          height: "360px",
        }}
      >
        <BouncingCircles />
      </div>
    </div>
  );
};

export default Home;