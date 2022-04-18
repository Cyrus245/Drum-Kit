 for (i = 0; i < document.querySelectorAll(".drum").length; i++) {



     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

         var sounds = this.innerHTML;

         playingSound(sounds);
         buttonAnimation(sounds);





     })

     //  var audio = new Audio('sounds/kick-bass.mp3');
     //  audio.play();


 }


 document.addEventListener("keypress", function (event) {

     playingSound(event.key);
     buttonAnimation(event.key)




 })



 function playingSound(key) {



     switch (key) {
         case "w":

             var kick = new Audio('sounds/kick-bass.mp3');
             kick.play();

             break;

         case "a":

             var snare = new Audio('sounds/snare.mp3');
             snare.play();

             break;

         case "s":

             var tom1 = new Audio('sounds/tom-1.mp3');
             tom1.play();

             break;

         case "d":

             var tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();

             break;

         case "j":

             var tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();

             break;

         case "k":

             var tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();

             break;

         case "l":

             var crash = new Audio('sounds/crash.mp3');
             crash.play();

             break;


         default:
             console.log(sounds);

     }





 }


 function buttonAnimation(currentKey) {

     var animaTion = document.querySelector("." + currentKey)
     animaTion.classList.add("pressed")


     setTimeout(function () {

         animaTion.classList.remove("pressed")
     }, 100);

 }







 function displayDate() {

     document.querySelector(".time").innerHTML = Date();

 }

 function removeDate() {


     document.querySelector(".time").classList.remove("time");
 }