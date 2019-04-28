function on() {
    document.querySelector(".background-overlay").style.display = "block";
}

function off() {
    document.querySelector(".background-overlay").style.display = "none";
}

const overlay = {
    on: on,
    off: off
}


export { overlay }
