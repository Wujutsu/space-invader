class Cube
{
    #width;
    #height;
    #posXSave;
    #posX;
    #posY;
    #speed;
    #attack;
    #life;
    #color;
    #direction;

    constructor(width, height, posX, posY, speed, attack, life, color) {
        this.width = width;
        this.height = height;
        this.posXSave = posX;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.attack = attack;
        this.life = life;
        this.color = color;
        this.direction = "R";
    }

    moveLeftRight() {
        if (this.posX >= parseFloat(this.posXSave) + 100)
            this.direction = "L";
        if (this.posX <= parseFloat(this.posXSave) - 100)
            this.direction = "R";
        if (this.direction == "R")
            this.posX = parseFloat(this.posX) + parseFloat(this.speed);
        if (this.direction == "L")
            this.posX = parseFloat(this.posX) - parseFloat(this.speed);
    }

    moveBottom(ecartCube) {
        this.posY = parseInt(this.posY) + parseInt(this.height) + parseInt(ecartCube);
    }
}