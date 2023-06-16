
var game_audio = new Audio('sounds/game_sound.mp3')
var game_end_audio = new Audio('sounds/fail_sound.mp3')
var game_start_audio = new Audio('sounds/game_start.mp3')
var run = new Audio("sounds/running-sounds-6003.mp3")
var score = 0
var state ="running"

const game = document.getElementById('background_container')
const character = document.getElementById("character")
const nemesis = document.getElementById("villan")
const blast = document.getElementById('blast')
const restart =document.getElementById('restart_btn')
const head = document.getElementById('video-heading')


// document.addEventListener("click", function(){
    game_start_audio.play();
    setTimeout(function(){
        game_start_audio.pause()
        game_audio.play()
      },2000);
    
    
// })
document.addEventListener("click" ,function (){
    window.location.reload();
})

function jump() {

    if(character.classList != "jump-animation"){
      run.play();
      character.classList.add("jump-animation");
    }
    setTimeout(function(){
      character.classList.remove("jump-animation"); 
    },1000);
  }

  document.onkeydown = function (e) {
    jump();
  };


  document.ontouchstart = function (e) {
    jump();
  };


setInterval( () => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"))
    const nemesisLeft = parseInt(window.getComputedStyle(villan).getPropertyValue("left"))
    console.log(characterTop)
    console.log(nemesisLeft) 

    let goku = document.getElementById("goku")

    if(  nemesisLeft < 250  && nemesisLeft > 200 && characterTop < 200){
        run.pause();
        game_audio.pause();
        game_end_audio.play();

        nemesis.style.display = "none"
        goku.src="characters/blast.gif"
        head.innerText = "Game Over :( click to restrart"
    }
}, 50)

if(state === "running"){
    score++;
    head.innerText = "Score: " + score
}

