import Teclado from "../../../Teclado.js";
import Jogador from "../../../jogador/Jogador.js";

export default class CenaPrimeiraFase extends Phaser.Scene {
    constructor() {
        super("CenaPrimeiraFase");
    }

    preload() {
        this.load.image("mapa-fase-1", "/cenas/fases/primeirafase/imagens/mapa-fase-12.png");
        this.load.image("monica", "/jogador/imagens/monicateste.png");
    }

    create() {
        const { width, height } = this.sys.canvas;

        // Adiciona a imagem do mapa sem redimensionar
        this.mapa = this.add.image(0, 0, "mapa-fase-1").setOrigin(0, 0);

        // Calcula a escala necessária para cobrir a tela verticalmente e horizontalmente
        const scaleX = width / this.mapa.width;
        const scaleY = height / this.mapa.height;
        const scale = Math.max(scaleX, scaleY);
        this.mapa.setScale(scale);

        // Define os limites do mundo com base no tamanho da imagem do mapa
        this.physics.world.setBounds(0, 0, this.mapa.width * scale, this.mapa.height * scale);

        // Configura a câmera para seguir o jogador e define os limites da câmera
        this.cameras.main.setBounds(0, 0, this.mapa.width * scale, this.mapa.height * scale);

        this.jogador = new Jogador(this, 100, 450);
        this.cameras.main.startFollow(this.jogador);

        // Inicializa o teclado com a instância do jogador
        this.teclado = new Teclado(this, this.jogador);
        this.teclado.init();
    }

    update() {
        if (this.teclado.teclaEsquerda()) {
            this.jogador.moveLeft();
        } else if (this.teclado.teclaDireita()) {
            this.jogador.moveRight();
        } else {
            this.jogador.stop();
        }

        if (this.teclado.teclaSalto()) {
            this.jogador.jump();
        }
    }
}