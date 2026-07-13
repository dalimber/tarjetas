function crearTrajetas() 
{
    /*let divTarjetas=document.getElementById("divTarjetas");
    divTarjetas.innerHTML="<h1>MODIFICANDO DIV</h1>";*/
    let contenido="";
    let divTarjetas=document.getElementById("divTarjetas");
    for (let index = 1; index <=5; index++) 
        {
            contenido=contenido+"<div class='item'>"+index+"</div>";
            divTarjetas.innerHTML=contenido;
        }
}
