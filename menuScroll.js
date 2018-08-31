$(document).ready(function () {
    $(".menu a").click(function (e) { //Updated to only check links on "Menu Class"
        if (document.documentElement.clientWidth <= 600) {
            var toggle = document.getElementById("toggle");
            if(toggle.checked) {
                toggle.checked = false;
            }
        } 
        if(this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate ({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // window.location.hash = hash;
            });
        } else {
            alert("Soon to be updated. Cheers    :))))");
        }
    });
});


