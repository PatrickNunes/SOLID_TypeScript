import AbstractShareButton from "./AbstractShareButton";
export default class ShareButtonTwitter extends AbstractShareButton{

    constructor(clazz:string,url:string){
        super(clazz,url);
    }

    bind(clazz : string,socialNetwork:string){
        let link:string;
        if(socialNetwork === 'twitter'){
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if(socialNetwork === 'facebook'){
            link = `http://www.facebook.com/sharer.php?u=${this.url}`;
        }
        if(socialNetwork === 'linkedin'){
            link = `https://www.linkedin.com/shareArticule?url=${this.url}`;
        }

        
        this.eventHandler.addEventListenerToClass(clazz,"click",() => window.open(link));
            
        
    }
}