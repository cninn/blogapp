//toggle effect for navbar menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("togglebtn");
  const menu = document.getElementById("menu");

  toggleBtn.addEventListener("click", () => {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  });
});


//TODO : SCROLL UP
// Yukarı ok düğmesini bul
// Sayfanın en altına indiğinde butonu görünür yap
window.onscroll = function () {
  var scrollY = window.pageYOffset;
  if (scrollY + window.innerHeight >= document.body.scrollHeight) {
    document.getElementById("myButton").style.display = "block";
  } else {
    document.getElementById("myButton").style.display = "none";
  }
};



// Butona tıklandığında sayfayı yavaşça en üste kaydır
document.getElementById("myButton").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


//!OVERLAY
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

  setTimeout(function () {
    overlay.style.display = "none";
  }, 1000);
});






/// devamını oku
const openBlogBtn = document.querySelectorAll("#openBlogBtn");
const modal3 = document.querySelectorAll("#modal-blog");
const closeeBlogBtn = document.querySelectorAll("#closeeBlogBtn");

for (let i = 0; i < openBlogBtn.length; i++) {
  openBlogBtn[i].addEventListener("click", () => {
    modal3[i].style.display = "flex";
  });

  closeeBlogBtn[i].addEventListener("click", () => {
    modal3[i].style.display = "none";
  });
}

