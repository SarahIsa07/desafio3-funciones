function colorear(elementId, color){
elementId.style.backgroundColor = color;
}

const caja1 = document.getElementById("caja1")
caja1.addEventListener("click", function(){
 colorear(caja1, "black")
})

const caja2 = document.getElementById("caja2")
caja2.addEventListener("click", function(){
 colorear(caja2, "black")
})

const caja3 = document.getElementById("caja3")
caja3.addEventListener("click", function(){
 colorear(caja3, "black")
})

const caja4 = document.getElementById("caja4")
caja4.addEventListener("click", function(){
 colorear(caja4, "black")
})