var lista = new Array('scripts/tests/1.jpg','scripts/tests/2.jpg', 'scripts/tests/3.jpg' , 'scripts/tests/4.jpg');


var contador = 0;


var tempor = null;


function cambio(sen)


{


    contador+= sen;


    if (contador ==lista.length) 


        contador = 0;


    else  if (contador < 0) 


        contador = lista.length-1;


    document.images.centro.src = lista[contador]


    window.status="Imagen número "+contador


}


function reset()


{


    contador = 0;


    parar();


    document.images.centro.src = lista[0]


}


function parar()


{


if(tempor!=null)


    clearTimeout(tempor);


}


function automat(tiempo, inc=1)


{


    cambio(inc);


    tempor = setTimeout(automat, tiempo, tiempo, inc)


}