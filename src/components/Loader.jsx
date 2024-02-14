import React from 'react'
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <p styles={{
        color: '#f1f1f1',
        fontSize: 14,
        marginTop: 80,

      }}
        className='block font-bold'>{progress.toFixed(2)}%
      </p>
      <span className='canvas-loader'></span>

    </Html>
  )
}

export default CanvasLoader;