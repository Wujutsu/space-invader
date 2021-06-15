//Init
var interval = setInterval(play, 1);
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Dimension media
redimensionMedia($(window).width() - 2, $(window).height() - 2);
$(window).resize(function () { 
    redimensionMedia($(window).width() - 2, $(window).height() - 2);
});
function redimensionMedia(width, height) {
    $("#myCanvas").attr("width", width);
    $("#myCanvas").attr("height", height);
}

$("body").keydown(function (e) { 
    var keyCode = e.keyCode;
    console.log(keyCode);
    /*if (keyCode == 37)
    if (keyCode == 39)
    /*if (keyCode == 32)
});

function play() {
    //Refresh canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
/*
    ctx.beginPath();
    ctx.rect(robot.posX, robot.posY, robot.width, robot.height);
    ctx.fillStyle = robot.color;
    ctx.fill();
    ctx.closePath();
    */
}

