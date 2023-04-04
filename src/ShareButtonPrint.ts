import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractShareButton{

    constructor(eventHanlder:EventHandler,clazz:string){
        super(eventHanlder,clazz);
    }

    createAction() {
        return () => window.print();
    }

}
