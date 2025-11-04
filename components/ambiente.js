AFRAME.registerComponent('ambiente', {
  init: function () {
    var sceneEl = this.el;

    // Configuración del entorno
    sceneEl.setAttribute('physics', 'gravity: 0');

    // Configuración de la iluminación
    sceneEl.setAttribute('environment', {
      preset: 'default',
      seed: 1,
      skyType: 'atmosphere',
      skyColor: '#99C2FF',
      horizonColor: '#99C2FF',      

    });

    // Modelo 3D del museo
    var museo = document.createElement('a-entity');
    //museo.setAttribute('gltf-model', 'url(https://cdn.glitch.global/25ac2c89-9dc7-4d65-8977-00a3df60e85c/salon10.glb)');
    museo.setAttribute('gltf-model', 'url(modelos/sala.glb)');
    museo.setAttribute('position', '-50 20 80');
    museo.setAttribute('scale', '5 5 5');   
    museo.setAttribute('material', {
      color: '#ffffff',
      metalness: 0.9,
      roughness: 0.2
    }); // Asegúrate de que el material sea interactivo con la luz
    museo.setAttribute('shadow', 'cast: true; receive: true');
    museo.setAttribute('material', 'shader: standard; metalness: 0.4; roughness: 0.6;');
    sceneEl.appendChild(museo);
  }
});
