var currentScore = 0;
var imgScore = [];

for (let i = 0; i < 10; i++) {
    imgScore[i] = new Image();
    imgScore[i].src = 'img/' + i + '.png';
}

class Score {
    constructor(game) {
        this.game = game;
    }

    draw = function () {
        if (currentScore <= 9) {
            this.game.ctx.drawImage(imgScore[currentScore], 120, 14);
        }
        else if (currentScore <= 99) {
            let hangChuc = Math.floor(currentScore / 10);
            let donVi = currentScore % 10

            this.game.ctx.drawImage(imgScore[hangChuc], 108, 14);
            this.game.ctx.drawImage(imgScore[donVi], 132, 14);
        }

        else if (currentScore <= 999) {
            let hangTram = Math.floor(currentScore / 100);
            let hangChuc = Math.floor(currentScore % 100 / 10);
            let donVi = Math.floor((currentScore % 100) % 10);

            this.game.ctx.drawImage(imgScore[hangTram], 96, 14);
            this.game.ctx.drawImage(imgScore[hangChuc], 120, 14);
            this.game.ctx.drawImage(imgScore[donVi], 144, 14);
        }
    }

    update = function () {
        if (pipe_X <= -52) {
            currentScore++;
            this.draw();
        }
        this.draw();
    }
}