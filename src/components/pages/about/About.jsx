import CreatePostForm from '../../structure-components/PostCreateForm';
import PageTitle from "../../structure-components/common/PageTitle";

function About() {
    return(
        <div className="page about-page">
            <div className="container">
                <PageTitle text={'About'} />
                <p className="description" 
                        style={{
                            padding: '10px'    
                        }}
                >
                    We are the Best!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptas, debitis? Id eligendi amet vitae dignissimos iusto qui delectus veritatis, asperiores odio minima sint, esse alias!
                    Quidem omnis aliquid neque non!
                </p>
                <CreatePostForm />
            </div>
        </div>
    );
}

export default About