
var cssFile = document.createElement('link');
cssFile.rel = 'stylesheet';
cssFile.href = "http://localhost:8888/docs/style.css";  // or path for file {themes('/styles/mobile.css')}
document.body.appendChild(cssFile); // append css to body element, normally should be head

var cssFile2 = document.createElement('link');
cssFile2.rel = 'stylesheet';
cssFile2.href = "http://localhost:8888/docs/mediaQueryMax840.css";  // or path for file {themes('/styles/mobile.css')}
document.body.appendChild(cssFile2); // append css to body element, normally should be head


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
    changeTemplate1();
    getSetCurrentTab();
    makeStickyPossible();
}

function makeStickyPossible() {
    let all = jQuery(".template-1 .fullwidth .pos-two .backgroundColored");
    console.log(all);

    if (all.length > 0) {
        
        all.each(function(idx) {
            console.log(this);
            let newDiv = document.createElement("div");
            newDiv.classList.add("rowContent");
            let lib = document.createElement("div");
            lib.classList.add("buttonLibrary");
            lib.appendChild(document.createElement("div"));
            lib.appendChild(document.createElement("div"));
            lib.appendChild(document.createElement("div"));
            lib.appendChild(document.createElement("div"));
            this.append(lib);

            let cont = jQuery(this).find("*");
            console.log(cont);
            cont.each(function(f) {
                console.log(this);
                newDiv.appendChild(this);
            });
            this.append(newDiv);
        });
        
    }
}
function getSetCurrentTab() {
    console.log("set");
    let s = window.location.href;
    let a = s.split("/");
    a = a[3].replaceThisByThat("-", " ");
    document.getElementById("currentTab").innerHTML = "<p>" + a + "</p>";
}

function changeTemplate1() {
    if (jQuery(".template-1").toArray().length > 0) {
        let containers = jQuery(".container").toArray();
        let enable = false;
        for (let i = 0; i < containers.length; i++) {
            if (jQuery(containers[i]).hasClass("fullwidth")) {
                enable = true;
            }
            if (enable) {
                jQuery(containers[i]).addClass("fullwidth");
                jQuery(".template-1").append(containers[i]);
                // console.log("yes");
            }
        }
        // console.log(containers);
    }
}

function changeColorBackgroundMedia() {
    jQuery(".backgroundColored").each(function() {
        var color = jQuery(this).find(".colorForBackground").html();
        // console.log(color);
        if (color) {
            if (color.includes("#")) {
                color = "#" + color.split('#')[1];
                jQuery(this).css("backgroundColor", color);
            }
        }
    });
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
    jQuery(".menuHamburger").on("mousedown", function () {
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
    // console.log(jQuery(".moreImages img"));
    // console.log("hi bitch");
    jQuery(".fullwidth img").each(function () {
        var element = document.createElement("div");
        element.classList.add("card");
        var image = document.createElement("IMG");
        image.alt = jQuery(this).attr("alt");
        // image.setAttribute('class', 'photo');
        image.src = jQuery(this).attr("src");
        jQuery(element).append(image);
        jQuery(".images-container").append(element);
        // console.log(this);
        jQuery("#biggerPicture img").attr('src', jQuery(this).attr('src'));
    });
    jQuery("card").last().addClass("last");

    jQuery(".buttonLibrary").on("click", function () {
        jQuery(".library").addClass("open");
        console.log("open");
    });
    jQuery(".closeLibrary").on("click", function () {
        jQuery(".library").removeClass("open");
        console.log("close");

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
    jQuery("<div class=\"arrow left\"></div>").insertBefore(".backgroundColored .backgroundColored .col-copy h6");
    jQuery("<div class=\"arrow right\"></div>").insertAfter(".backgroundColored .backgroundColored .col-copy h6");
    
    images = jQuery(".fullwidth img").toArray();
    texts = jQuery(".fullwidth .backgroundColored .col-copy h6").toArray();
    if (images.length > 0) {
        images.unshift(jQuery(".backgroundColored img")[0]); //add to begining
        texts.unshift(jQuery(".backgroundColored .backgroundColored .col-copy h6")[0]);
    }
    // console.log(texts);
    // console.log(images);
    allowBrowseLibrary();
}

function allowBrowseLibrary() {
    jQuery(".arrow left").on("click", function () {
        console.log(currentDisplayed);
        ++currentDisplayed;
        console.log(currentDisplayed);
        jQuery(".backgroundColored img").attr('src', images[currentDisplayed]);
        jQuery(".backgroundColored .backgroundColored .col-copy h6").text(texts[currentDisplayed]);
    });

    jQuery(".arrow right").on("click", function () {
        console.log(currentDisplayed);
        ++currentDisplayed;
        console.log(currentDisplayed);

    });
}

String.prototype.replaceThisByThat = function(look, replacement) { 
    var chars = this.split(look);
    // chars[index] = replacement;
    return chars.join(replacement);
}