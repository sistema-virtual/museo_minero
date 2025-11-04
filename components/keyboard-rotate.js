AFRAME.registerComponent('keyboard-rotate', {
    schema: { speed: { type: 'number', default: 60 } }, // velocidad en grados por segundo
  
    init: function () {
      this.isRotatingLeft = false;
      this.isRotatingRight = false;
  
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);
  
      window.addEventListener('keydown', this.onKeyDown);
      window.addEventListener('keyup', this.onKeyUp);
    },
  
    onKeyDown: function (event) {
      switch (event.key.toLowerCase()) {
        case 'q':
          this.isRotatingLeft = true;
          break;
        case 'e':
          this.isRotatingRight = true;
          break;
      }
    },
  
    onKeyUp: function (event) {
      switch (event.key.toLowerCase()) {
        case 'q':
          this.isRotatingLeft = false;
          break;
        case 'e':
          this.isRotatingRight = false;
          break;
      }
    },
  
    tick: function (time, deltaTime) {
      // deltaTime está en milisegundos, convertimos a segundos
      const deltaSeconds = deltaTime / 1000;
      const lookControls = this.el.components['look-controls'];
      if (!lookControls) return;
  
      const speedRad = THREE.MathUtils.degToRad(this.data.speed) * deltaSeconds;
  
      if (this.isRotatingLeft) {
        lookControls.yawObject.rotation.y += speedRad;
      }
      if (this.isRotatingRight) {
        lookControls.yawObject.rotation.y -= speedRad;
      }
    },
  
    remove: function () {
      window.removeEventListener('keydown', this.onKeyDown);
      window.removeEventListener('keyup', this.onKeyUp);
    }
  });
    