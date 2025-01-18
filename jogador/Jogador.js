export default class Monica extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'monica');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
    }

    moveLeft() {
        this.setVelocityX(-160);
    }

    moveRight() {
        this.setVelocityX(160);
    }

    stop() {
        this.setVelocityX(0);
    }

    jump() {
        if (this.body.touching.down) {
            this.setVelocityY(-330);
        }
    }
}