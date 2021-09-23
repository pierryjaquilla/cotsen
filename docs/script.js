window.onload = function () {
    menuOpenCloses();
    changeColorBackgroundMedia();
}

function changeColorBackgroundMedia() {
    var color = jQuery("colorForBackground").html();
    console.log(color);
}

function menuOpenCloses() {
    var menuButton = document.getElementById("menuButton");
    var full = document.getElementsByClassName("fullMenu");
    console.log(menuButton);
    console.log(full);
    menuButton.addEventListener("mousedown", function() {
        if (full[0].classList.contains('hideMenu')) {
            full[0].classList.remove("hideMenu");
        } else {
            full[0].classList.add("hideMenu");
        }
    });
    jQuery(".fullMenu span").on("mousedown", function() {
        full[0].classList.remove("hideMenu");
    });
}