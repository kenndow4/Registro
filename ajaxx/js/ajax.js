var btn= document.getElementById('btn_cargar_usuarios');
var loader= document.getElementById('loader');


btn.addEventListener('click', function(){
  
    var peticion= new XMLHttpRequest();

    loader.classList.add('active');

    peticion.onload= function(){
        
        datos= JSON.parse(peticion.responseText);
       

       for(i=0; i<= 5; i++){

        var elemento= document.createElement('tr');
        elemento.innerHTML += ('<td>' + datos[i].id + '<td>');
        elemento.innerHTML += ('<td>' + datos[i].nombre + '<td>');
        elemento.innerHTML += ('<td>' + datos[i].edad + '<td>');
        elemento.innerHTML += ('<td>' + datos[i].pais + '<td>');
        elemento.innerHTML += ('<td>' + datos[i].correo + '<td>');

        document.getElementById('tabla').appendChild(elemento);
       }

       


    }

    peticion.onreadystatechange= function(){
       if(peticion.readyState== 4 && peticion.status == 200){
          loader.classList.remove('active');
       }
    }

    peticion.open('GET', 'https://api.npoint.io/9a2d9823e64589b3a448');
    peticion.send();

});