//toggle effect for navbar menu
document.addEventListener("DOMContentLoaded",()=>{
    const toggleBtn = document.getElementById('togglebtn');
    const menu = document.getElementById('menu');


    toggleBtn.addEventListener('click',()=>{

        if(menu.style.display==='flex'){
            menu.style.display='none';
        }else{
            menu.style.display='flex';
            
          
        }
    });

});

//TODO : SCROLL UP
// Yukarı ok düğmesini bul
// Sayfanın en altına indiğinde butonu görünür yap
window.onscroll = function() {
    var scrollY = window.pageYOffset;
    if (scrollY + window.innerHeight >= document.body.scrollHeight) {
      document.getElementById("myButton").style.display = "block";
    } else {
      document.getElementById("myButton").style.display = "none";
    }
  };
  
  // Butona tıklandığında sayfayı yavaşça en üste kaydır
  document.getElementById("myButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  



//todo BURASI HEADER SLİDER KISMI
    const sliderContent = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateSlider();
    }
 
    

function updateSlider() {
    const totalWidth = slides.length * slides[0].offsetWidth;
    const translateX = -currentIndex * slides[0].offsetWidth;

    if (currentIndex === slides.length) {
        currentIndex = 0;
        sliderContent.style.transition = "none"; 
        sliderContent.style.transform = `translateX(0px)`; 
        setTimeout(() => {
            sliderContent.style.transition = "transform 0.5s ease-in-out"; 
        }, 0);
    } else {
        sliderContent.style.transform = `translateX(${translateX}px)`;
    }
}


    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
    
      
        setTimeout(function() {
            overlay.style.display = 'none';
        }, 1000); 
    });

//todo BURASI ABOUT MODAL KISMI
const lastEditBtn = document.getElementById("last-edit");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModalBtn");

lastEditBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
//TODO : FİLE BUTTON

const fileSelectButton = document.getElementById("fileSelectButton");
const fileInput = document.getElementById("fileInput");

fileSelectButton.addEventListener("click", function () {
    fileInput.click(); 
});

//TODO BLOG MODAL


const modalBtn = document.getElementById("create-blog");
const modal2 = document.getElementById("modal2");
const closeblogbtn = document.getElementById("closeBlogModalBtn");

modalBtn.addEventListener("click", () => {
    modal2.style.display = "flex";
});

closeblogbtn.addEventListener("click", () => {
    modal2.style.display = "none";
});



