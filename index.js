let len = document.querySelectorAll(".drum").length;
for( let i = 1; i<=len; i++){

    document.querySelectorAll(".drum")[i-1].addEventListener("click",function(){

        let rec = this.innerHTML;

        makesound(rec);

        buttonAnimation(rec);

            
    
    });
}

document.addEventListener("keypress" ,function(event){

    makesound(event.key);

    buttonAnimation(event.key);
})


function makesound (key){
 switch (key) {

    case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    
    case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;

    case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;

    case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;

    case "j":
        let tom5 = new Audio("sounds/crash.mp3");
        tom5.play();
    break;

    case "k":
        let tom6 = new Audio("sounds/kick-bass.mp3");
        tom6.play();
    break;

    case "l":
        let tom7 = new Audio("sounds/snare.mp3");
        tom7.play();
    break;

 } 

} 


function buttonAnimation (currentKey) {

  let active = document.querySelector("." +currentKey);

  active.classList.add("pressed");

  setTimeout( function(){
      active.classList.remove("pressed"); 
  },100);

}

