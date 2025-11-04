AFRAME.registerComponent('proximity-visibility', {
    schema: {
      target: { type: 'selector' },
      showDistance: { type: 'number', default: 3 },
      hideDistance: { type: 'number', default: 4 },
      fade: { type: 'boolean', default: true }
    },
  
    init: function () {
      this.visible = false;
      this.el.object3D.visible = false;
    },
  
    tick: function () {
      if (!this.data.target || !this.data.target.object3D) return;
  
      const camPos = new THREE.Vector3();
      const objPos = new THREE.Vector3();
      this.data.target.object3D.getWorldPosition(camPos);
      this.el.object3D.getWorldPosition(objPos);
  
      const distance = camPos.distanceTo(objPos);
      //console.log(distance);
  
      if (!this.visible && distance <= this.data.showDistance) {
        this.setVisibility(true);
      } else if (this.visible && distance >= this.data.hideDistance) {
        this.setVisibility(false);
      }
    },
  
    setVisibility: function (visible) {
      if (this.visible === visible) return;
      this.visible = visible;
    
      // Solo cambia la visibilidad del objeto completo
      this.el.object3D.visible = visible;
    }
    /*setVisibility: function (visible) {
      if (this.visible === visible) return;
      this.visible = visible;
  
      const fadeTargets = this.el.querySelectorAll('[material]');
  
      if (this.data.fade) {
        fadeTargets.forEach((child) => {
          child.setAttribute('animation__fade', {
            property: 'material.opacity',
            to: visible ? 1 : 0,
            dur: 500,
            easing: 'easeInOutQuad'
          });
        });
  
        if (visible) {
          this.el.object3D.visible = true;
        } else {
          setTimeout(() => (this.el.object3D.visible = false), 500);
        }
      } else {
        this.el.object3D.visible = visible;
      }
    }*/
  });
  