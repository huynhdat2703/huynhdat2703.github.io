const BASE_IMG = new Image();
BASE_IMG.src = 'img/base.png';
var base_x = 0;

class Base {
    constructor(game) {
        this.game = game;
    }

    draw = function () {
        this.game.ctx.drawImage(BASE_IMG, base_x, 420);
        this.game.ctx.drawImage(BASE_IMG, base_x + 336, 420);
    }

    update = function () {
        base_x -= 2;
        if (base_x <= -336) {
            base_x = 0;
        }
        this.draw();
    }
}
