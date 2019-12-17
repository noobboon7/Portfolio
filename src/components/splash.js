import React, { useRef, useMemo } from 'react'
import * as THREE from 'three';
import { Canvas, extend, useThree, useRender } from "react-three-fiber";
import { useSpring, a } from 'react-spring/three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Moon from './3dMoon'


extend({OrbitControls})

const Controls = () => {
    const orbitRef = useRef()
    const { camera, gl } = useThree()
    useRender(() => {
        orbitRef.current.update()
    })

    return <orbitControls autoRotate args={[camera, gl.domElement]} ref={ orbitRef }/>
}


const Plane = () => (
    // if you want plane to rotate rotation={[-Math.PI / 2,0,0]}
    <mesh  rotation={[-Math.PI / 2,0,0]} position={[0, -10, 0]} receiveShadow >
        <planeBufferGeometry attach="geometry" args={[500,500]} />
        <meshPhysicalMaterial attach="material" color="black" />
    </mesh>
)

const Stars = () => {
    let group = useRef()
    let theta = 0
    useRender(() => {
      const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.01)))
      const s = Math.cos(THREE.Math.degToRad(theta * 2))
      group.current.rotation.set(r, r, r)
      group.current.scale.set(s, s, s)
    })
    const [geo, mat, coords] = useMemo(() => {
      const geo = new THREE.SphereBufferGeometry(1, 10, 10)
      const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('peachpuff'), transparent: true })
      const coords = new Array(1000).fill().map(i => [Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400])
      return [geo, mat, coords]
    }, [])
    return (
      <a.group ref={group} position={[0,0,0]}>
        {coords.map(([p1, p2, p3], i) => (
          <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
        ))}
      </a.group>
    )
  }

const Splash = () => {

    return(
        <Canvas camera={{position: [10,10,50]}} onCreated={({gl}) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}>
            <fog attach="fog" args={["grey", 10 , 250]} />
            <Controls/>
            <Moon/>
            <Stars/>
            <Plane/>
        </Canvas>
    )
}

export default Splash;