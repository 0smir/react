import {API_URLs_SOCIAL} from '../const';
import SocialLinkItem from './SocialLinkItem';
import './../../styles/_social_media.scss';


export default function Socialmedia ({location}) {
    const socialLinksList = API_URLs_SOCIAL;
    
    return (
        <ul className={`social ${location}-social`}>
            {socialLinksList.map((mediaItem, index) => 
                <SocialLinkItem key={index} mediaItem={mediaItem} className={location}/>
            )}
        </ul>
    )
}