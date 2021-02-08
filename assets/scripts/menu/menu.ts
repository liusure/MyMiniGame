// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {_decorator, Component, Node} from 'cc';
import * as cc from 'cc';

const {ccclass, property} = _decorator;

@ccclass('Menu')
export class Menu extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    onLoad() {
        cc.director.preloadScene('scene');
    }

    start() {
        // Your initialization goes here.
    }

    changeScene(event, customEventData) {
        switch (customEventData) {
            case 'start': {
                cc.director.loadScene('scene')
                break
            }
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
