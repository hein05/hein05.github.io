$(document).ready(function() {
  if(navigator.userAgent.indexOf("Firefox")!=-1){
    alert("Currently, This Website work Best on Chrome >>> Opera >>> Safari(limited Animation)\n browsers");
  }
    $(".textAnim").lettering();
    // $(".button").lettering();
  });
  
  // $(window).load(function() {
  //   $(".textAnim").lettering();
  //   $(".button").lettering();
  // });
  // var userScrolling = false;
  // window.onscroll = function () {
  //   userScrolling = true;
  //   console.log(userScrolling);
  // }
  // console.log(userScrolling);

  $(document).ready(function() {
    $('.decoBoxh1').fadeTo(3000, 1);
    $('.decoBoxh3').fadeTo(3000, 1);
    animateLetter();
  });
  
  // $('.btn').click(function() {
  //   animateLetter();
  // });


  function animateLetter() {
    var title1 = new TimelineMax();
    // title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".textAnim span", 0.5, 
    {ease: Back.easeOut.config( 1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.025);
    // title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }



  /////////////____________ Parallax Effects _____________///////////////


  var yPos, bg, boxLeft,boxRight ;
  var appSection, decoAppSection;
  
  function parallax () {
    yPos = window.pageYOffset;
    bg = document.getElementsByClassName("decoText");
    appSection = document.getElementsByClassName("appSection");
    decoAppSection = document.getElementsByClassName("decoappSection");

    boxLeft = document.getElementsByClassName('decoBoxh1');
    boxRight = document.getElementsByClassName('decoBoxh3');

    boxLeft[0].style.right = (yPos/7) + '%';
    boxRight[0].style.left = (yPos/5) + '%';
    bg[0].style.top = -(yPos * 0.6) + "px";
    appSection[0].style.top = yPos * 0.13 + 'px';
    decoAppSection[0].style.left = (yPos/30) + '%';
    // $('.decoBoxh1').css({
    //   'right' : (yPos/4) + '%'
    // });
  }

  //////////// ____________ Animate Text Boxes __________ /////////////

  // function animateBox () {
  //   yPos = window.pageYOffset;
  //   boxLeft = document.getElementsByClassName('decoBoxh1');
  //   boxRight = document.getElementsByClassName('decoBoxh3');

  //   boxLeft[0].style.right = (yPos/4) + '%';
  //   boxRight[0].style.left = (yPos/4) + '%';
  // }

  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;
    if(!isSafari) {
      window.addEventListener('scroll', parallax);
    }
 

  // window.addEventListener('scroll', animateBox);
  // console.log(image);

