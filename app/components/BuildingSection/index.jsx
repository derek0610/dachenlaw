'use client';
import React from 'react';
import { useLoader, Canvas } from 'react-three-fiber';
import { Environment, OrbitControls, Center } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const BuildingSection = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [20, 10, 50], fov: 50 }}
			style={{ height: 600 }}
		>
			<Model />
			<OrbitControls
				autoRotate
				autoRotateSpeed={4}
				// enablePan={false}
				// enableZoom={false}
				minPolarAngle={Math.PI / 2.1}
				maxPolarAngle={Math.PI / 2.1}
			/>
			<Environment preset="dawn" />
		</Canvas>
	);
};

const Model = () => {
	const gltf = useLoader(GLTFLoader, './shanghai_gardens/scene.gltf');
	return (
		<Center>
			<primitive object={gltf.scene} scale={0.4} />
		</Center>
	);
};

export default BuildingSection;
