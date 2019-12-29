---

title: "React-Three-Fiber"
date: "December 14, 2019"

---
# React-Three-Fiber


![](https://cdn-images-1.medium.com/max/1200/0*D4Vdy6ZQkDbsJ6c5.jpeg)

Hey all! I am super excited this week, because I’m finally getting around to finishing my portfolio and displaying the tech I’ve been working with. I been looking around and there are some really impressive dev portfolios out there, but the ones that stood out the most were the ones with 3D animations.

For example: [https://www.awwwards.com/sites/bruno-simon-portfolio](https://www.awwwards.com/sites/bruno-simon-portfolio) .

In this blog, I’m going to try and set you up with some very fundamental knowledge with react-three-fiber(a three js library), that will help you start building your own 3d animations.

#### NPM install

Depending on which package manager you use in react will determine the syntax you use. In my example below I will be using NPM.
```
npm install three react-three-fiber react-spring(optional)
```
I personal just started using react-spring for the physic of objects in the animation; however, installing `react-spring` as dependency is optional.

#### Importing
```
import React, { useState, useRef, useEffect } from 'react'

import \* as THREE from 'three';

import { Canvas, extend, useThree, useRender } from "react-three-fiber";

import { useSpring, a } from 'react-spring/three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
```
When successfully installing dependencies, you should then import like so…afterwards creating a canvas for your three js is made easier now with the help of `react-three-fiber`. Just create a component where the canvas will live and export the module so you can use it wherever you may see fit.
```
const Module = () => {

 return(

   <Canvas>

     <Box/> //separate component

     <Plane/> //separate component

   </Canvas>

 )

}

export default Module;
```
Alternatively, you can also import a canvas by itself and create separate component, then import them into the file that has the canvas.

#### Creating an object

![box created using THREE.js](https://cdn-images-1.medium.com/max/800/1*tzALNeclN2QxqTE-5lq4DA.png)
#####box created using THREE.js

In the code below you will see the component that creates a box object to the screen.
```
const Box = () => {  
/\* React hooks

 const \[hovered, setHovered\] = useState(false)

 const \[active, setActive\] = useState(false)

 const props = useSpring({

 scale: active ? \[1.3,1.3,1.3\] : \[1,1,1\],

 color: hovered ? "green" : "grey",

 })  React hooks \*/

 return(  
// mesh is what hold the object

  <a.mesh

  onPointerOver={() => setHovered(true)}

  onPointerOut={() => setHovered(false)}

  onClick={() => setActive(!active)}

  scale={props.scale}>

    //stating that the shape I want is a box  
    <boxBufferGeometry attach="geometry" args={\[1.5,1.5,1.5\]} />  
      
    //giving the box a skin with the color 'grey'   
    <a.meshPhysicalMaterial attach="material" color={props.color} />

   //Please note the lowercase 'a.' is for animation using react-       spring otherwise syntax is <mesh>  
   </a.mesh>

 )

}
```
OK! let’s walk through this component… at the very top I’m using hooks to change the state of the box, based on mouse events. If clicked the box grows larger and on hovering the mouse over the box it changes color to green, and when not hovered its default state is grey.

I then use a JSX mesh tag to wrap the object and pass in the properties I want it to have; note the lowercase `a.`, this is telling my mesh to use animation on changes to the object.

Inside the mesh the boxBufferGeometry tag is responsible for creating my geometric shape; args property is \[x-axis, y-axis, z-axis\]. The meshPhysicalMaterial, can have different skins from what I’ve seen so far; for instance, if I had a jpeg file that I wanted to place in the box… I’d have to write the property that places the image in the box, instead of the color property.

#### Conclusion

I had a difficult time trying to get anything on the page on my own, but with help from youtube I was able to get started using Three js. I will leave some useful links below that helped me grasp these concepts… I love using this new tech, but I’m still discovering it as I continue to use it. I really hope this article was helpful, and if you did find it helpful feel free to give it some likes/claps. Happy coding!



[**react-spring/react-three-fiber**  
_These demos are real, you can click them! They contain the full code, too. npm install three react-three-fiber This is…_github.com](https://github.com/react-spring/react-three-fiber "https://github.com/react-spring/react-three-fiber")[](https://github.com/react-spring/react-three-fiber)

[**Write three.js in React Using react-three-fiber**  
_So you want to write some 3D graphics/animations in your React apps using three.js? Let's see how we can do just that…_alligator.io](https://alligator.io/react/react-with-threejs/ "https://alligator.io/react/react-with-threejs/")[](https://alligator.io/react/react-with-threejs/)

[**three.js - JavaScript 3D library**  
_Edit description_threejs.org](https://threejs.org/ "https://threejs.org/")[](https://threejs.org/)

By [Jerry Velázquez](https://medium.com/@jvr572) on [December 14, 2019](https://medium.com/p/e57d5e2153ca).

[Canonical link](https://medium.com/@jvr572/react-three-fiber-e57d5e2153ca)

Exported from [Medium](https://medium.com) on December 19, 2019.