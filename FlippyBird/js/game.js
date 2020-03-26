var canvas = null;
var ctx = null;
var isStart = false;

const GAMEOVER_IMG = new Image();
GAMEOVER_IMG.src = 'img/gameover.png';

const START_IMG = new Image();
START_IMG.src = 'img/start.png';

const RETRY_IMG = new Image();
RETRY_IMG.src = 'img/retry.png';

var bg = new Bg(this);
var base = new Base(this);
var bird = new Bird(this);
var pipe = new Pipe(this);
var score = new Score(this);

class Game {
    constructor() {
        this.width = 288;
        this.height = 512;
    }

    drawGame = function () {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
        canvas.width = this.width;
        canvas.height = this.height;
    }

    run = function () {
        this.drawGame();
        loopGame();
    }
}

function loopGame() {
    stopGame = isStop();
    if (isStart === false) {
        bg.draw();
        score.draw();
        pipe.draw();
        base.draw();
        bird.draw();
        ctx.drawImage(START_IMG, canvas.width / 2 - 100, 250);
        canvas.onclick = function () {
            isStart = true;
        }
    }
    else {
        if (isStop() === true) {
            // ctx.drawImage(RETRY_IMG, canvas.width / 2 - 50, 420);
            ctx.drawImage(GAMEOVER_IMG, canvas.width / 2 - 100, canvas.height / 2 - 200);
            canvas.onclick = function () {
                //TODO
            }
        }
        else {
            bg.update();
            score.update();
            pipe.update();
            base.update();
            bird.update();
        }
    }
    myLoop = window.requestAnimationFrame(this.loopGame);
}

function isStop() {
    if (bird.touchPipeOrLand()) {
        return true;
    }
    else {
        return false;
    }
}

game = new Game();
game.run();




