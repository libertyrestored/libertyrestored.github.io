// -----------------------------------------------------------------------------
// FontFaceObserver support
// -----------------------------------------------------------------------------

// Fonts are loaded through @font-face rules in the CSS whenever an element
// references them. FontFaceObserver creates a referencing element to trigger
// the font request, and listens for font load events.
// When all fonts are loaded, we enable them by adding a class to the html
// element

(function( w ){
// if the class is already set, we're good.
if( w.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
  return;
}
var fontA = new w.FontFaceObserver( "lovetime_cleanregular", {
});

w.Promise
  .all([fontA.check()])
  .then(function(){
    w.document.documentElement.className += " fonts-loaded";
  });
}( this ));


// -----------------------------------------------------------------------------
// Off Canvas Navigation
// -----------------------------------------------------------------------------

var offCanvasMenu = document.querySelector(".off-canvas-wrapper");
var openMenu = document.querySelector(".js-nav-open");
var closeMenu = document.querySelectorAll(".js-nav-close");
var preventScroll = document.querySelector("body");

// Open menu
openMenu.onclick = function () {
  "use strict";
  offCanvasMenu.classList.toggle("is-visible");
  preventScroll.classList.toggle("off-canvas-no-scroll");
};

// Close Menu
for (var i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener("click", function(event) {
    "use strict";
    offCanvasMenu.classList.toggle("is-visible");
    preventScroll.classList.toggle("off-canvas-no-scroll");
  });
}
