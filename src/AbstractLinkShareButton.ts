import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {

    url: string;

    constructor(eventHanlder:EventHandler,clazz:string,url:string){
        super(eventHanlder,clazz);
        this.url = url;
    }

    abstract createLink():string;

    createAction():any {
        const link = this.createLink();

        return () => window.open(link);
    }

}