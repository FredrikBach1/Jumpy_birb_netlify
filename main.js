//import { Birb } from './birb.js';
import { Background } from './background.js';


class Main {
    constructor(cvs, ctx) {
        this.cvs = cvs;
        this.ctx = ctx;
        this.frames = 0;
        //this.birb = new Birb(cvs, ctx);
        this.background = new Background(ctx);
    }

    //Draw
    draw() {
        //this.birb.draw();
        this.background.draw();
        //bg.draw();
        //Här lägger vi våra nya classer. Se BIRB för hur man gör med import/export.
    }

    //Update
    update() {

    }

    //Gameloop
    loop() {
        this.update();
        this.draw();
        this.frames++;
        requestAnimationFrame(() => this.loop());
    }

    start() {
        this.loop();
    }
}

const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
let app = new Main(cvs, ctx);
app.start()

