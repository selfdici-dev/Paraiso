const quotes = [
  "Discipline > motivation",
  "Fais ce que tu évites",
  "Deviens plus fort chaque jour",
  "Agis aujourd’hui"
];

function newQuote(){
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById("quote").innerText = q;
}

function saveGoal(){
  const goal = document.getElementById("goal").value;
  localStorage.setItem("goal", goal);
  document.getElementById("saved").innerText = "🎯 " + goal;
}

window.onload = function(){
  newQuote();
  const g = localStorage.getItem("goal");
  if(g){
    document.getElementById("saved").innerText = "🎯 " + g;
  }
}
