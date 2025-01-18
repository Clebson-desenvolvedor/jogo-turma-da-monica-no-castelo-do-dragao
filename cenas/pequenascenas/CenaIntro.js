import Teclado from "../../Teclado.js";

export default class CenaIntro extends Phaser.Scene {
    constructor() {
        super("CenaIntro");
    }

    preload() {
        this.load.image("intro", "assets/intro.png");

    }

    create() {
        const { width, height } = this.sys.canvas;
        this.add.image(0, 0, "intro").setOrigin(0, 0).setDisplaySize(width, height);
        this.teclado = new Teclado(this);
        this.teclado.init();
    }

    update() {
        if (this.teclado.salto.isDown) {
            this.scene.switch("CenaPrimeiraFase");
         }
    }
}