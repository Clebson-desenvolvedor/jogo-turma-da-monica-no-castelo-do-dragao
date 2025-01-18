export default class Teclado {
    constructor(scene, jogador) {
        this.scene = scene
        this.cursors = null;
        this.ataque = null;
        this.salto = null;
        this.jogador = jogador;
    }

    init() {
        if (this.scene?.input) {
            this.cursors = this.scene.input.keyboard.createCursorKeys();
            this.ataque = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
            this.salto = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

            this.scene.input.keyboard.on('keydown-LEFT', () => {
                this.player.moveLeft();
            });

            this.scene.input.keyboard.on('keydown-RIGHT', () => {
                this.player.moveRight();
            });

            this.scene.input.keyboard.on('keyup-LEFT', () => {
                if (!this.teclaDireita()) {
                    this.player.stop();
                }
            });

            this.scene.input.keyboard.on('keyup-RIGHT', () => {
                if (!this.teclaEsquerda()) {
                    this.player.stop();
                }
            });

            this.scene.input.keyboard.on('keydown-X', () => {
                this.player.jump();
            });
        } else {
            console.log("A cena não possui suporte para teclado (input não definido).");
        }
    }

    teclaEsquerda() {
        return this.cursors.left?.isDown || false;
    }

    teclaDireita() {
        return this.cursors.right?.isDown || false;
    }

    teclaParaCima() {
        return this.cursors.up?.isDown || false;
    }

    teclaParaBaixo() {
        return this.cursors.down?.isDown || false;
    }

    teclaAtaque() {
        return this.ataque?.isDown || false;
    }

    teclaSalto() {
        return this.salto?.isDown;
    }
}