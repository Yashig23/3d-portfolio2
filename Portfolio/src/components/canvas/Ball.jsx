import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {
    Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import CanvasLoader from '../../components/canvas/Loader'
import { MeshStandardMaterial } from 'three'

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
        <ambientLight intensity={10.25} />
        <directionalLight intensity={5} position={[5,5,5]} castShadow/>
        <pointLight intensity={10}/>

        {/* <mesh>
            <sphereGeometry args={[100, 32, 32]}/>
            <meshBasicMaterial attach='material' color="white" />
        </mesh> */}
        <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1,1]}/>
            <meshStandardMaterial  color ={`	rgb(216, 191, 216)`} polygonOffset polygonOffsetFactor={-5} flatShading/> 
            <Decal map={decal} position={[0,0,1]}
            rotation={[ 2* Math.PI, 0, 6.25]} flatShading />
            
            {/* /> */}
            {/* <meshStandardMaterial  attach="material" color='white' /> */}

        </mesh>
    </Float>
  )
}

const BallCanvas =({icon}) =>{
    return (
        <Canvas
        frameloop='demand'
        gl={{ preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon}/>
            </Suspense>
            <Preload all/>

        </Canvas>
    )
}
export default BallCanvas;