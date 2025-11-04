AFRAME.registerComponent('luz-realista', {
  init: function () {
    const sceneEl = this.el;

    // Luz ambiental suave
    const ambient = document.createElement('a-entity');
    ambient.setAttribute('light', {
      type: 'ambient',
      color: '#ffffff',
      intensity: 0.4
    });
    sceneEl.appendChild(ambient);

    // Luz direccional (sol) que proyecta sombras
    const sun = document.createElement('a-entity');
    sun.setAttribute('light', {
      type: 'directional',
      color: '#ffffff',
      intensity: 2.0,
      castShadow: true,
      shadowCameraNear: 0.1,
      shadowCameraFar: 150,
      shadowCameraLeft: -100,
      shadowCameraRight: 120,
      shadowCameraTop: 120,
      shadowCameraBottom: -120,
      shadowMapWidth: 2048,
      shadowMapHeight: 2048
    });
    sun.setAttribute('position', '10 20 10');  // Posición del sol
    sun.setAttribute('rotation', '-45 45 0');  // Angulo del sol
    sceneEl.appendChild(sun);

    // Luz puntual secundaria para reflejos
    const point = document.createElement('a-entity');
    point.setAttribute('light', {
      type: 'point',
      intensity: 0.2,
      distance: 15,
      decay: 2,
      color: '#ffffff'
    });
    point.setAttribute('position', '-5 5 5');
    sceneEl.appendChild(point);

    // Ajustes del renderer para sombras realistas
    sceneEl.setAttribute('renderer', {
      physicallyCorrectLights: true,
      toneMapping: 'ACESFilmicToneMapping',
      exposure: 1.0,
      shadowMap: true,
      shadowMapType: 'PCFSoftShadowMap'
    });
  }
});

      