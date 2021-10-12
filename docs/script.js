window.onload = function () {
    menuOpenCloses();
    changeColorBackgroundMedia();
    openLibrary();
    zoomInPicture();
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


function openLibrary() {
    console.log(jQuery(".moreImages img"));
    jQuery(".moreImages img").each(function(){
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
    jQuery(".card img").on("click", function() {
        console.log(jQuery(this).attr('src'));
        jQuery("#biggerPicture img").attr('src', jQuery(this).attr('src'));
    });
}

function accordionMenu() {
    jQuery(".promo-title").on("click", function() {
        let toOpen = jQuery(this).parent.next();
        console.log(toOpen);
        toOpen.height(toOpen.scrollHeight);
    });
}