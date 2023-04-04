import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton{

    constructor(eventHanlder:EventHandler,clazz:string,url:string){
        super(eventHanlder,clazz,url);
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticule?url=${this.url}`;
    }
}
