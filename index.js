    
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
    var hours = Math.floor((difference % (86400)) / 3600 )
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