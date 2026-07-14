function crearTarjetas() 
{
    /*let divTarjetas=document.getElementById("divTarjetas");
    divTarjetas.innerHTML="<h1>MODIFICANDO DIV</h1>";*/
    let contenido="";
    let divTarjetas=document.getElementById("divTarjetas");
    //RECUPERAMOS VALORES DE ELEMENTOS INPUT
    let cmpTxtDesde=document.getElementById("txtDesde");
    let cmpTxtHasta=document.getElementById("txtHasta");
    //CONVERTIMOS VALORES STRING A NUMERO
    numDesde=parseInt(cmpTxtDesde.value);
    numHasta=parseInt(cmpTxtHasta.value);
    for (let index = numDesde; index <=numHasta; index++) 
        {
            contenido=contenido+"<div class='item'>"+index+"</div>";
            divTarjetas.innerHTML=contenido;
        }
}
