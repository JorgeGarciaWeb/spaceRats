class Octopus {
    constructor(ctx, octopusPosX, octopusPosY, octopusImg) {

        this.ctx = ctx
        this.positionEnemy = { x: octopusPosX, y: octopusPosY }
        this.enemySize = { w: 80, h: 80 }
        this.octopusImg = octopusImg
        this.imageInstance = undefined
    
        this.init()
    }

    init() {
       /*  this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 100, 100, 100) */
        this.imageInstance = new Image()
        this.imageInstance.src = `./img/octopus.png` 

   }

    draw() {
        this.ctx.drawImage(this.imageInstance, 100, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 200, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 300, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 400, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 500, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 600, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 700, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 800, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 900, 100,100,100)
        this.ctx.drawImage(this.imageInstance, 1000, 100,100,100)



        this.ctx.drawImage(this.imageInstance, 100, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 200, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 300, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 400, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 500, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 600, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 700, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 800, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 900, 200, 100, 100)
        this.ctx.drawImage(this.imageInstance, 1000, 200, 100, 100) 
 
         //Enemies first row
        /* this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 100, 50, 50)
        this.ctx.fillRect(200, 100, 50, 50)
        this.ctx.fillRect(300, 100, 50, 50)
        this.ctx.fillRect(400, 100, 50, 50)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(500, 100, 50, 50)
        this.ctx.fillRect(600, 100, 50, 50)
        this.ctx.fillRect(700, 100, 50, 50)
        this.ctx.fillRect(800, 100, 50, 50)
        this.ctx.fillRect(900, 100, 50, 50)
        this.ctx.fillRect(1000, 100, 50, 50)
        this.ctx.fillRect(1100, 100, 50, 50)
 */
        //Enemies second row
       /*  this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 200, 50, 50)
        this.ctx.fillRect(200, 200, 50, 50)
        this.ctx.fillRect(300, 200, 50, 50)
        this.ctx.fillRect(400, 200, 50, 50)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(500, 200, 50, 50)
        this.ctx.fillRect(600, 200, 50, 50)
        this.ctx.fillRect(700, 200, 50, 50)
        this.ctx.fillRect(800, 200, 50, 50)
        this.ctx.fillRect(900, 200, 50, 50)
        this.ctx.fillRect(1000, 200, 50, 50)
        this.ctx.fillRect(1100, 200, 50, 50)

        //Enemies three row
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 300, 50, 50)
        this.ctx.fillRect(200, 300, 50, 50)
        this.ctx.fillRect(300, 300, 50, 50)
        this.ctx.fillRect(400, 300, 50, 50)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(500, 300, 50, 50)
        this.ctx.fillRect(600, 300, 50, 50)
        this.ctx.fillRect(700, 300, 50, 50)
        this.ctx.fillRect(800, 300, 50, 50)
        this.ctx.fillRect(900, 300, 50, 50)
        this.ctx.fillRect(1000, 300, 50, 50)
        this.ctx.fillRect(1100, 300, 50, 50) */
 
    }
}

class Piton extends Octopus {

    constructor(ctx, pitonPosX, pitonPosY) {
 
        super(ctx, pitonPosX, pitonPosY)
        this.ctx = ctx
        this.pitonPos = { x: pitonPosX, y: pitonPosY }
        this.pitonSize = { w: 30, h: 30 }
        this.imageInstance = undefined
        // this.damage = 1.5
    } 

}
