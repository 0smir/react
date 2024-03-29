import "../../../styles/_section_banner.scss";

 
function SectionBanner({main_banner, main_banner_alt_text,  small_banner, className, light=true, darck_bg=true}) {
    return(
        <div className={`section__banner ${className}__banner ${light ? 'light-box' : ''} ${darck_bg ? 'darck-bg' : ''}`}>
            <img src={main_banner} alt={main_banner_alt_text} className={`image-fluid section__banner-img--main ${className}__banner-img--main`}/>
            {small_banner && (<img src={small_banner} alt="VR" className={`section__banner-img--small ${className}__banner-img--small`}/>)}
        </div>
    )
}

export default SectionBanner;