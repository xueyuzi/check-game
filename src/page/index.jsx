import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
export default class Index extends Component{
    state = {
        stage:{}
    }
    componentDidMount(){
        let type = "WebGL"
        if(!PIXI.utils.isWebGLSupported()){
            type="canvas"
        }
        PIXI.utils.sayHello(type)
        
        const stage = new PIXI.Application(800, 600, {
            backgroundColor: 0x10bb99,
            view: this.refs.stage
        });
        this.setState({
            stage
        })
    }
    resize(){
        console.log(this.state)
        this.state.stage.renderer.resize(512,512);
    }
    paint(){
        for(let i=0;i<10;i++){
            for(let l=0;l<10;l++){
                var rectangle = this.genMapItem(50*i+i,50*l+l);
                this.state.stage.stage.addChild(rectangle);
            }
        }
        
        
    }
    genMapItem(x,y){
        let rectangle = new PIXI.Graphics();
        rectangle.beginFill(0x66CCFF);
        rectangle.drawRect(0, 0, 50, 50);
        rectangle.endFill();
        rectangle.x = x;
        rectangle.y = y;
        rectangle.interactive = true;
        rectangle.on("click",(e)=>this.red(e))
        return rectangle;
    }
    red(obj){
        console.log(obj.target)
        obj.target.beginFill(0xbbb)
        obj.target.drawRect(0, 0, 50, 50);
        obj.target.endFill(0xbbb)

    }
    render(){
        
        return (
            <div>
                <canvas ref="stage"></canvas>
                <button onClick={()=>this.resize()}>resize</button>
                <button onClick={()=>this.paint()}>paint</button>
            </div>
        )
    }
}