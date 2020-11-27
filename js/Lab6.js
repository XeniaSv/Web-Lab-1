window.onload = function() {
    var popUp = document.getElementById("modal")
    var btn = document.getElementById("btn")
    var span = document.getElementById("close")
    
    var img = document.getElementsByClassName("icon")[0]

    btn.onclick = function() {
        popUp.style.display = "block"
    }

    span.onclick = function() {
        popUp.style.display = "none"
    }

    img.onclick = function() {
        if (img.getAttribute("src") == "resources/Icon.png") {
            img.setAttribute("src", "resources/Delphin.png")
        }
        else {
            img.setAttribute("src", "resources/Icon.png")
        }
        
    }
}