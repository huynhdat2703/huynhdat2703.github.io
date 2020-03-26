const PIPE_IMG = new Image();
PIPE_IMG.src = 'img/pipe.png';
var pipe_X = 290;
var pipe_Y = randomPipeY();

class Pipe {
    constructor(game) {
        this.game = game;
    }

    draw = function () {
        this.game.ctx.drawImage(PIPE_IMG, pipe_X, pipe_Y);
    }

    update = function () {
        if (pipe_X <= -52) {
            pipe_X = 290;
            pipe_Y = randomPipeY();
        }
        pipe_X -= 2;
        this.draw();
    }
}

function randomPipeY() {
    return Math.floor(Math.random() * (320 - 100) + 100);
}
