// commonjs
var THREE = window.THREE = require('three');
require('three/examples/js/loaders/GLTFLoader');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var loader = new THREE.GLTFLoader();

// loader.load( 'images/x.glb', function ( gltf ) {
//
//     scene.add( gltf.scene );
//
// }, undefined, function ( error ) {
//
//     console.error( error );
//
// } );
renderer.render( scene, camera );
