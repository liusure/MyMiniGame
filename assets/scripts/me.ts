// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import {_decorator, Component, Node, Graphics, Vec3, Vec2, UITransform, Quat} from 'cc';
import * as cc from 'cc';
import {MyGraphic} from "../test/graphic";

const {ccclass, property} = _decorator;

@ccclass('Me')
export class Me extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    flag = false;
    deg = 0;

    @property({type: Node})
    player = null;

    @property({type: UITransform})
    uiTransform = null;

    @property({type: MyGraphic})
    graph = null;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.uiTransform = this.getComponent(UITransform);
        this.graph = this.getComponent(Graphics);
    }

    start() {
        this.fire();
        // Your initialization goes here.
    }

    update() {
        if (this.flag) {
        }
    }

    onMouseDown(event) {
    }

    onMouseUp(event) {
        this.flag = false;
    }

    onMouseMove(event) {
        this.flag = true;
        const vp = this.uiTransform.convertToNodeSpaceAR(cc.v3(event._x, event._y, 0));
        const vp2 = cc.v2(0, -100);
        const ang = vp2.signAngle(vp) / Math.PI * 180;
        let e = cc.v3();
        let ro = this.node.getWorldRotation();
        Quat.toEuler(e, ro);
        if (Math.abs(ang + e.z) < 90) {
            this.node.setRotationFromEuler(0, 0, ang + e.z);
        } else {
            if (ang + e.z > 90) {
                this.node.setRotationFromEuler(0, 0, 90);
            } else if (ang + e.z < -90) {
                this.node.setRotationFromEuler(0, 0, -90);
            }
        }
    }

    fire() {
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}