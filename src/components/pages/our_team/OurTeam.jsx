import PageTitle from "../../../components/structure-components/common/PageTitle";
import TeamMembersList from "../../../components/structure-components/common/TeamMembersList";
import SubscibeForm from "../../structure-components/common/SubscribeForm";
import SectionTitle from "../../../components/structure-components/common/SectionTitle";
import FanFacts from "../../../components/structure-components/FanFacts";
import {API_OUR_TEAM} from "../../const";
import {API_FACTS_ABOUT_US} from "../../const";

//styles
import "./our_team.scss";

function OurTeam() {
    return(
        <div className="page our-team-page our-team">
            <div className="container">
                <PageTitle text={'Our Team'}/>
                <SectionTitle className="our-team" section_name="OUR TEAM" title="Meet Our Amazing Team" />
                <div className="section">
                    <TeamMembersList team={API_OUR_TEAM}/>
                </div>
                <FanFacts facts={API_FACTS_ABOUT_US}/>
                <SubscibeForm />
            </div>
        </div>
    )
}
export default OurTeam;