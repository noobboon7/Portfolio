import React, { useState, useEffect, useMemo } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Moon = useMemo(() => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load('/scene.gltf', setModel)

    },[model])


    return model ? <mesh scale={[0.2,0.2,0.2]} position={[0,0,0]} >
                     <ambientLight/>
                     <spotLight position={[20,20,100]} intensity={4} penumbra={7} castShadow />
                     <primitive object={model.scene}/> 
                    </mesh> : null


}, [])

export default Moon