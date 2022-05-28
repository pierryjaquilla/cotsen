// Should only load it once

var loaded = document.body.getAttribute("data-loadedcustom");

if (!loaded) {
    // Load the local one if local

    var scr = document.createElement("script");
    var isRemote = jQuery.cookie("local") == null;
    var prefix = isRemote ? "https://pierryjaquilla.github.io/cotsen/" : "https://localhost:8888/";

    scr.src = prefix + "script.js" + "?ts=" + new Date().getTime();
    document.getElementsByTagName("head")[0].appendChild(scr);
    document.body.setAttribute("data-loadedcustom", true);
}

