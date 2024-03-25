import PageTitle from "../../../components/structure-components/common/PageTitle";
import SectionTitle from "../../../components/structure-components/common/SectionTitle";
import SubscribeForm from "../../structure-components/common/SubscribeForm";

import "./privacy.scss";

function PrivacyPolicy() {
    const CompanyName = "VRNas";

    return(
        <div className="page privacy-page privacy">
            <div className="container">
                <PageTitle text={'Privacy Policy'}/>
                <div className="page__content-wrapper terms__content-wrapper">
                    <SectionTitle 
                                className="privacy" 
                                section_name="Privacy Policy" 
                                title="Privacy Policy"
                                description={`This Privacy Policy describes how ${CompanyName} collects, uses, and protects the personal information of our website visitors and customers.`}
                    />
                </div>
                <div className="privacy__content">
                    <h3 className="title privacy__title">Information We Collect</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">We may collect the following types of personal information:</p>
                        <ul className="terms__list"> 
                            <li className="terms__list-item">Name, email address, and other contact information.</li>
                            <li className="terms__list-item">Demographic information such as age, gender, and location.</li>
                            <li className="terms__list-item">Payment information such as credit card details.</li>
                            <li className="terms__list-item">Information about how you use our website and services.</li>
                        </ul>
                    </div>
                    <h3 className="title privacy__title">How We Use Your Information</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">We may use your personal information for the following purposes:</p>
                        <ul className="terms__list"> 
                            <li className="terms__list-item">To provide you with our services and products.</li>
                            <li className="terms__list-item">To process payments and fulfill orders.</li>
                            <li className="terms__list-item">To send you marketing and promotional materials.</li>
                            <li className="terms__list-item">To improve our website and services.</li>
                        </ul>
                    </div>
                    <h3 className="title privacy__title">How We Protect Your Information</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">
                            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use encryption to protect sensitive information transmitted online, and we also protect your information offline.
                        </p>
                    </div>
                    <h3 className="title privacy__title">Information Sharing</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">
                            We do not sell or rent your personal information to third parties. However, we may share your information with our trusted third-party service providers who assist us in operating our website and services.
                        </p>
                    </div>
                    <h3 className="title privacy__title">Cookies and Tracking</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">
                            We use cookies and other tracking technologies to collect information about your browsing behavior and preferences. This information is used to personalize your experience on our website and to analyze how visitors use our website.
                        </p>
                    </div>
                    <h3 className="title privacy__title">Your Rights</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">
                            You have the right to access, update, or delete your personal information. You can contact us using the information provided on our contact page to exercise these rights.
                        </p>
                    </div>
                    <h3 className="title privacy__title">Changes to Privacy Policy</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">
                            We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on our website.
                        </p>
                    </div>
                    <h3 className="title privacy__title">Contact Us</h3>
                    <div className="description privacy__description">
                        <p className="privacy__description-text">
                            If you have any questions about our Privacy Policy, please contact us using the information provided on our contact page.
                        </p>
                    </div>
                </div>
                <SubscribeForm />
            </div>
        </div>
        
    )
}
export default PrivacyPolicy;