import PageTitle from "../../../components/structure-components/common/PageTitle";
import TeamMembersList from "../../../components/structure-components/common/TeamMembersList";

import {API_OUR_TEAM} from "../../const";

function OurTeam() {
    return(
        <div className="page our-team-page our-team">
            <div className="container">
                <PageTitle text={'Our Team'}/>
                <div className="section">
                    <TeamMembersList team={API_OUR_TEAM}/>
                </div>
            </div>
        </div>
    )
}
export default OurTeam;