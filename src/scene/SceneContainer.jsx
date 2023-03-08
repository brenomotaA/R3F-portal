import { Environment, Float, OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";
import { BrightnessContrast, ChromaticAberration, DepthOfField, EffectComposer, GodRays, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing"
import { Suspense } from "react";
import { Color, CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import { FloatingIsland } from "../components/FloatingIsland";
import { FloatingRocks } from "../components/FloatinRocks";
import { Grass } from "../components/Grass";
import { Portal } from "../components/Portal";
import { Rocks } from "../components/Rocks";
import { SceneParticles } from "../components/SceneParticles";
import { Trees } from "../components/Trees";
import { Words } from "../components/Words";

const lightColor = new Color(1, 0.2, 0.1)

const mesh = new Mesh(
    new CylinderGeometry(0.3, 0.3, 0.2, 20),
    new MeshBasicMaterial({
        color: lightColor,
        transparent: true,
        opacity: 1
    })
);
mesh.rotation.x = Math.PI * 0.5;
mesh.position.set(1.17, 10.7, -4.1);
mesh.scale.set(1.5, 1, 1);

export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
            <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />
            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />
            <Float
                speed={0.5}
                rotationIntensity={0.6}
                floatIntensity={0.6}
            >
                <primitive object={mesh} />
                <spotLight
                    penumbra={1}
                    distance={500}
                    angle={70}
                    attenuation={1}
                    anglePower={3}
                    intensity={0.3}
                    color={lightColor}
                    position={[1.35, 10.85, -4.45]}
                    target-position={[0, 0, -1]}
                />
                <Portal />
                <Rocks />
                <FloatingIsland />
                <Trees />
                <Words />
                <Grass />
                <SceneParticles />
            </Float>
            <FloatingRocks />
            <EffectComposer stencilBuffer={true}>
                <DepthOfField
                    focusDistance={0.012}
                    focalLength={0.015}
                    bokehScale={7}
                />
                <HueSaturation hue={0} saturation={-0.15} />
                <BrightnessContrast brightness={0.0} contrast={0.035} />
                <ChromaticAberration radialModulation={true} offset={[0.00175, 0.00175]} />
                <GodRays
                    sun={mesh}
                    blendFunction={BlendFunction.Screen}
                    samples={40}
                    density={0.97}
                    decay={0.97}
                    weight={0.6}
                    exposure={0.3}
                    clampMax={1}
                    width={Resizer.AUTO_SIZE}
                    height={Resizer.AUTO_SIZE}
                    kernelSize={KernelSize.SMALL}
                    blur={true}
                />
            </EffectComposer>
        </Suspense>
    )
}