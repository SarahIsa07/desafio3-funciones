var color = ""

document.addEventListener("keydown", function(event) {
event.key
const key = document.getElementById("key")
if(event.key === "a" || event.key === "A"){
    key.style.backgroundColor = "pink"
}
else if(event.key === "s" || event.key === "S"){
    key.style.backgroundColor = "orange"
}
else if(event.key === "d" || event.key === "D"){
    key.style.backgroundColor = "lightblue"
}
else if(event.key === "q" || event.key === "Q"){
    agregarElemento("pink");
}
else if(event.key === "w" || event.key === "W"){
    agregarElemento("purple");
}
if(event.key === "e" || event.key === "E"){
    agregarElemento("brown");
}

})

function agregarElemento(color){
    console.log("agregarelemento")
    container = document.getElementById("container");
    newElement = document.createElement("div");
    newElement.style.backgroundColor = color
    newElement.style.border = "2px solid black"
    newElement.style.width = "200px"; 
    newElement.style.height = "200px";
    container.appendChild(newElement)
}
