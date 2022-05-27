// Should only load it once

var loaded = document.body.getAttribute("data-loadedcustom");

if (!loaded) {
    var scr = document.createElement("script");
    scr.src = "https://pierryjaquilla.github.io/cotsen/script.js" + "?ts=" + new Date().getTime();
    document.getElementsByTagName("head")[0].appendChild(scr);
    document.body.setAttribute("data-loadedcustom", true);
}

