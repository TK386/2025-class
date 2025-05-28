// This file is intentionally left blank.
var maxSize = 140;
var minSize = 40;
for (var num = Math.floor(Math.random() * 100); num > 0; num--) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    var randomSize = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
    var elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.style.width = `${randomSize}px`;
    elm.style.height = `${randomSize}px`;
    elm.style.borderRadius = `${randomSize / 2}px`;
    elm.style.backgroundColor = randomColor;
    elm.style.position = "absolute";
    var function_name = "remove(" + num + ")"
    elm.setAttribute("onclick", function_name);
    document.getElementById("main").appendChild(elm);

    var left_pos = 10;
    var top_pos = 100;
    left_pos = left_pos + Math.floor(Math.random() * 1000);
    top_pos = top_pos + Math.floor(Math.random() * 1000);

    document.getElementById(num).style.left = "" + left_pos + "px";
    document.getElementById(num).style.top = "" + top_pos + "px";
}
var next = 1;
document.remove = function (id) {
    if (id === next) {
        document.getElementById("main").removeChild(document.getElementById(id));
        next = next + 1
    }
}