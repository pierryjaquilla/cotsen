window.onload = function () {
    menuOpenCloses();
}

function menuOpenCloses() {
    var menuButton = document.getElementById("menuButton");
    var full = document.getElementsByClassName("fullMenu");
    console.log(menuButton);
    console.log(full);
    menuButton.addEventListener("mousedown", function() {
        full.classList.remove("hideMenu");
    });
}