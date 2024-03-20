import PageTitle from "../../structure-components/common/PageTitle";
import SubscribeForm from "../../structure-components/common/SubscribeForm";


export default function FAQ () {
    return (
        <div className="page faq-page">
            <div className="container faq-container">
                <PageTitle text={'FAQ'}/>

                <SubscribeForm />
            </div>
        </div>
    )
}