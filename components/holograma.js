class FloatingImage {
  constructor(src, position, rotation, scale, floatSpeed = 2000) {
    this.src = src;
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.floatSpeed = floatSpeed;
  }

  createEntity() {
    const container = document.createElement("a-entity");
    container.setAttribute("position", `${this.position.x} ${this.position.y} ${this.position.z}`);
    container.setAttribute("rotation", `${this.rotation.x} ${this.rotation.y} ${this.rotation.z}`);

    // === Imagen principal ===
    const image = document.createElement("a-plane");
    image.setAttribute("src", this.src);
    image.setAttribute("scale", `${this.scale.x} ${this.scale.y} 1`);
    image.setAttribute("material", {
      shader: "flat",
      transparent: true,
      opacity: 1,
      depthWrite: false
    });
    container.appendChild(image);

     // === Imagen reflejada detrás ===
     const backImage = document.createElement("a-plane");
     backImage.setAttribute("src", this.src);
     //backImage.setAttribute("position", "0 0 0"); // un poco atrás
     backImage.setAttribute("rotation", "0 180 0");   // volteada
     backImage.setAttribute("scale", `${this.scale.x} ${this.scale.y} 1`);
     backImage.setAttribute("material", {
       shader: "flat",
       transparent: true,
       opacity: 1,
       side: "front",   // 👈 clave: también 'front' (porque ya está girada)
       depthWrite: true
     });
  container.appendChild(backImage);

    // === Recuadro holográfico translúcido ===
    const glass = document.createElement("a-plane");
    glass.setAttribute("position", `0 0 0.01`);
    glass.setAttribute("width", this.scale.x * 1.05);
    glass.setAttribute("height", this.scale.y * 1.05);
    glass.setAttribute("material", {
      shader: "flat",
      color: "#88ccff",
      transparent: true,
      opacity: 0.25,
      side: "double",
      depthWrite: false
    });
    container.appendChild(glass);

    // === Halo luminoso ===
    const halo = document.createElement("a-plane");
    halo.setAttribute("position", `0 0 -0.01`); // detrás de la imagen
    halo.setAttribute("scale", `${this.scale.x * 1.3} ${this.scale.y * 1.4} 1`);
    halo.setAttribute("material", {
      shader: "flat",
      color: "#00ffff",
      transparent: true,
      opacity: 0.12,
      side: "double",
      depthWrite: false
    });

    container.appendChild(halo);

    // === Animación de flotación ===
    container.setAttribute(
      "animation__float",
      `property: position; dir: alternate; dur: ${this.floatSpeed};
       loop: true; to: ${this.position.x} ${this.position.y + 0.5} ${this.position.z};
       easing: easeInOutSine`
    );
    container.setAttribute(
      "proximity-visibility",
      "target: #cam; showDistance: 18; hideDistance: 19; fade: true"
    );
    
    return container;
  }
}

/* la misma clase pero con las imagenes mas claras por colocarles adelate del holo
class FloatingImage {
  constructor(src, position, scale, floatSpeed = 2000) {
    this.src = src;
    this.position = position;
    this.scale = scale;
    this.floatSpeed = floatSpeed;
  }

  createEntity() {
    const container = document.createElement("a-entity");
    container.setAttribute("position", `${this.position.x} ${this.position.y} ${this.position.z}`);

  // === Imagen principal (frontal) ===
const image = document.createElement("a-plane");
image.setAttribute("src", this.src);
image.setAttribute("position", "0 0 0.02"); // un poco adelante
image.setAttribute("scale", `${this.scale.x} ${this.scale.y} 1`);
image.setAttribute("material", {
  shader: "flat",
  transparent: true,
  opacity: 1,
  side: "front",   // sólo cara frontal
  depthWrite: true
});
container.appendChild(image);

// === Imagen reflejada (reverso visible) ===
const backImage = document.createElement("a-plane");
backImage.setAttribute("src", this.src);
backImage.setAttribute("position", "0 0 -0.02"); // un poco atrás
backImage.setAttribute("rotation", "0 180 0");   // volteada
backImage.setAttribute("scale", `${this.scale.x} ${this.scale.y} 1`);
backImage.setAttribute("material", {
  shader: "flat",
  transparent: true,
  opacity: 1,
  side: "front",   // 👈 clave: también 'front' (porque ya está girada)
  depthWrite: true
});
container.appendChild(backImage);


    // === Recuadro de vidrio ligeramente separado (evita oscurecer la imagen) ===
    const glass = document.createElement("a-plane");
    glass.setAttribute("position", `0 0 0.05`); // se separa más del plano
    glass.setAttribute("width", this.scale.x * 1.1);
    glass.setAttribute("height", this.scale.y * 1.2);
    glass.setAttribute("material", {
      shader: "flat",
      color: "#88ccff",
      transparent: true,
      opacity: 0.15, // menos opaco
      side: "double",
      depthWrite: false
    });
    container.appendChild(glass);

    // === Halo luminoso detrás (más lejos, no tapa la imagen) ===
    const halo = document.createElement("a-plane");
    halo.setAttribute("position", `0 0 -0.05`);
    halo.setAttribute("scale", `${this.scale.x * 1.3} ${this.scale.y * 1.4} 1`);
    halo.setAttribute("material", {
      shader: "flat",
      color: "#00ffff",
      transparent: true,
      opacity: 0.1,
      side: "double",
      depthWrite: false
    });

    halo.setAttribute(
      "animation__pulse",
      `property: material.opacity; dir: alternate; dur: 1500;
       loop: true; to: 0.25; easing: easeInOutSine`
    );
    // Animación de pulsación del halo
    halo.setAttribute(
      "animation__pulse",
      `property: material.opacity; dir: alternate; dur: 1500;
       loop: true; to: 0.25; easing: easeInOutSine`
    );


    container.appendChild(halo);

    // === Animación de flotación ===
    container.setAttribute(
      "animation__float",
      `property: position; dir: alternate; dur: ${this.floatSpeed};
       loop: true; to: ${this.position.x} ${this.position.y + 0.5} ${this.position.z};
       easing: easeInOutSine`
    );

    container.setAttribute(
      "proximity-visibility",
      "target: #cam; showDistance: 15; hideDistance: 16; fade: true"
    );

    return container;
  }
}
*/