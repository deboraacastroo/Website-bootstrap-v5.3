//EXEMPLO PARA FAZER A GALERIA
// // FANCYBOX / LIGHTBOX EFFECT

// Fancybox.bind("[data-fancybox]", {
//     // Your custom options
// });

// const photos = [
//     {
//         name: "Imagem 1",
//         img: "portfolio1.jpg",
//     },
//     {
//         name: "Imagem 2",
//         img: "portfolio2.jpg",
//     },
//     {
//         name: "Imagem 3",
//         img: "portfolio3.jpg",
//     },
//     {
//         name: "Imagem 4",
//         img: "portfolio4.jpg",
//     },
//     {
//         name: "Imagem 5",
//         img: "portfolio5.jpg",
//     },
// ];

// function galeria() {
//     const galeriaGrelha = document.querySelector("#galeria-grelha");

//     for (photo of photos) {
//         let codigo;

//         codigo = `
//           <div class="col">
//               <figure>
//                   <a href="Imagens/${photo.img}" data-fancybox="Imagem 1" data-caption="${photo.name}">
//                       <img src="Imagens/${photo.img}" alt="" class="img-fluid">
//                   </a>
//               </figure>
//           </div>
//         `;
//         galeriaGrelha.innerHTML += codigo;
//     }
// }

// galeria();



const bola1 = document.getElementById('bola');
const butao1 = document.getElementById('botao');
 
const bola2 = document.getElementById('bola2');
const butao2 = document.getElementById('botao2');
 
const bola3 = document.getElementById('bola3');
const butao3 = document.getElementById('botao3');
 
 
butao1.addEventListener("mouseover", function () {
    butao1.style.backgroundColor = "rgb(6, 155, 214)";
    bola1.style.backgroundColor = "rgb(6, 155, 214)";
});
butao1.addEventListener("mouseout", function () {
    butao1.style.backgroundColor = "rgb(81, 87, 92)";
    bola1.style.backgroundColor = "rgb(81, 87, 92)";
});
 
 
butao2.addEventListener("mouseover", function () {
    butao2.style.backgroundColor = "rgb(6, 155, 214)";
    bola2.style.backgroundColor = "rgb(6, 155, 214)";
});
butao2.addEventListener("mouseout", function () {
    butao2.style.backgroundColor = "rgb(81, 87, 92)";
    bola2.style.backgroundColor = "rgb(81, 87, 92)";
});
 
 
butao3.addEventListener("mouseover", function () {
    butao3.style.backgroundColor = "rgb(6, 155, 214)";
    bola3.style.backgroundColor = "rgb(6, 155, 214)";
});
butao3.addEventListener("mouseout", function () {
    butao3.style.backgroundColor = "rgb(81, 87, 92)";
    bola3.style.backgroundColor = "rgb(81, 87, 92)";
}); 
    
