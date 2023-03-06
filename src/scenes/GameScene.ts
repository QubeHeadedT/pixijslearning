import { Container, Sprite } from "pixi.js";
import { IScene, Manager } from "../Manager";

export class GameScene extends Container implements IScene {
    private clampy: Sprite;
    private clampySpeed: number;
    private movement: number;
    constructor() {
        super();

        this.clampy = Sprite.from("Clampy from assets.ts!");
        this.movement = 0;

        document.addEventListener("keydown", this.onKeyDown.bind(this));
        document.addEventListener("keyup", this.onKeyUp.bind(this));

        this.clampy.anchor.set(0.5);
        this.clampy.x = Manager.width / 2;
        this.clampy.y = Manager.height / 2;
        this.addChild(this.clampy);

        this.clampySpeed = 5;
    }
    public update(framesPassed: number): void {
        // Lets move clampy!
        this.clampy.x += this.movement * this.clampySpeed * framesPassed;

        if (this.clampy.x > Manager.width) {
            this.clampy.x = Manager.width;
        }

        if (this.clampy.x < 0) {
            this.clampy.x = 0;
        }
    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log(e);
        if (e.code === 'ArrowRight') {
            this.movement = 1;
        } else if (e.code === 'ArrowLeft') {
            this.movement = -1;
        } 
    }

    private onKeyUp(e: KeyboardEvent): void {
        if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
            this.movement = 0;
        }
    }
}