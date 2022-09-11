import Phaser from "phaser";
import AnimationKeys from "~/consts/AnimationKeys";
import SceneKeys from "~/consts/SceneKeys";

export default class Game extends Phaser.Scene {

    constructor() {
        super(SceneKeys.Game)
    }

    preload() {
        
    }

    create() {

        const width = this.scale.width
        const height = this.scale.height

        this.add.tileSprite(0, 0, width, height, 'background')
            .setOrigin(0)

        this.add.sprite(
            width * 0.5,
            height * 0.5,
            'rocket-mouse',
            'rocketmouse_fly01.png'
        )
        .play(AnimationKeys.RocketMouseRun)
    }
}