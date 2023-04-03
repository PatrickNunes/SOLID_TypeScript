import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton{

    constructor(clazz:string,url:string){
        super(clazz,url);
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}


// if(socialNetwork === 'twitter'){
//     link = `https://twitter.com/share?url=${this.url}`;
// }
// if(socialNetwork === 'facebook'){
//     link = `http://www.facebook.com/sharer.php?u=${this.url}`;
// }
// if(socialNetwork === 'linkedin'){
//     link = `https://www.linkedin.com/shareArticule?url=${this.url}`;
// }