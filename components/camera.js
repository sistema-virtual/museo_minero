/*AFRAME.registerComponent('camara', {
  init: function () {
    var el = this.el;
    var posicionCamaraEl = document.createElement('a-entity');
    posicionCamaraEl.setAttribute('position', '0 -1 -3');
    posicionCamaraEl.setAttribute('text', {
      value: 'Posición de la cámara: (0, 0, 0)',
      align: 'center',
      width: 4
    });
    el.appendChild(posicionCamaraEl);

    // Actualizar la posición de la cámara en cada fotograma
    this.tick = function () {
      var camera = document.getElementById('miCamara');
      if (!camera) return; // Salir si la cámara no está presente
      var cameraPosition = camera.getAttribute('position');
      var posicionTexto = 'Posición de la cámara: (' + cameraPosition.x.toFixed(2) + ', ' + cameraPosition.y.toFixed(2) + ', ' + cameraPosition.z.toFixed(2) + ')';
      posicionCamaraEl.setAttribute('text', 'value', posicionTexto);
    };
  }
});*/

AFRAME.registerComponent('camara', {
  init: function () {
    var el = this.el;
    var posicionCamaraEl = document.createElement('a-entity');
    posicionCamaraEl.setAttribute('position', '0 -2 -3');
    posicionCamaraEl.setAttribute('text', {
      value: 'Posicion de la camara: (0, 0, 0)',
      align: 'center',
      width: 4
    });
    el.appendChild(posicionCamaraEl);

    // Actualizar la posición de la cámara en cada fotograma
    this.tick = function () {
      var camera = document.getElementById('miCamara');
      if (!camera) return; // Salir si la cámara no está presente
      var cameraPosition = camera.getAttribute('position');
      var posicionTexto = 'Posicion de la camara: (' + cameraPosition.x.toFixed(2) + ', ' + cameraPosition.y.toFixed(2) + ', ' + cameraPosition.z.toFixed(2) + ')';
      posicionCamaraEl.setAttribute('text', 'value', posicionTexto);
      
    //es para emitir el evento camara move que funciona pero al recibir en ambiente no daba
      /*var currentPosition = this.currentPosition || {x: 0, y: 0, z: 0};

        // Emitir el evento cameramove con la nueva posición de la cámara
        el.sceneEl.emit('cameramove', { position: cameraPosition });
        //console.log("Se movió la cámara a:", cameraPosition);
        this.currentPosition = cameraPosition;      
      */
    };
  }
});
/*AFRAME.registerComponent('camara', {
  init: function () {
    var el = this.el;
    var cameraEl = document.getElementById('miCamara');

    if (cameraEl) {
      console.log("Cámara encontrada.");
    } else {
      console.log("No se encontró la cámara.");
    }

    // Controlador de eventos para detectar movimiento de la cámara
    this.tick = function () {
      var cameraPosition = cameraEl.getAttribute('position');
      var currentPosition = this.currentPosition || {x: 0, y: 0, z: 0};

      if (cameraPosition.x !== currentPosition.x ||
          cameraPosition.y !== currentPosition.y ||
          cameraPosition.z !== currentPosition.z) {
        // Emitir el evento cameramove con la nueva posición de la cámara
        el.sceneEl.emit('cameramove', { position: cameraPosition });
        console.log("Se movió la cámara a:", cameraPosition);
        this.currentPosition = cameraPosition;
      }
    };
  }
});
*/