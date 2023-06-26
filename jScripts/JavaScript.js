var picIndex = 1;
showSlides(picIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(picIndex += n);// מראה את התמונה הבאה
}

// מקבל את המיקום מהתמונות הקטנות
function currentSlide(n) {
    showSlides(picIndex = n);
}

function showSlides(n) {
  
  var bigG = document.getElementsByClassName("ourGallery");// לוקחת את התמונות הגדולות ומכניסה אותם למערך
  var smallG = document.getElementsByClassName("demo");// מכניסה את הקטנות למערך
  var captionText = document.getElementById("caption");
if (n > bigG.length) { picIndex = 1}// המיקום גדול מהאורך
if (n < 1) { picIndex = bigG.length}
for (var i = 0; i < bigG.length; i++) {
    bigG[i].style.display = "none";
  }
  for (i = 0; i < smallG.length; i++) {
    smallG[i].className = smallG[i].className.replace(" active", "");// מעלה את הבהירות של כל תמונה קטנה 
  }
bigG[picIndex -1].style.display = "block";//
smallG[picIndex -1].className += " active";
captionText.innerHTML = smallG[picIndex-1].alt;
}



