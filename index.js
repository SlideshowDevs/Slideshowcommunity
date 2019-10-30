// JavaScript source code
window.addEventListener('resize', resize);
document.addEventListener("DOMContentLoaded", function () {
    resize();
});
function resize() {
    if (window.innerWidth < 714) {
        document.getElementById("selected_button").style.visibility = "hidden";
        document.getElementById("selected_button").style.width = "1px";
        document.getElementById("title").style.height = "25px";
        document.getElementById("title").style.marginBottom = "95px";
    }
    else {
       
        document.getElementById("selected_button").style.width = "160px";
        document.getElementById("selected_button").style.visibility = "visible";
        document.getElementById("title").style.marginBottom = "80px";
        if (window.innerWidth < 960) {
            document.getElementById("title").style.height = "35px";
        }
        else {
            document.getElementById("title").style.marginBottom = "70px";
            document.getElementById("title").style.height = "45px";
        }
    }
    
}