import React, { useState, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const Moon = () => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load('/scene.gltf', setModel)

    },[])


    return model ? <mesh scale={[0.2,0.2,0.2]} position={[0,0,0]} >
                     <ambientLight/>
                     <spotLight position={[20,20,100]} intensity={4} penumbra={7} castShadow />
                     <primitive object={model.scene}/> 
                    </mesh> : null


}

export default Moon