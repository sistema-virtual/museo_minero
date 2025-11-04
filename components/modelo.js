AFRAME.registerComponent('modelo-3d', {
  
  schema: {
    src: { type: 'asset', default: '' },
    pedestalSrc: { type: 'asset', default: '' },
    position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
    rotation: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
    scale: { type: 'vec3', default: { x: 0.1, y: 0.1, z: 0.1 } },
    info: { type: 'string', default: 's' },
    originalScale: { type: 'vec3' },
    newScale: { type: 'vec3' }// Almacenar la escala original del modelo
  },

  init: function () {
    var sceneEl = document.querySelector('a-scene');
    var el = this.el;
    el.setAttribute('position', this.data.position);
    el.setAttribute('rotation', this.data.rotation);
    el.setAttribute('scale', this.data.scale);    
    var originalScale = el.getAttribute('scale');
    var newScale = {
        x: this.data.scale.x * 1.1,
        y: this.data.scale.y * 1.1,
        z: this.data.scale.z * 1.1
      };
  //  alert("ORIGINAL x="+originalScale.x+" NUEVO x="+newScale.x);
    // Crear modelo principal
    var modeloPrincipal = document.createElement('a-entity');
    modeloPrincipal.setAttribute('gltf-model', this.data.src);
    el.appendChild(modeloPrincipal);
     // Sombras y realismo
     modeloPrincipal.setAttribute('shadow', 'cast: true; receive: true');
     modeloPrincipal.setAttribute('material', 'shader: standard; metalness: 0.4; roughness: 0.6;');
       
    // Crear pedestal
    var pedestal = document.createElement('a-entity');
    pedestal.setAttribute('gltf-model', this.data.pedestalSrc);
    pedestal.setAttribute('position', '0 -810 0');
    pedestal.setAttribute('scale', '140 140 140');
    el.appendChild(pedestal);

    // Manejar eventos para animación de agrandamiento
    el.addEventListener('mouseenter', function () {
    /*  var originalScale = el.getAttribute('scale');
      var newScale = {
        x: originalScale.x * 1.1,
        y: originalScale.y * 1.1,
        z: originalScale.z * 1.1
      };*/
      //el.setAttribute('scale', newScale);
     // alert("NUEVO x="+newScale.x);
      el.setAttribute('scale', newScale);
      originalScale = {
        x: newScale.x * 0.9,
        y: newScale.y * 0.9,
        z: newScale.z * 0.9
      };
    });

    el.addEventListener('mouseleave', function () {   
      el.setAttribute('scale', originalScale);      
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
