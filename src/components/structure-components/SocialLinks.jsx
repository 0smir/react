import {API_URLs_SOCIAL} from '../const';
import SocialLinkItem from './SocialLinkItem';
import './../../styles/footer_social.css';


export default function Socialmedia () {
    const socialLinksList = API_URLs_SOCIAL;
    return (
        <ul className="footer_social">
            {socialLinksList.map((mediaItem, index) => 
                <SocialLinkItem key={index} mediaItem={mediaItem} />
            )}
        </ul>
    )
}