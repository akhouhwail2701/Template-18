document.getElementById("btn-menu").onclick = function () {
    document.getElementById("menu").style.cssText = " transform: translateY(0%);";
    document.getElementById("side-bar").style.cssText = "visibility:hidden";
}
document.getElementById("btn-close").onclick = function () {
    document.getElementById("menu").style.cssText = " transform: translateY(-100%);";
    document.getElementById("side-bar").style.cssText = "visibility:visible";
}

window.onload = function () {
    document.getElementById("h1").style.color = "#fff";
    document.getElementById("o1").style.color = "#ffffffa7";
    document.getElementById("s1").style.color = "#ffffffa7";
    document.getElementById("p1").style.color = "#ffffffa7";
    document.getElementById("c1").style.color = "#ffffffa7";
}
onscroll = function () {
    if (this.scrollY < 300) {
        document.getElementById("h1").style.color = "#fff";
        document.getElementById("o1").style.color = "#ffffffa7";
        document.getElementById("s1").style.color = "#ffffffa7";
        document.getElementById("p1").style.color = "#ffffffa7";
        document.getElementById("c1").style.color = "#ffffffa7";
    }
    if (this.scrollY > 400) {
        document.getElementById("h1").style.color = "#ffffffa7";
        document.getElementById("o1").style.color = "#fff";
        document.getElementById("s1").style.color = "#ffffffa7";
        document.getElementById("p1").style.color = "#ffffffa7";
        document.getElementById("c1").style.color = "#ffffffa7";
    }
    if (this.scrollY > 1500) {
        document.getElementById("h1").style.color = "#ffffffa7";
        document.getElementById("o1").style.color = "#ffffffa7";
        document.getElementById("s1").style.color = "#fff";
        document.getElementById("p1").style.color = "#ffffffa7";
        document.getElementById("c1").style.color = "#ffffffa7";
    }
    if (this.scrollY > 2700) {
        document.getElementById("h1").style.color = "#ffffffa7";
        document.getElementById("o1").style.color = "#ffffffa7";
        document.getElementById("s1").style.color = "#ffffffa7";
        document.getElementById("p1").style.color = "#fff";
        document.getElementById("c1").style.color = "#ffffffa7";
    }
    if (this.scrollY > 3300) {
        document.getElementById("h1").style.color = "#ffffffa7";
        document.getElementById("o1").style.color = "#ffffffa7";
        document.getElementById("s1").style.color = "#ffffffa7";
        document.getElementById("p1").style.color = "#ffffffa7";
        document.getElementById("c1").style.color = "#fff";
    }
}
