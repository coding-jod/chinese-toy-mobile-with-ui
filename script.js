let audio = document.getElementById("n2");
console.log("hello")
let buttons = document.getElementsByClassName("btn");
buttons=Array.from(buttons)
// console.log(typeof buttons)

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });
document.getElementsByClassName("num1")[0].addEventListener("click", () => {
    audio.pause();
    let audios=[]
    audios=document.getElementsByClassName("n1");
    const rndInt = Math.floor(Math.random() * 3) + 1
    // console.log(rndInt)
    audio=audios[rndInt-1]
    // audio = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav");
    audio.play();
    document.querySelector("span").innerHTML=` Playing sample audio number ${rndInt} `
  });
  document.getElementsByClassName("num2")[0].addEventListener("click", () => {
    // document.querySelector("span").innerHTML=" song paused"
    audio.pause();
    audio = document.getElementById("n2")
    audio.play();
    document.querySelector("span").innerHTML=" Chaiya Chaiya"

  });
//   
  document.getElementsByClassName("num3")[0].addEventListener("click", () => {
    audio.pause();
    audio = document.getElementById("n3")
    audio.play();
    document.querySelector("span").innerHTML=" Funny song"
  });
  document.getElementsByClassName("num4")[0].addEventListener("click", () => {
    audio.pause();
    audio = document.getElementById("n4")
    audio.play();
    document.querySelector("span").innerHTML=" Dhoom Machale Dhoom"
  });
  document.getElementsByClassName("num5")[0].addEventListener("click", () => {
    audio.pause();
    // audio = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav");
    audio=document.getElementById("n5");
    
    audio.play();
    document.querySelector("span").innerHTML=" Phone uthalo"
  });
  document.getElementsByClassName("num6")[0].addEventListener("click", () => {
    audio.pause();
    audio=document.getElementById("n6");
    
    audio.play();
    document.querySelector("span").innerHTML=" Aloo Kachalu Rhyme"
  });
  document.getElementsByClassName("num7")[0].addEventListener("click", () => {
    audio.pause();
    // audio = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav");
    audio=document.getElementById("n7")
    audio.play();
    document.querySelector("span").innerHTML=" Pika Pika Pika Chu"
  });

  document.getElementsByClassName("num8")[0].addEventListener("click", () => {
    audio.pause();
    // audio = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav");
    audio=document.getElementById("n8");

    audio.play();
    document.querySelector("span").innerHTML=" Laughing Baby"
  });
  document.getElementsByClassName("num9")[0].addEventListener("click", () => {
    audio.pause();
    // audio = new Audio("https://www2.cs.uic.edu/~i101/SoundFiles/preamble10.wav");
    audio=document.getElementById("n9")
    audio.play();
    document.querySelector("span").innerHTML=" Paan Banaras Wala"
  });

  document.getElementsByClassName("num0")[0].addEventListener("click", () => {
    audio.pause();
    audio = document.getElementById("n0")
    audio.play();
    document.querySelector("span").innerHTML=" Baby Sound"
  });

  document.getElementsByClassName("num#")[0].addEventListener("click", () => {
    document.querySelector("span").innerHTML=" Song paused"
    
    audio.pause();
    
  });
  document.getElementsByClassName("num*")[0].addEventListener("click", () => {
    document.querySelector("span").innerHTML=" Last song resumed"
    
    audio.play();
    
  });

  
