// Requiere: floatingImage.js, panelText.js, statue3D.js
AFRAME.registerComponent('octagonal-room', {
    schema: {
      radius: { type: 'number', default: 15 },
      height: { type: 'number', default: 4 },
      modelScale: { type: 'vec3', default: { x: 0.01, y: 0.01, z: 0.01 } }
    },
  
    init: function () {
      const scene = this.el;
      const r = this.data.radius;
  
      // === Ambiente oscuro ===
      const ambient = document.createElement('a-entity');
      ambient.setAttribute('light', { type: 'ambient', color: '#222', intensity: 0.5 });
      scene.appendChild(ambient);
  
      // === Datos fijos en todos los muros ===
      const muroData = { name: 'Federico', img: '#img_federico', model: '#model_federico', text: 'Federico Escobar Zapata' };
      const muros = Array(8).fill(muroData);
  
      muros.forEach((muro, i) => {
        const angle = (i * 45) * Math.PI / 180;
        const x = Math.sin(angle) * r;
        const z = Math.cos(angle) * r;
  
        const dx = -x;
        const dz = -z;
        const rotY = Math.atan2(dx, dz) * 180 / Math.PI;
  
        // === Grupo del muro ===
        const wallGroup = document.createElement('a-entity');
        wallGroup.setAttribute('position', `${x} 0 ${z}`);
        wallGroup.setAttribute('rotation', `0 ${rotY} 0`);
  
        // === HOLOGRAMA FLOTANTE ===
        const holo = new FloatingImage(
          muro.img,
          { x: -2, y: 1.5, z: 0 },
          { x: 2, y: 2, z: 1 }
        );
        wallGroup.appendChild(holo.createEntity());
  
        // === ESTATUA ===
        const statue = document.createElement('a-entity');
        statue.setAttribute('gltf-model', muro.model);
        statue.setAttribute('position', `2 0 0`);
        const s = this.data.modelScale;
        statue.setAttribute('scale', `${s.x} ${s.y} ${s.z}`);
        wallGroup.appendChild(statue);

        // Generar una duración aleatoria entre 25 y 40 segundos
let rotationDuration = 25000 + Math.random() * 15000;

statue.setAttribute('animation', {
  property: 'rotation',
  to: `0 360 0`,
  loop: true,
  dur: rotationDuration,
  easing: 'linear'
});
  
        // === LUZ DEBAJO DE LA ESTATUA ===
        const statueLight = document.createElement('a-entity');
        statueLight.setAttribute('light', {
          type: 'spot',
          color: '#ffffff',
          intensity: 2,
          distance: 20,
          angle: 45,
          decay: 1,
          penumbra: 0.5
        });
        statueLight.setAttribute('position', `2 -11 0`);
        statueLight.setAttribute('rotation', `90 0 0`);
        wallGroup.appendChild(statueLight);
  
        // === LUZ FRONTAL DE LA ESTATUA ===
        const frontLight = document.createElement('a-entity');
        frontLight.setAttribute('light', {
          type: 'point',
          color: '#ffffff',
          intensity: 0.2,
          distance: 15,
          angle: 60,
          decay: 1,
          penumbra: 0.3
        });
        frontLight.setAttribute('position', `2 3 5`);
        frontLight.setAttribute('rotation', `-15 180 0`);
        wallGroup.appendChild(frontLight);
  
        // === CARTEL SUPERIOR FOSFORESCENTE AZUL-CELSTE ===
        const cartelGroup = document.createElement('a-entity');
        cartelGroup.setAttribute('position', `0 ${this.data.height} 0`);
  
        // Plano trasero para simular brillo
        const glowPlane = document.createElement('a-plane');
        glowPlane.setAttribute('width', 4);
        glowPlane.setAttribute('height', 1);
        glowPlane.setAttribute('material', {
          color: '#7DF9FF',
          emissive: '#7DF9FF',
          emissiveIntensity: 0.8,
          opacity: 0.3,
          transparent: true
        });
        glowPlane.setAttribute('rotation', '-0.1 0 0');
        cartelGroup.appendChild(glowPlane);
  
        // Texto real
        const cartel = document.createElement('a-text');
        cartel.setAttribute('value', muro.text);
        cartel.setAttribute('align', 'center');
        cartel.setAttribute('color', '#7DF9FF');
        cartel.setAttribute('width', 4);
        cartel.setAttribute('position', '0 0 0.01');
        cartelGroup.appendChild(cartel);
  
        // Animación de pulso del brillo (solo afecta al plano)
        glowPlane.setAttribute('animation__pulse', `
          property: material.emissiveIntensity;
          from: 0.5; to: 2;
          dur: 1500;
          dir: alternate;
          loop: true;
          easing: easeInOutSine
        `);
  
        wallGroup.appendChild(cartelGroup);
  
        // Añadir el muro completo a la escena
        scene.appendChild(wallGroup);
      });
    }
  });
      