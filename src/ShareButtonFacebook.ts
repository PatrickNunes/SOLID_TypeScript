import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton{

    constructor(eventHanlder:EventHandler,clazz:string,url:string){
        super(eventHanlder,clazz,url);
    }

    createLink(): string {
        return `http://www.facebook.com/sharer.php?u=${this.url}`;
    }
}
