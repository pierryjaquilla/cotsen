// const {
//     text
// } = require("express");
if (document.location.pathname == "/") {
    window.location.href = "https://cotsen.drupal.gwu.edu/homepage-content";
}

window.onload = function () {
    menuOpenCloses();
    changeColorBackgroundMedia();
    openLibrary();
    zoomInPicture();
    accordionMenu();
    createArrows();


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
        if (jQuery('.headerWhite').length) {
            jQuery(".headerWhite").addClass("close");
            jQuery(".mainMenu").addClass("close");
        }
    });
    jQuery(".fullMenu span").on("mousedown", function () {
        full[0].classList.remove("hideMenu");
    });
}


function openLibrary() {
    console.log(jQuery(".moreImages img"));
    jQuery(".moreImages img").each(function () {
        var element = document.createElement("div");
        element.classList.add("card");
        var image = document.createElement("IMG");
        image.alt = jQuery(this).attr("alt");
        // image.setAttribute('class', 'photo');
        image.src = jQuery(this).attr("src");
        jQuery(element).append(image);
        jQuery(".images-container").append(element);

        jQuery("#biggerPicture img").attr('src', jQuery(this).attr('src'));
    });
    jQuery("card").last().addClass("last");

    jQuery(".buttonLibrary").on("click", function () {
        jQuery(".library").addClass("open");
    });
    jQuery(".closeLibrary").on("click", function () {
        jQuery(".library").removeClass("open");
    });
}

function zoomInPicture() {
    jQuery(".card img").on("click", function () {
        console.log(jQuery(this).attr('src'));
        jQuery("#biggerPicture img").attr('src', jQuery(this).attr('src'));
    });
}

function accordionMenu() {
    jQuery(".fullMenu .promo-title").on("click", function () {
        if (window.innerWidth < 840) {

            let toOpen = jQuery(this).parent().next();
            test = toOpen;
            if (toOpen.height() == 0) {
                toOpen.height(toOpen[0].scrollHeight);
            } else {
                toOpen.height(0);
            }
        }
    });
}

let images;
let texts;
let currentDisplayed = 0;

function createArrows() {
    jQuery("<div class=\"arrow left\"></div>").insertBefore(".backgroundColored .textInformations");
    jQuery("<div class=\"arrow right\"></div>").insertAfter(".backgroundColored .textInformations");
    
    images = jQuery(".moreImages img").toArray();
    texts = jQuery(".moreImages col-copy p").toArray();
    if (images.length > 0) {
        images.unshift(jQuery(".backgroundColored img")[0]); //add to begining
        texts.unshift(jQuery(".backgroundColored .textInformations")[0]);
    }

    console.log(texts);
    console.log(images);
    allowBrowseLibrary();
}

function allowBrowseLibrary() {
    jQuery(".arrow left").on("click", function () {
        console.log(currentDisplayed);
        ++currentDisplayed;
        console.log(currentDisplayed);
        jQuery(".backgroundColored img").attr('src', images[currentDisplayed]);
        jQuery(".backgroundColored .textInformations").text(texts[currentDisplayed]);
    });

    jQuery(".arrow right").on("click", function () {
        console.log(currentDisplayed);
        ++currentDisplayed;
        console.log(currentDisplayed);

    });
}