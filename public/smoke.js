

class Smoke {

    constructor() {
        let x = Math.floor(Math.random() *  -30) +260
        let y = Math.floor(Math.random() * -90) -100
        let hw = Math.random() * 7
        this.pos = {x, y, hw}
        this.vel = {x: 0, y: -0.5}
    }

    update () {
        this.pos.x 
        this.pos.y 
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }



    smokeRender() {

            ctx.fillStyle = 'grey'

            ctx.fillRect((cnv.width / 2)+this.pos.x, (cnv.height / 2)+this.pos.y, this.pos.hw, this.pos.hw)
        
    }

    offScreen() {
        return (this.pos.y < -500)
    }

    diffusing() {
        if (this.pos.y < -240) {
            this.vel.x = 0.25
        }
        if (this.pos.y < -260) {
            this.vel.x = -0.25
        }
        if (this.pos.y < -280) {
            this.vel.x = 0.25
        }
        if (this.pos.y < -300) {
            this.vel.x = -1.5
            this.vel.y = -0.9
        }
        
    }
}

