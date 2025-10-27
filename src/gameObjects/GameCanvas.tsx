import { Canvas } from "@react-three/fiber";
import Box from "./Box";

interface GameCanvasComponentProps {
  boxCount: number;
}

function GameCanvas({ boxCount }: GameCanvasComponentProps) {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {[...Array(boxCount).keys()].map((box: number) => {
        return <Box key={`box-key-${box}`} position={[box * 1.5, 0, 0]} />;
      })}
    </Canvas>
  );
}

export default GameCanvas;
