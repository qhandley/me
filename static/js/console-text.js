// Credit to Tobias on CodePen (https://codepen.io/Tbgse/pen/dYaJyJ)
consoleText("Hi, I'm Quinn.");

function consoleText(text) {
    var con = document.getElementById("cursor");
    var visible = true;
    var target = document.getElementById("console-text");
    var letterCount = 1;

    var buildText = window.setInterval(function() {
        if (letterCount === text.length + 1) {
            clearInterval(buildText);
        } else {
            target.innerHTML = text.substring(0, letterCount)
            letterCount += 1;
        }
    }, 120)

    window.setInterval(function() {
        if (visible === true) {
            con.className = "console-cursor hidden"
            visible = false;
        } else {
            con.className = "console-cursor"
            visible = true;
        }
    }, 400)
}
