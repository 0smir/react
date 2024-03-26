import TeamMemberItem from "./TeamMemberItem";

import "../../../styles/_team_members_list.scss";


function TeamMembersList({team}) {
    
    return(
        <ul className="member__list">
            {team.map((member) =><TeamMemberItem key={member.id} member={member}/>)}
        </ul>
    );
}

export default TeamMembersList;