const persona = [
  {nombre: "Juan", edad: 23},
  {nombre: "Mario", edad: 32},
  {nombre: "Alejandro", edad: 25},
  {nombre: "Leonardo", edad: 24},
  {nombre: "Luis", edad: 30}
]
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("PUNTO 6\nDOM a sido completamente cargado y leido.");
  let html = "<tr> <th>Nombre</th> <th>Edad</th> <tr>";
  for (let i = 0; i < persona.length; i++) {
    html += "\n<tr> <td>"+persona[i].nombre+"</td> <td>"+persona[i].edad+"</td></tr>";
  }
    document.querySelector("#punto6table").innerHTML= html;
})