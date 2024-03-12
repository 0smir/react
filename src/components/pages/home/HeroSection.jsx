import Button from '../../structure-components/common/Button';
import PointsList from "../../structure-components/PointsList";
import {HOME_MAIN} from "../../const";


function HeroSection() {
    const {title, description, clients, banner, advantages} = HOME_MAIN[0];

    return(
        <div className="section section--hero hero">
            <div className="container">
                <div className="content section__content">
                    <div className="hero__intro">
                        <h1 className="title section__title">{title}</h1>
                        <p className="description section__description hero__description">{description}</p>
                        <Button className="btn btn--filled show-more">Discover More</Button>
                        <div className="happy-clients">
                            {clients.map((client, index) =>{
                                return(
                                    <img src={client} alt={`client_${index}`} key={index}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="banner hero__banner light-box">
                        <img src={banner} alt={title} />
                    </div>  
                </div>
                 
                
                <div className="hero-advantages__wrapper">
                    <PointsList className="advantages" itemList={advantages}/>
                </div>
            </div>
        </div>
    );

}

export default HeroSection;