const BIRD_IMG_1 = new Image();
const BIRD_IMG_2 = new Image();
const BIRD_IMG_3 = new Image();

BIRD_IMG_1.src = 'img/bird_normal.png';
BIRD_IMG_2.src = 'img/bird_up.png';
BIRD_IMG_3.src = 'img/bird_down.png';

var birds = [BIRD_IMG_1, BIRD_IMG_2, BIRD_IMG_3];
var BIRD_FRAME = 0;
var SPEED = 0;
var bird_X = 20;
var bird_Y = 200;
var accelerationDown = 0;

class Bird {
    constructor(game) {
        this.game = game;
    }

    draw = function () {
        this.game.ctx.drawImage(birds[BIRD_FRAME], bird_X, bird_Y);
    }

    update = function () {
        this.checkFrameOfBird();
        this.autoFallen();
        this.birdFly();
    }

    autoFallen = function () {
        accelerationDown += 0.3;
        bird_Y += accelerationDown;
        this.draw();
    }

    checkFrameOfBird = function () {
        if (SPEED >= 30) {
            SPEED = 0;
        }
        if (SPEED % 10 === 0) {
            BIRD_FRAME++;
        }
        if (BIRD_FRAME >= 3) {
            BIRD_FRAME = 0;
        }
        SPEED += 2;
    }

    birdFly = function () {
        this.game.canvas.onclick = function () {
            if (bird_Y <= 22) {
                accelerationDown = 0;
                return;
            }
            accelerationDown = -4;
        }
    }

    touchPipeOrLand = function () {
        if (bird_Y >= 395) {
            return true;
        }
        else if (
            (bird_X + 32 >= pipe_X) &&
            (bird_X + 32 <= (pipe_X + 80)) &&
            (bird_Y + 22 >= pipe_Y)
        ) {
            return true;
        }
        else if (currentScore >= 1000) {
            return true;
        }
        else {
            return false;
        }
    };
}
