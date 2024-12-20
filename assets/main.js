const iconos = [
  { icono: "🚗", descripcion: "Auto" },
  { icono: "🤖", descripcion: "Robot" },
  { icono: "👻", descripcion: "Fantasma" },
  { icono: "👽", descripcion: "Alien" },
  { icono: "🦷", descripcion: "Diente" },
  { icono: "🕹", descripcion: "Joystick" },
];

const seccionIconos = document.querySelector(".iconos");

for (const icono of iconos) {
  const template = `
    <div class="icono">
      <span>${icono.icono}</span>
      <p>${icono.descripcion}</p>
    </div>
  `;
  seccionIconos.innerHTML += template;
}
