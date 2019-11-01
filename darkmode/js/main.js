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
function alert(){
    alert("canceling transaction");
}
function send(name,password){
    var password = comfirm(" Enter password");
    password.type = 'password';
    alert(password);

}
document.getElementById("foot01").innerHTML= "<p> &copy;  " + new Date().getFullYear() + "  All Rights Reserved.</p>"
//document.getElementById("foot01").innerHTML= "<p> Learn More About Our services on : <ul><li><a href"">Telegram</a></ul></p>";