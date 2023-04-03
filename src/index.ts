import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedIn from './ShareButtonLinkedIn';

// http://www.youtube.com/rodrigobranas

const twitter = new ShareButtonTwitter('.btn-twitter', 'http://www.youtube.com/rodrigobranas');
twitter.bind();
const facebook = new ShareButtonFacebook('.btn-facebook', 'http://www.youtube.com/rodrigobranas');
facebook.bind();
const linkedin = new ShareButtonLinkedIn('.btn-linkedin', 'http://www.youtube.com/rodrigobranas');
linkedin.bind();