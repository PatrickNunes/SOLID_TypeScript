import EventHandler from "./EventHandler";
import DOMEventHandler from "./DOMEventHandler";

export default abstract class AbstractShareButton{

    eventHandler:EventHandler
    clazz:string

    constructor(eventeHandler:EventHandler,clazz:string){
        this.clazz = clazz;
        this.eventHandler = eventeHandler;
    }

   abstract createAction();

    bind(){   
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(this.clazz,"click",action);   
    }
}