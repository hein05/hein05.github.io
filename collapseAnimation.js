var collapse = document.getElementsByClassName("collapsible");

var i,j,x;

for (i=0; i<collapse.length; i++) {
    
    collapse[i].addEventListener("click", function() {
        // this.classList.toggle("active"); 
        var w = this.nextElementSibling.parentNode.clientWidth;
        var d = this.nextElementSibling.clientWidth;
        x = this.nextElementSibling.offsetLeft;
        if ($(this).next().height() != 0) {
        //if (this.nextElementSibling.style.maxHeight) {//if current button is open when clicked
            // this.classList.toggle("active");
            // this.nextElementSibling.style.maxHeight = null;
            // this.nextElementSibling.style.left = 0 + 'px';
            $(this).next().animate ({
                // height:'toggle'
                height: '0px',
                left: '0px'
            }, 400, "linear");

        } else {//if current button is not opened when clicked.
            $(".content").each(function () {
                if ($(this).height != 0) {
                    $(this).animate ({
                        height: '0px',
                        left: '0px'
                    }, "fast", "linear");
                }
            })
            // for (j=0; j<collapse.length; j++) {//Close all buttons.
            //     console.log($('.content').eq(j).height());
                
            //     if (collapse[j].nextElementSibling.style.height != 0) {
            //         collapse[j].classList.toggle("active"); //This will change owner of function to class active
            //         collapse[j].nextElementSibling.style.maxHeight = null;
            //         collapse[j].nextElementSibling.style.left = 0 + 'px';
            //     if ($(".content").eq(j).height() != 0) {    
            //         $(".content").eq(j).animate ({
            //             // height:'toggle'
            //             height: '0px',
            //             left: '0px'
            //         }, 400, "linear");
            //     }
            // }
            // this.classList.toggle("active");
            var h = this.nextElementSibling.scrollHeight;
            
            $(this).next().animate ({
                // height:'toggle'
                height: h + 'px',
                left: (w - d)/2 - x + "px"
            }, 400, "linear");

            // this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            //--- USE 'PX' AS OTHERS FORMAT WILL CAUSE TROUBLE ---//
            // this.nextElementSibling.style.position = 'relative';
            // this.nextElementSibling.style.left = (w - d)/2 - x + "px";
            // this.nextElementSibling.style.maxHeight = 480 + "px";
            // this.nextElementSibling.style.maxWidth = 720 + "px";
        }  
        // console.log(w/2 + '<< middle , offsetLeft >> ' + x);
    });
}