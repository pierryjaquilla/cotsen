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
    menuButton.addEventListener("mousedown", function () {
        if (full[0].classList.contains('hideMenu')) {
            full[0].classList.remove("hideMenu");
        } else {
            full[0].classList.add("hideMenu");
        }
    });
    jQuery(".fullMenu span").on("mousedown", function () {
        full[0].classList.remove("hideMenu");
    });
}

let test;

function openLibrary() {
    console.log(jQuery(".moreImages img"));
    jQuery(".moreImages img").each(function(){
        test = element;
        console.log(jQuery(this));
        console.log(element);
        console.log(jQuery(this).attr('src'));

        var element = document.createElement("div");
        element.classList.add("card");
        var image = document.createElement("IMG");
        image.alt = jQuery(this).attr("alt");
        // image.setAttribute('class', 'photo');
        image.src = jQuery(this).attr("src");
        console.log(image.src);
        jQuery(element).append(image);
        jQuery(".images-container").append(element);
    });

    jQuery(".buttonLibrary").on("click", function () {

        console.log("Library open");
        jQuery(".library").addClass("open");
    });
}