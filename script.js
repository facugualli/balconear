var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var animacion = document.getElementById('animacion');
var animacion1 = document.getElementById('animacion1');
var modalAnimacion = document.getElementById("parrafo");
var modalAnimacion1 = document.getElementById("parrafo1");
animacion.onclick = function(){
    modal.style.display = "block";
    modalAnimacion.src = this.src;
}

animacion1.onclick = function(){
   modal1.style.display = "block";
   modalAnimacion1.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal1.style.display = "none";
}