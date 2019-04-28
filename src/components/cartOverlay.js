function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

const overlay = {
    on: on,
    off: off
}


export { overlay }
