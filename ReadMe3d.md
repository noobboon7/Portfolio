

```javascript
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

const Plane = () => (
    // if you want plane to rotate rotation={[-Math.PI / 2,0,0]}
    <mesh  rotation={[-Math.PI / 2,0,0]} position={[0, -10, 0]} receiveShadow >
        <planeBufferGeometry attach="geometry" args={[500,500]} />
        <meshPhysicalMaterial attach="material" color="transparent" />
    </mesh>
)
}
```