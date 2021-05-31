    
    var makeUpdate = setInterval(function(){
    var today = new Date().getTime();
    // console.log(today);

var countDate = new Date(" aug 15, 2021 12:00:00 ").getTime();
    //  console.log(countDate);

var difference = ((countDate - today)/1000) ;
    //  console.log(difference);
    //  days remaining
     var days = Math.floor(difference / (86400));
    //   console.log((days));


    // hours remaining 
    var hours = Math.floor((difference % (86400)) / 3600 ) ;
    //   console.log((hours));

    // minute remaining
    var minutes = Math.floor(((difference % (86400)) % 3600 ) / 60);
    // console.log((minutes));

    // secands remaining
    var secands = Math.floor(((difference % (86400)) % 3600 ) % 60) ;
    // console.log(secands);

    document.getElementById("timer-number-days").innerHTML = days ;
    document.getElementById("timer-number-hours").innerHTML = hours ;
    document.getElementById("timer-number-minutes").innerHTML = minutes;
    document.getElementById("timer-number-secands").innerHTML = secands ;

}, 1000);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
var deviceWidth = screen.width ;

if(deviceWidth >= 1040){
        document.getElementById("expert-box").style.display = "none";
        document.getElementById("ds-all-teacher").style.display = "block";
     }

     $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        // for changing the color of nav links
      });
    });

    function enroll_closed(){
      window.alert(
        "Enrollment is curently closed due to Covid-19 Pandemic"
      )
    }
    function blog_notavl(){
      window.alert(
        "We are soryy! No blogs currently updated"
      )
    }

    function not_true(){
      window.alert("This website is only for practice. No such services are offered");
    }

  
