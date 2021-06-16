class SpatialShip
{
    #width;
    #height;
    #speed;
    #posX;
    #posY;
    #color;
    #tabProjectil;

    constructor(width, height, speed, posX, posY, color) {
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.posX = posX;
        this.posY = posY;
        this.color = color;
        this.tabProjectil = Array();
    }

    setTabProjectil(ObjectProjectil) {
        (this.tabProjectil).push(ObjectProjectil);
    }

    removeTabProjectil(index) {
        (this.tabProjectil).splice(index, 1);
    }

    getTabProjectil() {
        return this.tabProjectil;
    }

    move(direction) {
        if (direction == "L")
            this.posX -= this.speed;
        if (direction == "R")
            this.posX += this.speed;
    }

    borderMapGame(canvasWidth, redirection) {
        if (this.posX >= canvasWidth - this.width) {
            return "L";
        } else if (this.posX <= 0) {
            return "R";
        } else {
            return redirection;
        }
    }
}