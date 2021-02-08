// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {_decorator, Component, Node, Label, Vec2} from 'cc';
import * as cc from "cc";
import {Me} from "../scripts/me";

const {ccclass, property} = _decorator;

@ccclass('Label2')
export class Label2 extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    private label: any = null

    @property({type: Me})
    private player = null;

    worldPos: Vec2 = new Vec2(0, 0);
    localPos: Vec2 = new Vec2(0, 0);

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.label = this.getComponent(Label);
    }

    start() {
    }

    onMouseMove(event) {
        this.label.string = `x:${this.localPos}`
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
