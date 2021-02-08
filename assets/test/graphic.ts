// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {_decorator, Component, Node, Label, Graphics} from 'cc';
import * as cc from 'cc';
import {Me} from "../scripts/me";

const {ccclass, property} = _decorator;

@ccclass('MyGraphic')
export class MyGraphic extends Component {

    @property({type: Graphics})
    graph = null;

    onLoad() {
    }

    start() {
        this.graph.lineWidth = 10;
        this.graph.fillColor.fromHEX('#ff0000');
        this.graph.moveTo(-40, 0);
        this.graph.lineTo(40, 0);
        this.graph.lineTo(0, 80);
        this.graph.close();
        this.graph.stroke();
        this.graph.fill();
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
