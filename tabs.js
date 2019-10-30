// JavaScript source code
window.addEventListener('resize', resize);
document.addEventListener("DOMContentLoaded", function () {
    resize();
});
function resize() {
    if (window.innerWidth < 714) {
        document.getElementById("selected_button").style.visibility = "hidden";
        document.getElementById("selected_button").style.width = "1px";
    }
    else {

        document.getElementById("selected_button").style.width = "160px";
        document.getElementById("selected_button").style.visibility = "visible";
    }
}