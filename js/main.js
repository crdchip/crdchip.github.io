// Listmenu
const btnOffListMenu = document.querySelector("#offListmenu");
const btnOnListMenu = document.querySelector("#sub-menu-list");
btnOnListMenu.addEventListener("click", function(){
   document.getElementById("box-list-menu").style.display = "block";
});
btnOffListMenu.addEventListener("click", function(){
   document.getElementById("box-list-menu").style.display = "none";
});

// Datetime
var today = new Date();
var date = today.getDate() +"-"+(today.getMonth()+1)+"-"+today.getFullYear();
var day = today.getDay()+1;
var dateTime = 'Thứ' + ' '+ day + ', ' + date;
var dateSunday = 'Chủ nhật' + ', ' + date;
if(day == 8){
   document.getElementById("time").innerHTML = dateSunday;
}
else{
   document.getElementById("time").innerHTML = dateTime;
}

  //khai báo biến slideIndex đại diện cho slide hiện tại
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 3000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }