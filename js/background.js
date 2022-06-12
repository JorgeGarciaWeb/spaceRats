class Background {

    constructor(ctx, BackgroundPosX, BackgroundPosY, width, gameSize) {

        this.ctx = ctx
        this.backgroundPosition = { x: BackgroundPosX, y: BackgroundPosY }
        this.backgroundSize = { w: width, h: width * 2 }
        this.backgroundImage = 'img/background.jpeg'
        this.imageInstance = undefined
        this.gameSize = gameSize


        this.init()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.backgroundImage

    }




}