import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
console.log("HI")

const scene  = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);

const material = new THREE.MeshBasicMaterial({color: "#f00"})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)
console.log(scene)

const sizes = {
    width:800,
    height: 600,
}
// Camera 
const camera = new THREE.PerspectiveCamera(69, sizes.width/sizes.height )
camera.position.z=3; 
camera.position.y=2; 
scene.add(camera)

const canvas = document.querySelector(".webgl") 
console.log(canvas)

const renderer  = new THREE.WebGLRenderer({
    canvas 
})

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera)