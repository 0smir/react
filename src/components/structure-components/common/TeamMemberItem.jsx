import Socialmedia from "../SocialLinks";
import { useState } from "react";

function TeamMemberItem({member}) {
    const {avatar, name, position} = member;
    const [isHovered, setHover] = useState(false);

    return(
        <li className={`member__list-item ${isHovered ? 'active' : ''}`} 
            onMouseEnter={() => setHover(!isHovered)}
            onMouseLeave={()=> setHover(!isHovered)}
        >
            <div className="member">
                <div className="member__img-wrapper">
                    <img src={avatar} alt={`Our ${position} - ${name}`} className="image-fluid member__img"/>
                </div>
                <div className="member__overlay">
                    <div className="member__description">
                        <h4 className="member__title">{name}</h4>
                        <span className="member__position">{position}</span>
                    </div>
                    <div className="member__social-wrapper">
                        <Socialmedia location="our-team"/>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TeamMemberItem;