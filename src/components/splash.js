import React, { useRef } from 'react'
import * as THREE from 'three';
import { Canvas, extend, useThree, useRender, useFrame } from "react-three-fiber";
// import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Moon from './3dMoon'




extend({OrbitControls})


const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
    useRender(() => {
        orbitRef.current.update()
    })

    return(
        <orbitControls
        autoRotate
        args={[camera, gl.domElement]}
        ref={ orbitRef }
        />
    )
}


const Plane = () => (
    // if you want plane to rotate rotation={[-Math.PI / 2,0,0]}
    <mesh  rotation={[-Math.PI / 2,0,0]} position={[0, -10, 0]} receiveShadow >
        <planeBufferGeometry attach="geometry" args={[500,500]} />
        <meshPhysicalMaterial attach="material" color="black" />
    </mesh>
)



const Splash = () => {

    return(
        <Canvas camera={{position: [10,10,50]}} onCreated={({gl}) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}>
            <fog attach="fog" args={["grey", 10 , 250]} />
            <Controls/>
            <Moon/>
            <Plane/>

        </Canvas>
    )
}

export default Splash;