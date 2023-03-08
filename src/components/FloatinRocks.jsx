import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function FloatingRocks() {
  const rock1 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_1.glb");
  const rock2 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_2.glb");
  const rock3 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_3.glb");

  const rock4 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_4.glb");
  const rock5 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_5.glb");
  const rock6 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_6.glb");

  const rock7 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_7.glb");
  const rock8 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_8.glb");
  const rock9 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_9.glb");

  const rock10 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_10.glb");
  const rock11 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_11.glb");
  const rock12 = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/floating_rock_12.glb");

  return (
    <>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-20.5, -7, -19]}
      >
        <primitive object={rock1.scene} />
      </Float>

      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-5, 10, -33]}
      >
        <primitive object={rock2.scene} />
      </Float>

      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-20, 3.5, -9]}
      >
        <primitive object={rock3.scene} />
      </Float>

      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-7, 0, -25]}
      >
        <primitive object={rock4.scene} />
      </Float>

      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[10, 5, 15]}
      >
        <primitive object={rock5.scene} />
      </Float>

      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[20, 3.5, 3]}
      >
        <primitive object={rock6.scene} />
      </Float>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-9, -3, 25]}
      >
        <primitive object={rock7.scene} />
      </Float>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[30, 10, -10]}
      >
        <primitive object={rock8.scene} />
      </Float>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-10, 1, 12]}
      >
        <primitive object={rock9.scene} />
      </Float>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[10, 8, -25]}
      >
        <primitive object={rock10.scene} />
      </Float>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[18, -9, 15]}
      >
        <primitive object={rock11.scene} />
      </Float>
      <Float
        speed={0.5}
        rotationIntensity={1.6}
        floatIntensity={0}
        position={[-20, -3.5, -3]}
      >
        <primitive object={rock12.scene} />
      </Float>
    </>
  )
}