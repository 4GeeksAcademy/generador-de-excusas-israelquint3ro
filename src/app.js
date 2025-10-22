import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



let who = ['My cat','My brother','My dog','My dad'];
let action = ['ruined','ate','destroyed','broke'];
let what = ['my homework','my car', 'my computer','the internet cable'];
let when = ['when i was cooking', 'while i was coding','before my exam', 'after i finshed school'];


function randomIndex(arr) {
  let newIndex = Math.floor(Math.random()*arr.length);
  return arr[newIndex];
}

window.onload = function (){
let randomWho = randomIndex (who);
let randomAction = randomIndex(action);
let randomWhat = randomIndex(what);
let randomWhen = randomIndex(when);


const newExcuse = ` ${randomWho} ${randomAction} ${randomWhat} ${randomWhen} `; 

document.getElementById ("excuse").innerHTML = newExcuse;
}

