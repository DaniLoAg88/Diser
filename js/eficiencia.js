
let electrodomestico = ["Nevera", "Vitroceramica", "Microondas", "Horno", "Lavavajillas", "Lavadora", "Television", "Aire acondicionado", "Calefaccion"];
let potencia = ["Entre 0.250 - 0.350 kW", "Entre 0.900 - 2000 kW", "Entre 0.900 - 1500 kW", "Entre 1200 - 2200 kW", "Entre 1500 - 2200 kW", "Entre 1500 - 2200 kW", "Entre 0.150 - 0.400 kW", "Entre 0.900 - 2000 kW", "Entre 1000 - 2500kW"];

let desplegable = document.querySelector("#selPotencias");

for (let i = 0; i < electrodomestico.length; i++) {
    let opcion = document.createElement("option");
    opcion.setAttribute("value", potencia[i]);
    opcion.textContent = electrodomestico[i];
    opcion.setAttribute("id", i);
    desplegable.appendChild(opcion);
}


document.querySelector("#selPotencias").addEventListener("change", function () {
    let elegido = document.querySelector("#selPotencias");
    let parrafo = document.querySelector("#salidaPotencias");
    parrafo.innerHTML = elegido.value;
});


