var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
function showPassword() {
    var x = document.getElementById("password");
    x.type = "text";
}
function hidePassword() {
    var x = document.getElementById("password");
    x.type = 'password';
}
document.getElementById("foot").innerHTML= "<p> &copy;  " + new Date().getFullYear() + "All rights reserved.</p>";

