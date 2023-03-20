"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { ShaderMaterial } from "three";

const vertexShader = `
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main() {
    vertexUV=uv;
    vertexNormal=normalize(normalMatrix*normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `;
const atmosphereVertexShader = `
  varying vec3 vertexNormal;
  void main() {
    vertexNormal=normalize(normalMatrix*normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 0.9);
  }
  `;
const fragmentShader = `
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){
    float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));
    vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);
    gl_FragColor = vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);
  }
`;
const atmosphereFragmentShader = `
  varying vec3 vertexNormal;
  void main(){
    float intensity=pow(0.4-dot(vertexNormal,vec3(0,0,1.0)),2.0);
    gl_FragColor = vec4(0.3,0.6,1.0,1.0)*intensity;
  }
`;
const EarthNight_16 = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    document.body.before(renderer.domElement);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 250, 250),
      new ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        uniforms: {
          globeTexture: {
            // I wasn't even using the picture of earth that i downloaded 🤦‍♂️🤦‍♂️🤦‍♂️
            value: new THREE.TextureLoader().load("/earth-night.jpg"),
          },
        },
      })
    );
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 250, 250),
      new ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );

    atmosphere.scale.set(1.2, 1.2, 1.2);

    scene.add(sphere);
    scene.add(atmosphere);
    camera.position.z = 8;

    renderer.setClearColor(0x000000, 1);

    function addStars() {
      const starColors = [
        "#ffffff", // white
        "#ffff00", // yellow
        "#ffcc00", // orange
        "#ff6600", // red-orange
        "#ff0000", // red
        "#9900cc", // purple
        "#0000ff", // blue
        "#00ffff", // cyan
        "#00ff00", // green
      ];
      const star = new THREE.Mesh(
        new THREE.SphereGeometry(0.3),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color().set(
            starColors[Math.floor(Math.random() * starColors.length)]
          ),
        })
      );
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(700));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(800).fill().forEach(addStars);

    const animate = () => {
      requestAnimationFrame(animate);

      // SPHERE Rotation
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      sphere.rotation.z += 0.001;

      //  Rotating the camera around the sphere
      camera.lookAt(sphere.position);

      camera.position.x =
        50 *
        Math.sin(Date.now() * 0.001 + 2 * Math.PI * Math.random()) *
        Math.cos(Date.now() * 0.002 + 2 * Math.PI * Math.random());
      camera.position.y =
        50 *
        Math.sin(Date.now() * 0.003 + 2 * Math.PI * Math.random()) *
        Math.cos(Date.now() * 0.004 + 2 * Math.PI * Math.random());
      camera.position.z =
        50 * Math.cos(Date.now() * 0.001 + 2 * Math.PI * Math.random());

      // controls.update()
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <></>;
};

export default EarthNight_16;
