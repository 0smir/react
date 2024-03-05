import {useState, useEffect} from 'react';
import BlogFilterTabs from '../../structure-components/blog/BlogFilterTabsList';
import PostItem from '../../structure-components/blog/PostItem';
import Button from '../../structure-components/Button';
import Loader from '../../structure-components/Loader';
import '../../../components/pages/blog/blog.scss';
import '../../../styles/_blog_filter.scss';

function Blog() {
    const [postsList, setPostsList] = useState([]),
          [postTypes, setPostType] = useState([]),
          [isLoading, setIsLoading] = useState(false),
          [step, setStep] = useState({limit: 20, offset: 0}),
          [totalItemsCount, setTotalItemsCount]= useState(0);

    
    useEffect(() => {
        loadData();
    }, [step]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
            setPostType(data.results);
        })
        .catch((error) => console.log(error));
    }, []);

    function loadData(){
        //get start data
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${step.limit}&offset=${step.offset}`, { method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            let result = data.results;
            let fetchPromises = result.map((item) => {
                return fetch(item.url, { method: "GET" })
                .then((resp) => resp.json())
                .catch((error) => console.log(error));
            });

            if(!totalItemsCount) {
                setTotalItemsCount(data.count);
            }
            
            return Promise.all(fetchPromises);
        })
        .then((datainfoArray) => {
            setPostsList((oldList) => {
                let prevLoadedItems = [...oldList];
                return prevLoadedItems.concat(datainfoArray);
            });
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
   
    function onFilterSelect(selectedTypeName) {
        console.log("onFilterSelect", selectedTypeName);
    }

    function loadMorePosts() {    
        console.log('loadMorePosts!!!');
        setIsLoading(true);
        setStep((oldParams) => {
            const newParams = {limit: 20, offset: oldParams.offset + 20};
            return {...newParams};
        });
    }


    
    return(
        <div className="page blog-page">
            <div className="container">
                <h1 className="title page-title">Blog</h1>
                {postTypes.length > 0 &&
                    <BlogFilterTabs types={postTypes} onFilterChange={(type) => onFilterSelect(type)}/>
                }
                <div>
                    { postsList?.length ? (
                        <div className="posts-list">
                        { postsList.map((item, index) => <PostItem key={`${item.id}`} {...item} />)}
                        </div>
                        ) : (
                            <div className="empty-post">  There are no posts yet! Please, use form to add one!</div>
                        )
                    }
                </div> 
                
                {isLoading && <Loader />}

                {step.limit < totalItemsCount && (
                    <div className="btn-wrapper">
                        <Button className="btn btn-more light-effect" hendleBtnClick={loadMorePosts}>Show More</Button>
                    </div>  
                ) }
            </div>
        </div>
    );            
    
}

export default Blog