document.addEventListener("DOMContentLoaded", (event) => {
  const kinetic_mass = document.getElementById("kinetic.mass");
  const kinetic_speed = document.getElementById("kinetic.speed");
  kinetic_mass.addEventListener("input", (event) => {
    calcKineticEnergy();
  });
  kinetic_speed.addEventListener("input", (event) => {
    calcKineticEnergy();
  });

  const spring_constant = document.getElementById("spring.constant");
  const spring_displacement = document.getElementById("spring.displacement");
  spring_constant.addEventListener("input", (event) => {
    calcSpringForce();
  });
  spring_displacement.addEventListener("input", (event) => {
    calcSpringForce();
  });

  const potential_mass = document.getElementById("potential.mass");
  const potential_height = document.getElementById("potential.height");
  potential_mass.addEventListener("input", (event) => {
    calcPotentialEnergy();
  });
  potential_height.addEventListener("input", (event) => {
    calcPotentialEnergy();
  });
});

function calcKineticEnergy() {
  const mass = parseFloat(document.getElementById("kinetic.mass").value);
  const speed = parseFloat(document.getElementById("kinetic.speed").value);
  if (!mass || !speed) {
    return;
  }
  const kinetic_energy = 0.5 * mass * speed * speed;
  document.getElementById("kinetic.result").value = kinetic_energy;
}

function calcSpringForce() {
  const k = parseFloat(document.getElementById("spring.constant").value);
  const x = parseFloat(document.getElementById("spring.displacement").value);
  if (!k || !x) {
    return;
  }
  const spring_force = k * x;
  document.getElementById("spring.result").value = spring_force;
}

function calcPotentialEnergy() {
  const mass = parseFloat(document.getElementById("potential.mass").value);
  const height = parseFloat(document.getElementById("potential.height").value);
  const g = 9.8; // acceleration due to gravity in m/s^2
  if (!mass || !height) {
    return;
  }
  const potential_energy = mass * height * g;
  document.getElementById("potential.result").value = potential_energy;
}
