document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  
  const modelViewer = document.querySelector('#model');
  
  let {theta, phi, radius} = modelViewer.getCameraOrbit();
  let {x, y, z} = modelViewer.getCameraTarget();
  
  const moveSpeed = 7;

  theta = theta * Math.PI / 180;
  phi = phi * Math.PI / 180;
  
  const forwardVector = {
    x: Math.sin(theta),
    z: Math.cos(theta)
  };

  const rightVector = {
    x: Math.cos(theta),
    z: -Math.sin(theta)
  };
  const rotateSpeed = 1; // Velocidad de rotación (izquierda/derecha)
  

  switch (event.key) {
    case 's':
      x += forwardVector.x * moveSpeed;
      z += forwardVector.z * moveSpeed;
      break;
    case 'w':
      x -= forwardVector.x * moveSpeed;
      z -= forwardVector.z * moveSpeed;
      break;
    case 'a':
      x -= rightVector.x * moveSpeed;
      z -= rightVector.z * moveSpeed;
      break;
    case 'd':
      x += rightVector.x * moveSpeed;
      z += rightVector.z * moveSpeed;
      break;
    // Rotación sobre el eje Y
      case 'q':
        // Rotación hacia la izquierda
        theta += rotateSpeed;
        break;
    case 'e':
        // Rotación hacia la derecha
        theta -= rotateSpeed;
        break;
    default:
      break;
  }

  console.log(`Camera Target: ${x}m, ${y}m, ${z}m`);
  console.log(theta);
  theta=theta*180/3.1416;
  //actualizar theta de radianes a grados
  modelViewer.cameraOrbit = `${theta}deg ${60}deg ${0}m`;
  modelViewer.cameraTarget = `${x}m ${y}m ${z}m`;
  
 
});


/*document.addEventListener('DOMContentLoaded', () => {
  const modelViewer = document.querySelector('model-viewer');

  if (!modelViewer) {
      console.error('No se ha encontrado el modelo');
      return;
  }

  // Inicializamos la cámara en una posición predeterminada
  let theta = 0;   // Rotación inicial horizontal (0°)
  let phi = 15;    // Ángulo vertical (15°) para no comenzar con la cámara en el suelo
  let radius = 10; // Distancia inicial desde el modelo (10 metros)

  const moveSpeed = 1;  // Velocidad de movimiento (adelante/atrás/izquierda/derecha)
  const rotateSpeed = 5; // Velocidad de rotación (izquierda/derecha)

  // Función para actualizar la posición de la cámara
  function updateCamera() {
      modelViewer.cameraOrbit = `${theta}deg ${phi}deg ${radius}m`;
      console.log(`Cámara Orbit: theta=${theta}°, phi=${phi}°, radius=${radius}m`);
  }

  // Control de teclas
  document.addEventListener('keydown', (event) => {
      switch (event.key) {
          case 'w':
              // Movimiento hacia adelante
              radius -= moveSpeed;
              if (radius < 2) radius = 2; // Limitar el radio (no permitir que la cámara se acerque demasiado)
              break;
          case 's':
              // Movimiento hacia atrás
              radius += moveSpeed;
              break;
          case 'a':
              // Movimiento a la izquierda
              theta -= rotateSpeed; // Girar la cámara a la izquierda
              break;
          case 'd':
              // Movimiento a la derecha
              theta += rotateSpeed; // Girar la cámara a la derecha
              break;
          // Rotación sobre el eje Y
          case 'q':
              // Rotación hacia la izquierda
              theta -= rotateSpeed;
              break;
          case 'e':
              // Rotación hacia la derecha
              theta += rotateSpeed;
              break;
          default:
              return;
      }

      // Restringimos la rotación vertical (phi) a un rango razonable para evitar voltear la cámara
      phi = Math.min(Math.max(phi, 5), 85); // Rango entre 5° y 85°

      // Actualizamos la posición de la cámara
      updateCamera();
  });

  // Aseguramos que la cámara empiece en la posición predeterminada
  modelViewer.cameraOrbit = `${theta}deg ${phi}deg ${radius}m`;
  updateCamera();
});
*/
/*document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  
  const modelViewer = document.querySelector('#model');
  
  let {theta, phi, radius} = modelViewer.getCameraOrbit();
  let {x, y, z} = modelViewer.getCameraTarget();
  
  const moveSpeed = 7;

  theta = theta * Math.PI / 180;
  phi = phi * Math.PI / 180;
  
  const forwardVector = {
    x: Math.sin(theta),
    z: Math.cos(theta)
  };

  const rightVector = {
    x: Math.cos(theta),
    z: -Math.sin(theta)
  };

  switch (event.key) {
    case 's':
      x += forwardVector.x * moveSpeed;
      z += forwardVector.z * moveSpeed;
      break;
    case 'w':
      x -= forwardVector.x * moveSpeed;
      z -= forwardVector.z * moveSpeed;
      break;
    case 'a':
      x -= rightVector.x * moveSpeed;
      z -= rightVector.z * moveSpeed;
      break;
    case 'd':
      x += rightVector.x * moveSpeed;
      z += rightVector.z * moveSpeed;
      break;
    default:
      break;
  }

  console.log(`Camera Target: ${x}m, ${y}m, ${z}m`);
  
  modelViewer.cameraTarget = `${x}m ${y}m ${z}m`;
});
*/