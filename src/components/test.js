import React, { useRef, useEffect } from 'react';
import Tile from "./Tile"
import Header from './Header';
import styled, { keyframes } from 'styled-components';


// Styled components for the layers
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const DiagonalFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;  // Change this to the desired color
  clip-path: polygon(0 0, 0 100%, 100% 100%);
`;

const TileWrapper = styled.div`
  z-index: 20; // Higher than DiagonalFill
  position: relative; // Required for z-index to take effect
`;

// Define the animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, yellow, skyblue, orange);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 3s linear infinite;
`;

const GradientBackground = () => {
  return (
      <Container>
          <Canvas />
          <DiagonalFill />
          <TileWrapper>
          <Header />
        <Tile
            title="Your Background Screening Expert"
            img="smarthphone.png"
            desc="Experience trust and transparency with our bespoke verification services. From thorough background screenings to right-to-work and DBS checks, to digital ID validations, we equip you with reliable insights for informed decisions. Safeguard your environment with us, where safety and trust are paramount."
            clsH="heading"
            clsP="paragraph"
        />
      </TileWrapper>
      </Container>
  );
};

export default GradientBackground;
