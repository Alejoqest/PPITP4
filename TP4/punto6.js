const persona = [
  {nombre: "Juan", edad: 23},
  {nombre: "Mario", edad: 32},
  {nombre: "Alejandro", edad: 25},
  {nombre: "Leonardo", edad: 24}
]
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM a sido completamente cargado y leido.");
  console.log(persona.length)
  let html = "<tr> <th>Nombre</th> <th>Edad</th> <tr>";
  for (let i = 0; i < persona.length; i++) {
    html += "\n<tr> <td>"+persona[i].nombre+"</td> <td>"+persona[i].edad+"</td></tr>";
    console.log(html);
  }
    document.getElementById("punto6table").innerHTML= html;
})