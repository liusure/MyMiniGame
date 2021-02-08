// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {_decorator, Component, Node, Label} from 'cc';
import * as cc from 'cc';
import {Me} from "../scripts/me";

const {ccclass, property} = _decorator;

@ccclass('Label1')
export class Label1 extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    private label: any = null
    @property({type: Me})
    private player = null;

    onLoad() {
        this.label = this.getComponent(Label);
        let comp = this.player.node.getPosition();
        this.label.string = `x:${comp.x} y:${comp.y}`;
    }

    start() {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
