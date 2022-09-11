import Phaser from "phaser"
import AnimationKeys from "~/consts/AnimationKeys"
import SceneKeys from "~/consts/SceneKeys"
import TextureKeys from "~/consts/TextureKeys"

export default class Preloader extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Preloader)
    }

    preload() {
        this.load.image(TextureKeys.Background, 'house/bg_repeat_340x640.png')

        this.load.atlas(
            TextureKeys.RocketMouse,
            'characters/rocket-mouse.png',
            'characters/rocket-mouse.json'
        )
    }

    create() {

        this.anims.create({
            key: AnimationKeys.RocketMouseRun,
            frames: this.anims.generateFrameNames('rocket-mouse', {
                start: 1,
                end: 4,
                prefix: 'rocketmouse_run',
                zeroPad: 2,
                suffix: '.png'
            }),
            frameRate: 10,
            repeat: -1
        })

        this.scene.start('game')
    }
}