var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onload = () => {
  // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
  let all = document.getElementsByClassName("zoomD"),
    lightbox = document.getElementById("lightbox");

  // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
  // * SIMPLY CLONE INTO LIGHTBOX & SHOW
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }
  }

  // (C) CLICK TO CLOSE LIGHTBOX
  lightbox.onclick = () => {
    lightbox.className = "";
  };
};

// Slideshow Gallery

// <!-- rustaveli -->

var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(m) {
  showDivs1((slideIndex1 += m));
}

function showDivs1(m) {
  var j;
  var y = document.getElementsByClassName("mySlides1");
  if (m > y.length) {
    slideIndex1 = 1;
  }
  if (m < 1) {
    slideIndex1 = y.length;
  }
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideIndex1 - 1].style.display = "block";
}

// <!-- avlabari -->

var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(m) {
  showDivs2((slideIndex2 += m));
}

function showDivs2(m) {
  var j;
  var y = document.getElementsByClassName("mySlides2");
  if (m > y.length) {
    slideIndex2 = 1;
  }
  if (m < 1) {
    slideIndex2 = y.length;
  }
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideIndex2 - 1].style.display = "block";
}

// <!-- isani -->

var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(m) {
  showDivs3((slideIndex3 += m));
}

function showDivs3(m) {
  var j;
  var y = document.getElementsByClassName("mySlides3");
  if (m > y.length) {
    slideIndex3 = 1;
  }
  if (m < 1) {
    slideIndex3 = y.length;
  }
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideIndex3 - 1].style.display = "block";
}

// <!-- varketili -->

var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(m) {
  showDivs4((slideIndex4 += m));
}

function showDivs4(m) {
  var j;
  var y = document.getElementsByClassName("mySlides4");
  if (m > y.length) {
    slideIndex4 = 1;
  }
  if (m < 1) {
    slideIndex4 = y.length;
  }
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideIndex4 - 1].style.display = "block";
}

// <!-- gldani -->

var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(m) {
  showDivs5((slideIndex5 += m));
}

function showDivs5(m) {
  var j;
  var y = document.getElementsByClassName("mySlides5");
  if (m > y.length) {
    slideIndex5 = 1;
  }
  if (m < 1) {
    slideIndex5 = y.length;
  }
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  y[slideIndex5 - 1].style.display = "block";
}

// <!-- dighomi -->

var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
  showDivs6((slideIndex6 += n));
}

function showDivs6(n) {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  if (n > x.length) {
    slideIndex6 = 1;
  }
  if (n < 1) {
    slideIndex6 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex6 - 1].style.display = "block";
}
