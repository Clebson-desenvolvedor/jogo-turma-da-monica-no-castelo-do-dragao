import CenaPrimeiraFase from "./cenas/fases/primeirafase/CenaPrimeiraFase.js";
import CenaIntro from "./cenas/pequenascenas/CenaIntro.js";

let game;

window.addEventListener("load", () => {
    // const img = new Image();
    // img.src = 
    let config = {
        type: Phaser.AUTO,
        width: 600,
        height: 400,
        backgroundColor: 0x999999,
        physics: {
            default: "arcade",
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [CenaIntro, CenaPrimeiraFase]
    };
    
    game = new Phaser.Game(config);
});




