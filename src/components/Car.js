import React from 'react';


export default function Car(){
  return (
    <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

