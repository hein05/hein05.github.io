$(document).ready(function(){
    $("#title").hide();
});


var header = "What is it?" 
var letter =0;

// $('.btn').click(function typeWriter () {
//     if (letter < header.length) {
//         document.getElementById("title").innerHTML += header.charAt(letter);
//         letter += 1;
//         setTimeout(typeWriter, 50);
//     }
// });

$('.btn').click(function animatedText() {
    if (letter < header.length) {
        document.getElementById("title").innerHTML += header.charAt(letter);
        letter += 1;
        textAnim();
        setTimeout(animatedText, 80);
    }
    //$("div").slideUp();
    // $("#title").hide();
    
    function textAnim() {  
        setTimeout(function () {
            $("#title").fadeIn('slow')
                        .animate(
                            {top: '100px'},
                            {queue: true, duration: 'slow'});
             
        var i = 1.2;
        var speed = 300;
     
        while (i > 0) {
            i -= 0.1;
            //speed = speed + i;
            $("#title").animate({
                fontSize: 30 + i + 'px',
                // height: 150 + i + 'px',
                // width: 150 + i +'px'
            },speed);
    
            $("#title").animate({
                fontSize: 30 - i + 'px',
                // height: 150 - i +'px',
                // width: 150 - i +'px'
            },speed);
            this.console.log("InsideWhileLoop" + i);  
    }
        }
        ,0);
    }

    
});
