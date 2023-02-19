var numofDrumbuttons = document.querySelectorAll(".drum").length;

for(var i=0;i<numofDrumbuttons;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function click(){
    this.style.color = "white";
});
}

//var audio = new Audio('sounds/tom-1.mp3');
  //  audio.play();this.innerHTML.backgroundcolor='white';