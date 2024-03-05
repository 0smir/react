import {API_URLs_SOCIAL} from '../const';
import SocialLinkItem from './SocialLinkItem';
import './../../styles/_footer_social.scss';


export default function Socialmedia () {
    const socialLinksList = API_URLs_SOCIAL;
    
    return (
        <ul className="footer-social">
            {socialLinksList.map((mediaItem, index) => 
                <SocialLinkItem key={index} mediaItem={mediaItem} />
            )}
        </ul>
    )
}