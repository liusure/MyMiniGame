// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {_decorator, Component, Node, Label, Graphics} from 'cc';
import * as cc from 'cc';

const {ccclass, property} = _decorator;

@ccclass('MyGraphic')
export class MyGraphic extends Component {

    @property({type: Graphics})
    graph = null;

    onLoad() {
    }

    start() {

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
