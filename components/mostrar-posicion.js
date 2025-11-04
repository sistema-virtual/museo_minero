AFRAME.registerComponent('mostrar-posicion', {
    init: function () {
      // Crear texto como HUD
      this.textEl = document.createElement('a-text');
      this.textEl.setAttribute('value', '');
      this.textEl.setAttribute('color', '#FFF');
      this.textEl.setAttribute('side', 'double');
      this.textEl.setAttribute('align', 'left');
      this.textEl.setAttribute('position', '1.5 -1.8 -2.5'); // frente a la cámara
      this.el.appendChild(this.textEl);
  
      // Vector auxiliar para calcular posición mundial
      this.worldPos = new THREE.Vector3();
    },
  
    tick: function () {
      // Obtener posición absoluta en el mundo
      this.el.object3D.getWorldPosition(this.worldPos);
      const text = `X: ${this.worldPos.x.toFixed(2)}, Y: ${this.worldPos.y.toFixed(2)}, Z: ${this.worldPos.z.toFixed(2)}`;
      this.textEl.setAttribute('value', text);
    }
  });
  