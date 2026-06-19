//MUNDO
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

//CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0,5,10);

//RENDENIZADOR
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//CHÃO
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({color:0x228B22})
);
 
ground.ratation.x = -Math.PI/2;
scene.add(ground);

//ESFERA
const sphere = new THREE.Mesh( new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color:0xffffff})
);
sphere.position.y = 1;
scene.add(sphere);

//MOVIMENTO
let speed = 0.2;
document.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowRight") sphere.position.x += speed;
    if (e.key === "ArrowLeft") sphere.position.x -= speed;
    if (e.key === "ArrowUp") sphere.position.z += speed;
    if (e.key === "ArrowDown") sphere.position.z -= speed;
});

//LOOP
function animated(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animated();