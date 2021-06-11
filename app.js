var tab = document.getElementById("tabName");
var title = localStorage.getItem("code").split("<title>")[1].split("</title>")[0];
if (title.length > 0) {
tab.innerHTML = title;
} else {
tab.innerHTML = "Boost HTML Editor";
} 

function hjgcghjkhgfg() { 
var x =  document.getElementById("editor").value; 
document.getElementById("z").innerHTML = x; 
localStorage.setItem("code", document.getElementById("editor").value);
document.body.style.background = "#282828";
}

function kajygbxkjyw() { 
     document.getElementById("editor").style.visibility="hidden";
     document.getElementById("z").style.width="100%"; 
     document.getElementById("z").style.left="0px"; 
}
function kjybxdykwuydsbxryuwkeuy() { 
     document.getElementById("editor").style.visibility="visible";
     document.getElementById("z").style.width="50%"; 
     document.getElementById("z").style.left="52%"; 
}
document.getElementById("editor").value = localStorage.getItem("code");
