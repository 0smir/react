import SectionTitle from "../../structure-components/common/SectionTitle";
import SectionBanner from "../../structure-components/common/SectionBanner";



function BaseSection({className, section_name, title, title_description, main_banner, small_banner, children}) {
    return(
        <div className={`section__content-wrapper ${className}__content-wrapper`}>
            <div className="section__content">
                <SectionTitle 
                    className={className} 
                    section_name={section_name} 
                    title={title}
                    description={title_description}
                />
                {children}
            </div>

            {(main_banner||small_banner) && 
            (<SectionBanner main_banner={main_banner} 
                            main_banner_alt_text={section_name}
                            small_banner={small_banner}
                            className={className}
            />)}
        </div>
    )
}

export default BaseSection;