const km = parseInt(prompt("insercisci il numero di chilometri che vuoi percorrere"));
console.log(km);

const eta = parseInt(prompt("insercisci la tua età"));
console.log(eta);

let costoBase = (km * 0.21);
console.log(costoBase);

let sconto

if (eta < 18){
  sconto = costoBase * 0.2;
}
else if (eta > 65){
  sconto = costoBase * 0.4;
}
else{
  sconto = 0;
}

let costoFinale = costoBase - sconto;
console.log("Il costo del biglietto è " + costoFinale.toFixed(2));