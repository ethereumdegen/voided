
requirejs(["vendor/three.min"], function(THREE) {



  // Set the scene size.
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 10000;

  // Get the DOM element to attach to
  const container =
      document.querySelector('#container');

  // Create a WebGL renderer, camera
  // and a scene
  const renderer = new THREE.WebGLRenderer();
  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );


  const scene = new THREE.Scene();

  // Add the camera to the scene.
  scene.add(camera);

  // Start the renderer.
  renderer.setSize(WIDTH, HEIGHT);

  // Attach the renderer-supplied
  // DOM element.
  container.appendChild(renderer.domElement);

  // create a point light
  const pointLight =
    new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);



  var mesh;
  init();
  animate();


  function init() {
    camera.position.z = 400;

    var texture = new THREE.TextureLoader().load( 'assets/textures/crate.gif' );
    var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //
    window.addEventListener( 'resize', onWindowResize, false );
  }


/*
  function update () {
    // Draw!
    renderer.render(scene, camera);

    // Schedule the next frame.
    requestAnimationFrame(update);
  }*/

  // Schedule the first frame.
  //requestAnimationFrame(update);


  function animate() {
    requestAnimationFrame( animate );
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    renderer.render( scene, camera );
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }




});
