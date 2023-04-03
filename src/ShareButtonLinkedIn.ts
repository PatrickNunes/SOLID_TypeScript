import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonLinkedIn extends AbstractShareButton{

    constructor(clazz:string,url:string){
        super(clazz,url);
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticule?url=${this.url}`;
    }
}
