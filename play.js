//Initialisation
var interval = setInterval(play, 1);
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tabOjectCube = Array();
var ecartCube = 5;
var direction = "";
var cooldownProjectil = 0;
var cooldownCubeBottom = 0;
var spacial = new SpatialShip(100, 30, 1, (canvas.width / 2) - (100 / 2), canvas.height - 30, "red");

//Repartion des cubes sur la map en fonction des manches
var manche = 0;
var TabNbCubeByManche = [20, 30];
var TabNbLineByManche = [3, 5];
function repartitionCubeOnMap(widthCube, heightCube) {
    tabPosition = Array();

    nbCubeByLine = TabNbCubeByManche[manche] / TabNbLineByManche[manche];
    posXStart = (canvas.width / 2) - ((nbCubeByLine * (widthCube + ecartCube)) / 2);
    posYStart = heightCube + ecartCube;
    
    for(var line = 0; line < TabNbLineByManche[manche]; line++) {
        for (var col = 0; col < nbCubeByLine; col++) {
            posX = posXStart + (col * (widthCube + ecartCube));
            posY = posYStart + (line * (heightCube + ecartCube));
            tabPosition.push(posX+';'+posY);
        }
    }
    
    return tabPosition;
}

//Action on click keydown
$("body").keydown(function (e) { 
    var keyCode = e.keyCode;
    console.log(keyCode);
    if (keyCode == 37)
        direction = "L";
    if (keyCode == 39)
        direction = "R";
    if (keyCode == 32) {
        if(cooldownProjectil > 50) {
            cooldownProjectil = 0;
            spacial.setTabProjectil(new Projectil(10, 10, (spacial.posX + (spacial.width / 2)), spacial.posY - 10, 1.5, 1, "white"));
        }
    }
});


function play() {
    //Refresh canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Init the manche
    if (tabOjectCube.length == 0) {
        console.log("init");
        repartition = repartitionCubeOnMap(40, 30);
        repartition.forEach(cube => {
            position = cube.split(';');
            posX = position[0];
            posY = position[1];
            tabOjectCube.push(new Cube(40, 30 , posX, posY, 0.1, 1, 1, "#0095DD"));
        });
    } else { // Play the manche
        //Show cubes
        if (cooldownCubeBottom > 2000) {
            cubeBottom = true;
            cooldownCubeBottom = 0;
        } else {
            cubeBottom = false;
        } 
        tabOjectCube.forEach(cube => {
            ctx.beginPath();
            ctx.rect(cube.posX, cube.posY, cube.width, cube.height);
            ctx.fillStyle = cube.color;
            ctx.fill();
            ctx.closePath();
            cube.moveLeftRight();
            if (cubeBottom)
                cube.moveBottom(ecartCube);
        });

        //Show spacialShip
        ctx.beginPath();
        ctx.rect(spacial.posX, spacial.posY, spacial.width, spacial.height);
        ctx.fillStyle = spacial.color;
        ctx.fill();
        ctx.closePath();
        spacial.move(direction);
        direction = spacial.borderMapGame(canvas.width, direction);
        //Show spacialShip projectil
        (spacial.getTabProjectil()).forEach(projectil => {
            ctx.beginPath();
            ctx.arc(projectil.posX, projectil.posY, projectil.width, 0, 5 * Math.PI);       
            ctx.fillStyle = projectil.color;
            ctx.fill();
            projectil.move();
            //Projectil touche cube
            /*tabOjectCube.forEach(cube => {
                ctx.beginPath();
                ctx.rect(cube.posX, cube.posY, cube.width, cube.height);
                ctx.fillStyle = cube.color;
                ctx.fill();
                ctx.closePath();
                
            });*/
        });
    }

    cooldownProjectil++;
    cooldownCubeBottom++;
}