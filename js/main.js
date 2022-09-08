let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
lamp.onclick = function(){
    document.body.style.background = "#000"
    this.style.display = "none"
    sun.style.display = "block"
}

sun.onclick = function(){
    document.body.style.background = "#fff"
    this.style.display = "none"
    lamp.style.display = "block"
}


