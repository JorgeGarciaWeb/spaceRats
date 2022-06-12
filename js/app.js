const ratsAttack = {
    name: "Rats Attack",
    author: "Jorge García & Mónica Sánchez",
    version: "1.0.0 Beta Version",
    License: undefined,
    description: "Kill the enemies",
    gameSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    playerRat: undefined,
    bullet: [],
    enemies: [],
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext("2d")
        this.setDimensions(canvasId)
        this.setEventListeners()
        this.createPlayer()
        this.createEnemies()
        this.drawAll()
        this.resetPlayer()
        // this.resetEnemies()

    },

    //Dimensions
    setDimensions(canvasId) {
        this.gameSize = {

            w: window.innerWidth,
            h: window.innerHeight

        }

        document.querySelector(canvasId).setAttribute("width", this.gameSize.w)
        document.querySelector(canvasId).setAttribute("height", this.gameSize.h)
    },

    //Move the player
    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.playerRat.moveLeft()
                    break;
                case 'ArrowRight':
                    this.playerRat.moveRight()
                    break;
                case ' ':
                    this.playerRat.shoot(this.bullet)
                    break;
            }
        }
    },


    //Create player

    createPlayer() {
        this.playerRat = new Player(this.ctx, 160, 40, 40, this.gameSize)
    },

    resetPlayer() {

        this.playerRat.positionPlayer.x = this.gameSize.w / 2
        this.playerRat.positionPlayer.y = this.gameSize.h - 75
    },


    //Create enemies

    createEnemies() {
        this.enemies.push(new Octopus(this.ctx, 160, 40, 40, this.gameSize))
    },

    resetEnemies() {
        this.enemies.positionEnemy.x = this.gameSize.w / 2
        this.enemies.positionEnemy.y = this.gameSize.h + 150
    },


    drawAll() {
        intervalId = setInterval(() => {
            this.clearAll()
            this.playerRat.draw()

            this.bullet.forEach((elem) => {
                elem.moveUp()
                elem.draw()
                this.clearBullet()
            })

            this.enemies.forEach((elm) => {
                elm.draw()

            })
        }, 20)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    clearBullet() {
        this.bullet = this.bullet.filter(elem => elem.bulletPos.y >= 0)
    },

    clearOctopus() {
        this.enemies = this.enemies.filter(elem => elem.positionEnemy.y >= 0)
    }

}





















