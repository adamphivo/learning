import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

const Title = styled.h1`
  color: orange;
  position: relative;
  z-index: 2;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;

function App() {
  return (
    <>
      <Title>React Three Fiber</Title>
      <CanvasContainer>
        <Canvas>
          <mesh>
            <torusKnotGeometry />
            <meshNormalMaterial />
          </mesh>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;
