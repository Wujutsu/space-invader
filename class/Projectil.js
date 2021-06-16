class Projectil
{
    #width;
    #height;
    #posX;
    #posY;
    #speed;
    #attack;
    #color;

    constructor(width, height, posX, posY, speed, attack, color) {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.attack = attack;
        this.color = color;
    }

    move() {
        this.posY -= this.speed;
    }
}