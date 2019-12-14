import React, { useState, useRef, useEffect } from 'react'
import * as THREE from 'three';
import { Canvas, extend, useThree, useRender } from "react-three-fiber";
import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// seperate module ?
extend({OrbitControls})

const Moon = () => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load('/scene.gltf', setModel)

    },[])
    // console.log(model)
    return model ? <mesh scale={[0.07,0.07,0.1]} position={[-5,5,1]} ><primitive object={model.scene}/> </mesh> : null
   
    // return null
}

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
    <mesh  rotation={[-Math.PI / 2,0,0]} position={[0, -0.7, 0]} receiveShadow >
        <planeBufferGeometry attach="geometry" args={[100,100]} />
        <meshPhysicalMaterial attach="material" color="grey" />
    </mesh>
)

// make into a react component later 
const Box = () => {

    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    const props = useSpring({
        scale: active ? [1.3,1.3,1.3] : [1,1,1],
        color: hovered ? "green" : "grey", 
    })
   
    
    return(
        // mesh does something with space and the object?
        <a.mesh 
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)} 
        onClick={() => setActive(!active)} 
        scale={props.scale}
        castShadow>
            <ambientLight/>
            <spotLight position={[0,5,10]} penumbra={1} castShadow />
            <boxBufferGeometry attach="geometry" args={[1.5,1.5,1.5]} />
            <a.meshPhysicalMaterial attach="material" color={props.color} />
        </a.mesh>
    )

}


const Splash = () => {

    return(
        <Canvas camera={{position: [0,0,5]}} onCreated={({gl}) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}>
            <fog attach="fog" args={["white", 5 , 15]} />
            <Controls/>
            <Moon/>
            <Box/>
            <Plane/>
        </Canvas>
    )
}

export default Splash;