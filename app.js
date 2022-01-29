const box = document.getElementById("box")
const clientXY = document.getElementById("clientXY")
const screenXY = document.getElementById("screenXY")

document.body.addEventListener("click", (e)=>{
    box.style.position = "absolute"
    box.style.top = e.clientY+"px"
    box.style.left = e.clientX+"px"
    
    // values
    screenXY.innerHTML = "screenX: "+e.screenX+" -  screenY: "+e.screenY
    clientXY.innerHTML = "clientX: "+e.clientX+" -  clientY: "+e.clientY
    
})
