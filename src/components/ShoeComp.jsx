import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from 'valtio'

const state = proxy({
    current: null,
    items: {
        laces: '#000',
        mesh: '#fff',
        caps: '#fff',
        inner: '#fff',
        sole: '#000',
        stripes: '#000',
        band: '#000',
        patch: '#000',
    }
})

function Shoe() {
    const ref = useRef()
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/shoe-draco.glb')

    return (
    <group
      ref={ref}
      scale={1.25}
      position={[0, 0.3, 0]}
      rotation={[ 0, -Math.PI, -Math.PI / 8 ]}
    >
      <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
      <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
    </group>
  ) 
}

function ShoeComp() {
  return (
    <div className='fixed h-screen w-screen top-0 left-0 z-10'>
        <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <pointLight position={[-10, -10, -10]} />
            <Shoe />
            <Environment preset="city" />
            <ContactShadows position={[0, -0.65, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
            <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
        </Canvas>
    </div>
  )
}

export default ShoeComp