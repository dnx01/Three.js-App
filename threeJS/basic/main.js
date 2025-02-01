import * as THREE from "three";

// Create a scene

const scene = new THREE.Scene();

scene.background = new THREE.Color("#000000");

// Create a camera

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

// Create a object

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
  color: "0x00ff00",
  emissive: 0x072534,
  side: THREE.DoubleSide,
});

const cube = new THREE.Mesh(geometry, material);

// Add edges to the cube
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: "#a200ff" });
const line = new THREE.LineSegments(edges, lineMaterial);

// Create a group and add both the cube and the lines to it
const group = new THREE.Group();
group.add(cube);
group.add(line);

scene.add(group);

// Add light

const light = new THREE.DirectionalLight("0xffffff", 10);

light.position.set(1, 1, 1).normalize();

scene.add(light);

// Create a renderer

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Render the scene

function animate() {
  requestAnimationFrame(animate);

  // Rotate the group
  group.rotation.x += 0.01;
  group.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
