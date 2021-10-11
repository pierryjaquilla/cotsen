window.onload = function () {
    menuOpenCloses();
    changeColorBackgroundMedia();
    openLibrary();
}

function changeColorBackgroundMedia() {
    var color = jQuery(".colorForBackground").html();
    if (color) {
        if (color.includes("#")) {
            color = "#" + color.split('#')[1];
            jQuery(".backgroundColored").css("backgroundColor", color);
    
        }
    }
}

function menuOpenCloses() {
    var menuButton = document.getElementById("menuButton");
    var full = document.getElementsByClassName("fullMenu");
    // console.log(menuButton);
    // console.log(full);
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

function openLibrary() {
    console.log("init");
    jQuery(".buttonLibrary").on("click", function() {
        console.log("Library open");
        jQuery(".library").addClass("open");
    });
}