import React, { useState } from 'react';
import Konva from 'Konva'
import { Stage, Layer, Rect } from 'react-konva';


const Canvas = () => {
    const [color, setColor] = useState("green");
    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
            <Rect
                x={20}
                y={20}
                width={50}
                height={50}
                fill={color}
                shadowBlur={5}
                onClick={() => setColor(Konva.Util.getRandomColor())}
            />

            </Layer>
      </Stage>
    )

}

export default Canvas;