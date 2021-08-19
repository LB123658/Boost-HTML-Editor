// about 
const boost = {version:"Boost.js version 0.0.1", source:"https://lb123658.gitub.io/Boost-HTML-Editor/boost.js", notes:"This is a pre-release.", about:"Boost.js version 0.0.1\n(https://lb123658.gitub.io/Boost-HTML-Editor/boost.js)\n(This is a pre-release.)"};

// variables 
const web = {url:window.location.href, search:window.location.search, query: window.location.search.split("=")[1].replace(/\+/g," "), security:window.location.href.split("://")[0].replace(/https/gi,"secure").replace(/http/gi,"unsecure"), host:window.location.hostname};

switch (new Date().getDay()) {
  case 0:
    dia = "Sunday";
    break;
  case 1:
    dia = "Monday";
    break;
  case 2:
    dia = "Tuesday";
    break;
  case 3:
    dia = "Wednesday";
    break;
  case 4:
    dia = "Thursday";
    break;
  case 5:
    dia = "Friday";
    break;
  case  6:
    dia = "Saturday";
}
const time = {day:dia, year:"2021"};
// functions 
function hide(elmnt) {
document.getElementById(elmnt).style.visibility = "hidden";
}
function show(elmnt) {
document.getElementById(elmnt).style.visibility = "visible";
}
function highlight(elmnt) {
document.getElementById(elmnt).style.background = "yellow";
}
function unhighlight(elmnt) {
document.getElementById(elmnt).style.background = "transparent";
}
function text(elmnt,text) {
document.getElementById(elmnt).innerHTML = text;
}
function clear(elmnt) {
document.getElementById(elmnt).innerHTML = "";
}
function message(text) {
console.log(text);
}
function say(text) {
alert(text);
}
function ask(text) {
confirm(text);
}
function store(name,text) {
localStorage.setItem(name,text);
}
function p() {
window.print();
}
function r() {
location.reload();
}
text("demo",time.day);
