// cube-component.js
AFRAME.registerComponent('cuadro', {
  schema: {
    position: { type: 'vec3', default: { x: 0, y: 0, z: -20 } },
    rotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
    scale: { type: 'vec3', default: { x: 3, y: 4, z: 0.1 } },
    texture: { type: 'string', default: '#crateTexture' },
     
    info: { type: 'string', default: 'jp' },
    originalScale: { type: 'vec3' },
    newScale: { type: 'vec3' }
  },

  init: function () {
    const data = this.data;
    const el = this.el;
     var sceneEl = document.querySelector('a-scene');

    
    // Crear un elemento <a-box> para el cubo
    const cube = document.createElement('a-box');

    // Establecer la posición, rotación y escala del cubo
    cube.setAttribute('position', data.position);
    cube.setAttribute('rotation', data.rotation);
    cube.setAttribute('scale', data.scale);

    // Establecer la textura del cubo
    cube.setAttribute('src', data.texture);

    // Añadir el cubo a este elemento
    el.appendChild(cube);    
    
    var originalScale = el.getAttribute('scale');
    var newScale = {
        x: this.data.scale.x * 1,
        y: this.data.scale.y * 1,
        z: this.data.scale.z * 1
      };
  
  el.addEventListener('mouseenter', function () { 
      //el.setAttribute('scale', newScale);
      /*originalScale = {
        x: newScale.x * 0.9,
        y: newScale.y * 0.9,
        z: newScale.z * 0.9
      };*/
    });

    el.addEventListener('mouseleave', function () {      
    /*  el.setAttribute('scale', originalScale);
      
      /*el.setAttribute('scale', {
        x: originalScale.x * 1.1,
        y: originalScale.y * 1.1,
        z: originalScale.z * 1.1
      });*/
    });
    
     var info = this.data.info; // Guardar la información del modelo
    // Manejar evento click para mostrar información
    el.addEventListener('click', function () {      
      var modal = document.getElementById("myModal");
      var modalText = document.getElementById("modal-text");
      //modalText.innerText ="JP"+ el.getAttribute('info');
      modalText.innerHTML = info;
      modal.style.display = "block";
    });

    sceneEl.appendChild(el);
  }  
});
