import PageTitle from "../../../components/structure-components/common/PageTitle";
import SectionTitle from "../../structure-components/common/SectionTitle";

import "./terms.scss";

function TermsAndConditions() {
    const CompanyName = "VRNas";
    
    return(
        <div className="page terms-page terms">
            <div className="container terms-container">
                <PageTitle text={'Terms And Conditions'}/>
                <div className="page__content-wrapper terms__content-wrapper">
                    <SectionTitle 
                                className="terms" 
                                section_name="Terms & Conditions" 
                                title="Terms And Conditions"
                                description="Welcome to VRNas. Please read these Terms and Conditions carefully before using our website and services."
                    />
                    <div className="terms__content">
                        <h3 className="title terms__title">Acceptance of Term</h3>
                        <div className="description terms__description">
                            <p className="terms__description-text">
                                By accessing or using any part of our website or services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
                            </p>
                        </div>
                        <h3 className="title terms__title">Use of Website and Services</h3>
                        <div className="description terms__description">
                            <p className="terms__description-text">
                                You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services:
                            </p>
                            <ul className="terms__list"> 
                                <li className="terms__list-item">In any way that violates any applicable federal, state, local or international law or regulation.</li>
                                <li className="terms__list-item">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter" or "spam" or any other similar solicitation.</li>
                                <li className="terms__list-item">To impersonate or attempt to impersonate {CompanyName}, a {CompanyName} employee, another user or any other person or entity.</li> 
                                <li className="terms__list-item">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website or services, or which, as determined by us, may harm {CompanyName} or users of the website or services or expose them to liability.</li>
                            </ul>
                        </div>
                        <h3 className="title terms__title">Intellectual Property</h3>
                        <div className="description terms__description">
                            <p className="terms__description-text">
                                The content and materials available on our website and services, including but not limited to text, graphics, logos, images, and software, are the property of {CompanyName} or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                                You may not use any of our content or materials for commercial purposes without obtaining a license to do so from {CompanyName} or its licensors.
                            </p>
                        </div>
                        <h3 className="title terms__title">Limitation of Liability</h3>
                        <div className="description terms__description">
                            <p className="terms__description-text">
                            In no event shall {CompanyName} be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services.
                            </p>
                        </div>
                        <h3 className="title terms__title">Changes to Terms and Conditions</h3>
                        <div className="description terms__description">
                            <p className="terms__description-text">
                                We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. By continuing to access or use our website and services after any revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </div>
                        <h3 className="title terms__title">Contact Us</h3>
                        <div className="description terms__description">
                            <p className="terms__description-text">
                                If you have any questions about these Terms and Conditions, please contact us using the information provided on our contact page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditions;