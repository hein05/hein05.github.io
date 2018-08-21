var collapse = document.getElementsByClassName("collapsible");

var i,j,x;

for (i=0; i<collapse.length; i++) {
    
    collapse[i].addEventListener("click", function() {
        // this.classList.toggle("active"); 
        var w = this.nextElementSibling.parentNode.clientWidth;
        var d = this.nextElementSibling.clientWidth;
        x = this.nextElementSibling.offsetLeft;
        if (this.nextElementSibling.style.maxHeight) {//if current button is open when clicked
            this.classList.toggle("active");
            this.nextElementSibling.style.maxHeight = null;
            this.nextElementSibling.style.left = 0 + 'px';
        } else {//if current button is not opened when clicked.
            for (j=0; j<collapse.length; j++) {//Close all buttons.
                // console.log("content");
                if (collapse[j].nextElementSibling.style.maxHeight) {
                    collapse[j].classList.toggle("active"); //This will change owner of function to class active
                    collapse[j].nextElementSibling.style.maxHeight = null;
                    collapse[j].nextElementSibling.style.left = 0 + 'px';
                }
            }
            this.classList.toggle("active");
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            //--- USE 'PX' AS OTHERS FORMAT WILL CAUSE TROUBLE ---//
            this.nextElementSibling.style.position = 'relative';
            this.nextElementSibling.style.left = (w - d)/2 - x + "px";
            // this.nextElementSibling.style.maxHeight = 480 + "px";
            // this.nextElementSibling.style.maxWidth = 720 + "px";
        }  
        console.log(w/2 + '<< middle , offsetLeft >> ' + x);
    });
}