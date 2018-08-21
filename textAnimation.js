$(document).ready(function() {
    $(".textAnim").lettering();
    $(".button").lettering();
  });
  
  // $(window).load(function() {
  //   $(".textAnim").lettering();
  //   $(".button").lettering();
  // });

  $(document).ready(function() {
    animation();
  }, 200);
  
  $('.btn').click(function() {
    // console.log("click functioned");
    animation();
  });
  
  
  function animation() {
    var title1 = new TimelineMax();
    // title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".textAnim span", 0.5, 
    {ease: Back.easeOut.config( 1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.025);
    // title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }