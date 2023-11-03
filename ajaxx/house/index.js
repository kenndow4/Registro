
// esta es el simulador de la base de datos

Categoria = {

    casa:[
         
        {
            id:1,
            titulo:'la romana',
            area: ' casa',
            foto:'img/ca1.jpg',
            parrafo: 'Casa en buen estado listo para ti y todo bien',
            estado:'venta',
            precio: 12000
        },

        {
            id:2,
            titulo:'santiago',
            area: ' casa',
            foto:'img/ca2.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo a buen precio por que es heavy',
            precio: 23000
        },

        {
            id:3,
            titulo:'santiago',
            area: ' oficina',
            foto:'img/ofi.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo es muy comoda',
            precio: 7000
        },

        {
            id:3,
            titulo:'san cristobal',
            area: ' casa',
            foto:'img/ca3.jpg',
            estado:'venta',
            parrafo: 'se vende esta propieda buena y soportable',
            precio: 17000
        }


    ]
    

};





const padreAl = document.getElementById('contenedor-alquiler');


const contenidoAlq = ()=>{
   
   
const conte= Categoria.casa;

for(let i=0; i<conte.length; i++){
   
    ele= document.createElement('a');
ele.classList.add('cont-cont');
ele.href = '#';
ele.innerHTML= ` <div class="cont">


<img src="${conte[i].foto}" alt="">

</div>

<p class="titulo-cont">${conte[i].titulo},${conte[i].area}</p>
<p class="par-cont">${conte[i].parrafo}</p>
<div class="cont-alq">
<p class="precio">$RD${conte[i].precio}</p>
<p class="alq">${conte[i].estado}</p>
</div>`;

padreAl.appendChild(ele);


 }



}

contenidoAlq();

const cont = document.querySelectorAll('.cont-cont');

padreAl.addEventListener('click', (e)=>{
    
e.preventDefault();


if(e.target.closest('a')){
    
    document.querySelector('.formato').style.display='block';
    document.body.style.overflow='hidden';

}

});



