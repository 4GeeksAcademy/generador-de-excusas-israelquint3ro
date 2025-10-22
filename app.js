

let who = ['my cat','my brother','my dog','my dad']
let action = [ 'ruined','ate','destroyed','broke']
let what = ['my homework','my car', 'my computer','the internet cable']
let when = ['When i was cooking', 'While i was coding','Before my exam', 'After i finshed school']



function excusesList() {

 let randomWho= who[Math.floor(Math.random()*who.length)];
 let randomAction = action[Math.floor(Math.random()* action.length)];
 let randomWhat= what[Math.floor(Math.random()* what.length)];
 let randomWhen= when[Math.floor(Math.random()* when.length)];

 
 let randomExcuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

 document.getElementbyId("excuse").textContent = randomExcuse;

}
excusesList()