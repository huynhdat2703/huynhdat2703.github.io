const BG_IMG = new Image();
BG_IMG.src = 'img/bg.png';
var bg_x = 0;

class Bg {
    constructor(game) {
        this.game = game;
    }

    draw = function () {
        this.game.ctx.drawImage(BG_IMG, bg_x, 0);
        this.game.ctx.drawImage(BG_IMG, bg_x + 288, 0);
    }

    update = function () {
        bg_x--;
        // console.log(bg_x);
        if (bg_x <= -288) {
            bg_x = 0;
        }
        this.draw();
    }
}
