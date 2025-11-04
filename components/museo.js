
AFRAME.registerComponent('museo', {
  init: function () {
    var ambiente = document.createElement('a-entity');
    ambiente.setAttribute('ambiente', '');
        
    var escena = document.querySelector('a-scene');
    escena.appendChild(ambiente);
    const sx=0.023;
    const sy=0.023;
    const sz=0.023;    
    // Definir la lista de modelos y sus posiciones
    var text_federico = texto_federico();
    var text_ireneo = texto_ireneo();
    var text_issac = texto_issac();
    var text_filemon = texto_filemon();
    var text_cirilo = texto_cirilo();
    var text_domitila = texto_domitila();
       
    var modelos = [
      {src: '#federico', pedestalSrc: '#pedestal', position: {x: -27, y: 5, z: -37}, rotation: {x: 0, y: 90, z: 0}, scale: {x: sx, y: sy, z: sz}, info: text_federico},
      {src: '#issac', pedestalSrc: '#pedestal', position: {x: -60, y: 5, z: -110}, rotation: {x: 0, y: 0, z: 0}, scale: {x: sx, y: sy, z: sz}, info: text_issac},      
      {src: '#filemon', pedestalSrc: '#pedestal', position: {x: -170, y: 1.65, z: -54}, rotation: {x: 0, y: 90, z: 0}, scale: {x: 0.1, y: 0.1, z: 0.1}, info: text_filemon},
      {src: '#ireneo', pedestalSrc: '#pedestal', position: {x: -75, y: 5, z: 0}, rotation: {x: 0, y: 180, z: 0}, scale: {x: sx, y: sy, z: sz}, info: text_ireneo},
      {src: '#cirilo', pedestalSrc: '#pedestal', position: {x: -35, y: 5, z: -5}, rotation: {x: 0, y: -90, z: 0}, scale: {x: sx, y: sy, z: sz}, info: text_cirilo},
      {src: '#domitila', pedestalSrc: '#pedestal', position: {x: -108, y: 4, z: -69}, rotation: {x: 0, y: 0, z: 0}, scale: {x: 0.1, y: 0.1, z: 0.1}, info: text_domitila}     
    ];

    // Iterar sobre la lista de modelos y crear instancias del componente modelo-3d
    for (var i = 0; i < modelos.length; i++) {
      var modeloData = modelos[i];
      var modeloEl = document.createElement('a-entity');
      modeloEl.setAttribute('modelo-3d', modeloData);
      this.el.appendChild(modeloEl);
    }

    // Definir la lista de cuadros flotantes y sus posiciones
    var cuadros = [
      //Letreros Federico
      { position: { x: -5, y: 1, z: -13 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 13, y: 18, z: 0.2 }, texture: '#text_federico1', info: text_federico},
      { position: { x: -5, y: 1, z: -40 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 13, y: 18, z: 0.2 }, texture: '#text_federico2', info: text_federico},
      { position: { x: -5, y: 1, z: -65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 13, y: 18, z: 0.2 }, texture: '#text_federico3', info: text_federico},
      
      //Letreros Issac Camacho
      { position: { x: -40, y: 1, z: -90 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_issac1', info: text_issac },      
      { position: { x: -70, y: 1, z: -90 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_issac2', info: text_issac },
      { position: { x: -100, y: 1, z: -90 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_issac3', info: text_issac },
      //Letreros Filemon
      { position: { x: -140, y: 1, z: -80 }, rotation: { x: 0, y: -45, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_filemon1', info: text_filemon },
      { position: { x: -140, y: 1, z: -65 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_filemon2', info: text_filemon },
      { position: { x: -140, y: 1, z: -35 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_filemon3', info: text_filemon },
      
      //Letreros Ireneo
      { position: { x: -130, y: 1, z: -15 }, rotation: { x: 0, y: 45, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_ireneo1', info: text_ireneo },
      { position: { x: -90, y: 1, z: -15 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_ireneo2', info: text_ireneo },
      //Letreros Cirilo
      { position: { x: -55, y: 1, z: -15 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_cirilo1', info: text_cirilo },
      { position: { x: -43, y: 1, z: -35 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 12, y: 18, z: 0.2 }, texture: '#text_cirilo2', info: text_cirilo },

      //Letreros Domitila
      { position: { x: -80, y: 1, z: -57 }, rotation: { x: 0, y: 90, z: 0 }, scale: { x: 13, y: 18, z: 0.2 }, texture: '#text_domitila1', info: text_domitila },
      { position: { x: -108, y: 1, z: -28 }, rotation: { x: 0, y: -45, z: 0 }, scale: { x: 13, y: 18, z: 0.2 }, texture: '#text_domitila2', info: text_domitila }
      
    ];

    // Crear imágenes flotantes con la clase
    for (var j = 0; j < cuadros.length; j++) {
      var c = cuadros[j];
      const panel = new FloatingImage(c.texture, c.position, c.rotation,c.scale, 1100);
      const panelEntity = panel.createEntity();
      this.el.appendChild(panelEntity);
    }

    // Iterar sobre la lista de cuadros y crear instancias del componente cuadro
   /* for (var j = 0; j < cuadros.length; j++) 
   {
      var cuadroData = cuadros[j];
      var cuadroEl = document.createElement('a-entity');
      cuadroEl.setAttribute('cuadro', {
        position: cuadroData.position,
        rotation: cuadroData.rotation,
        scale: cuadroData.scale,
        texture: cuadroData.texture,
        info: cuadroData.info
        
      });
      this.el.appendChild(cuadroEl);
    }*/
  }
});
