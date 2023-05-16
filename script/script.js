function calPrecioFinal() {
    console.log("ingreso a calcular suscripción");

    //en cantEnt almacenamos la cantidad de suscripcion que ingreso el usuario
    let cantSuscrip=document.getElementById("cantSuscrip").value; 
    console.log("cantSuscrip: " + cantSuscrip);

    
    let porcDesc=document.getElementById("porcDescuento").value;
    console.log("porcDescuento: " + porcDesc);

    //en descuento almacenamos los pesos totales a descontar
    let descuento=(cantSuscrip*1000) * porcDesc/100;
    console.log("porcDescuento: " + descuento);

    
    let precioTotal=(cantSuscrip*1000) - descuento;
    console.log("valorTotal: " + precioTotal);

    
    // modificando dinámicamente el html para colocar el precio total en la pantalla
    document.getElementById("valorTotal ").value=valorTotal;
}


(function() {
    //a partir de que punto del scroll vertical de la ventana mostrará el botón
    const ishow = 115
    const $divtop = document.getElementById("div-totop")
    window.addEventListener("scroll", function() {
        if(document.documentElement.scrollTop > ishow){
            $divtop.style.display = "inherit"
        }
        else {
            $divtop.style.display = "none"
        }
    })
  })()

  