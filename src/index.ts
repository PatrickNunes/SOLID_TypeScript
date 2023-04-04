import AbstractShareButton from './AbstractShareButton';
import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedIn from './ShareButtonLinkedIn';
import ShareButtonPrint from './ShareButtonPrint';
import DOMEventHandler from './DOMEventHandler';

// http://www.youtube.com/rodrigobranas

const eventHandler = new DOMEventHandler();

const twitter:AbstractShareButton = new ShareButtonTwitter(eventHandler,'.btn-twitter', 'http://www.youtube.com/rodrigobranas');
twitter.bind();
const facebook:AbstractShareButton = new ShareButtonFacebook(eventHandler,'.btn-facebook', 'http://www.youtube.com/rodrigobranas');
facebook.bind();
const linkedin:AbstractShareButton = new ShareButtonLinkedIn(eventHandler,'.btn-linkedin', 'http://www.youtube.com/rodrigobranas');
linkedin.bind();
const print:AbstractShareButton = new ShareButtonPrint(eventHandler,'.btn-print');
print.bind();

