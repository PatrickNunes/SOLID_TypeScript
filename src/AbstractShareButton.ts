import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton{

    url:string
    eventHandler:EventHandler
    clazz:string

    constructor(clazz:string,url:string){
        this.clazz = clazz
        this.url = url;
        this.eventHandler = new EventHandler()
    }

    abstract createLink():string;

    bind(){   
        const link:string = this.createLink();
        this.eventHandler.addEventListenerToClass(this.clazz,"click",() => window.open(link));   
    }
}