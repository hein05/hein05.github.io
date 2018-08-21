var slideToNo = 0;
var inMotion = false;
var lastSlideNo = document.getElementById("scroller").childElementCount - 1;
// this.console.log("totalChild - " + totalSlide);

// --- TO OFFSET WITH PARENT, NEEDS TO USE POSITION ABSOLUTE OR RELATIVE ---- //
// --- FOR DIV ELEMENT, TO CHILDNODE ARRAY USE CHILDREN PROPERTY NOT CHILDNODES ---//
// --- SET INTERVAL METHOD NOT WORKING SMOOTHLY ---//
function gotoDiv () {
    if (!inMotion) {  
    inMotion = true; 
    var scrollContainer = document.getElementById("scroller");


    if (slideToNo == lastSlideNo) {
        slideToNo = 1;
        for (i = 0 ; i < lastSlideNo; i++) {
            var movingElem = scrollContainer.children[0];
            scrollContainer.appendChild(movingElem);
        // scrollContainer.insertBefore(movingElem, scrollContainer.childNodes[i]);
        // this.console.log("i >>> " + i);
        // this.console.log("Inserted Elem >>> " + movingElem.id);
        }
        // this.console.log("totalSlide" + scrollContainer.childElementCount);
        // this.console.log("lastSlideNo " + slideToNo);
    } else  {
        slideToNo += 1;
        // this.console.log("SlideToNumberIncreased >>> " + slideToNo);
    }
    // for (i = 0; i <= lastSlideNo; i++) {
    //     this.console.log("SlideSeq >>> " + scrollContainer.children[i].id);
    // }
    var slideToElem = scrollContainer.children[slideToNo];
    // this.console.log("Element >>>" + slideToElem.id);
    this.console.log("offsetTop " + slideToElem.offsetTop);
    this.console.log("ScrollToNum 1>>>" + scrollContainer.scrollTop);

    
    if (slideToElem.offsetTop > scrollContainer.scrollTop) {
        var doscroll = setInterval(scrollHigher, 1);
    } 
    // else {
    //     var doscroll = setInterval(scrollLower, 3);
    // }
    
    function scrollHigher () {
        if (scrollContainer.scrollTop >= slideToElem.offsetTop) {
            clearInterval(doscroll);
            inMotion = false;
        }
        scrollContainer.scrollTop += 50;
        this.console.log("ScrollToNum 2>>> " + "scrolling");
    }

    function scrollLower () {
        if (scrollContainer.scrollTop <= slideToElem.offsetTop) {
            clearInterval(doscroll);
        }
        scrollContainer.scrollTop -= 5;
        this.console.log("ScrollToNum 2>>> " + "scrolling");
    }
    // scrollContainer.scrollTop = slideToElem.offsetTop;
    }  
}


function smoothScroll () {
    this.console.log("smoothly scrolled");
    
    var prevElem = document.getElementById("slide" + slideToNo);
    var gap = 0;
    slideToNo++ ;
    if (slideToNo >= lastSlideNo) {
        slideToNo = 0;
    }
    var nextElem = document.getElementById("slide" + slideToNo);
    var scrollRange = nextElem.offsetTop;
    prevElem.style.position = "absolute";
    nextElem.style.position = "absolute";
    this.console.log(scrollRange);
    var scroll = setInterval(fr, 3);
    function fr () {
        if (gap >= scrollRange) {
            clearInterval(scroll);
        } else {
            gap += 5;
            // prevElem.style.top = -gap + "px";
            nextElem.style.top = scrollRange - gap + "px";
            this.console.log(gap + "-" + prevElem.style.top);
        }
    }
}

var target = document.getElementById("slide" + 1);
var j = 0 , k , l , m = 0;
function copyScroll () {
    var nextSlide = target;
    this.console.log("1 >>> " + nextSlide.id)
    do {
        nextSlide = nextSlide.parentNode;
        if (!nextSlide) return;
        nextSlide.scrollTop += 1;
        j++ ;
        this.console.log("1 >> j >>> " + j);
    } while (nextSlide.scrollTop == 0);

    var targetY = 0 ;
    do {
        if(target == nextSlide) {
            this.console.log("Breaking since equal nextSlide");
            break;
        }
        targetY += target.offsetTop;
        this.console.log(" targetY >>> " + targetY);
    } while (target == target.offsetParent);

    function move (elem ,scrollTop, targetY, toIncrement) {
        toIncrement++;
        if (toIncrement > 30) return;
        elem.scrollTop = scrollTop + (targetY - scrollTop) / 30 * toIncrement;
        setTimeout(function() {
            move(elem, scrollTop, targetY, toIncrement);
        }, 20);
    }
    move(nextSlide, nextSlide.scrollTop, targetY, 0);
}

var scrollContainer = document.getElementById("scroller");
var slideToElem;

function scrollEng () {  
        if (slideToNo == lastSlideNo) {
        slideToNo = 0;
        // for (i = 0 ; i < lastSlideNo; i++) {
        //     var movingElem = scrollContainer.children[0];
        //     scrollContainer.appendChild(movingElem);
        // this.console.log("i >>> " + i);
        // }
        // this.console.log("lastSlideNo " + slideToNo);
    } else  {
        slideToNo += 1;
        // this.console.log("SlideToNumberIncreased >>> " + slideToNo);
    }
    slideToElem = scrollContainer.children[slideToNo];
}

$('#button1').click(function() {
    scrollEng();
    $('.artContainer').animate({
        scrollTop: slideToElem.offsetTop
    }, {
        duration: "slow",
        easing: "swing"
    });
});