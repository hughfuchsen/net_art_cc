

class RainDrop {

    constructor() {
        let x = Math.random() * (cnv.width + 500)
        let y = Math.random() * -100 - 10
        let hw = Math.random() * 7
        this.pos = {x, y, hw}
        this.vel = {x: -5, y: 7}
    }

    update () {
        this.pos.x 
        this.pos.y 
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }

    renderWater() {
        ctx.fillRect(this.pos.x, this.pos.y, this.pos.hw, this.pos.hw)
    }

    recursiveWaterRender(tailFactor) {

            ctx.fillStyle = 'skyblue'

            ctx.fillRect(this.pos.x + (this.pos.hw + tailFactor), this.pos.y - (this.pos.hw + tailFactor), this.pos.hw - tailFactor/5, this.pos.hw - tailFactor/5)

            if (tailFactor > 20) return

            this.recursiveWaterRender(tailFactor + 5)

        
    }

    offScreen() {
        return (this.pos.y > cnv.height);
    }

}

