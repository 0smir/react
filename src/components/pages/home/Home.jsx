import Button from "../../structure-components/common/Button"
import ADVANTAGES from "../../const";
import "./home.scss"
function Home() {
    
    return(
        <div className="page home-page">
            <div className="container">
                {/* <main className="main"></main> */}
                <div className="hero-section">
                    <div className="title-wrapper">
                        <h1 className="page-title">Immerse Yourself in Virtual Reality</h1>
                        <p className="title-description">
                            Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services
                        </p>
                    </div>
                    <Button className="btn btn--filled show-more">
                        discover more
                    </Button>
                    <div className="happy-clients">

                    </div>
                    <div className="advantages">
                        <ul className="advantages__list">
                            <li className="advantages__list-item advantage__item">
                                <img src="" alt="" className="advantage__icon"/>
                                <h3 className="advantage__title"></h3>
                                <p className="advantage__description"></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home