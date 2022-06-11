const gameApp = {
    name: "Space Rats",
    author : "Jorge García",
    version : "1.0.0 Beta Version",
    License: undefined,
    description : "Kill the enemies",
    gameSize : {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext("2d")
        this.setDimensions(canvasId)
    },

    //Dimensions
    setDimensions(canvasId) {
        this.gameSize = {

            w: 650,
            h: window.innerHeight
            // w: 650,
            // h: window.innerHeight

        }

        document.querySelector(canvasId).setAttribute("width", this.gameSize.w)
        document.querySelector(canvasId).setAttribute("height", this.gameSize.h)
    }
}