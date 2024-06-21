// document.querySelector("#fotoProyecto1").addEventListener("mouseover", function(){
//     let fotoG1 = document.querySelector("#fotoProyecto1");
//     fotoG1.classList.add("fotoEnGrande");
//     fotoG1.innerHTML();
// });

// document.querySelector("#fotoProyecto1").addEventListener("mouseout", function(){
//     let fotoG1 = document.querySelector("#fotoProyecto1");
//     fotoG1.classList.remove("fotoEnGrande");
// });

let imagenes = [];

imagenes.push(document.querySelector("#fotoProyecto1"));
imagenes.push(document.querySelector("#fotoProyecto2"));
imagenes.push(document.querySelector("#fotoProyecto3"));

for (let i = 0; i < imagenes.length; i++) {

    imagenes[i].addEventListener("mouseover",function(){
        imagenes[i].classList.add("fotoEnGrande");
    })
    
    imagenes[i].addEventListener("mouseout",function(){
        imagenes[i].classList.remove("fotoEnGrande");
    })
}