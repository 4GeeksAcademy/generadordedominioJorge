import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    let pronombre = ["el", "la", "las"];
    let adjetivo = ["deporte", "increible", "salsa"];
    let nombre = ["pelotas", "tijeras", "ramas"];
    let dominio = [".es", ".com", ".zapatilla"];



  for (let p = 0; p < pronombre.length; p++) {
    for (let a = 0; a < adjetivo.length; a++) {
      for (let n = 0; n < nombre.length; n++) {
        for (let d = 0; d < dominio.length; d++) {

          console.log(pronombre[p]+ adjetivo[a]+ nombre[n]+ dominio[d]
          );

        }
      }
    }
  }
};

