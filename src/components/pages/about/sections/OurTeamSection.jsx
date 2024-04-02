import  {Link} from 'react-router-dom';
import {API_OUR_TEAM} from "../../../const";
import BaseSection from "../../../structure-components/sections/BaseSection";
import TeamMembersList from "../../../structure-components/common/TeamMembersList";

function OurTeamSection() {
    const section_class_name = "about";
    const teamCropped = API_OUR_TEAM.splice(0, 4);

    return(
        
        <BaseSection className={`${section_class_name}-our-team`} 
                    section_name="OUR TEAM" 
                    title="Our Professionals Team"
        >
            <TeamMembersList team={teamCropped}/>
            <Link className={`btn-link btn-link--filled ${section_class_name}-our-team__link`} to="/about" aria-label="link: go to About Our Team page">See All</Link>
        </BaseSection>
        
    )
}
export  default OurTeamSection;