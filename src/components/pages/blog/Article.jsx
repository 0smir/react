import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Article(){
    const { id } = useParams(),
        [articleData, setArticleData] = useState([]),
        url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // console.log('id', id);
    // console.log('articleData', articleData);
  
    useEffect(() => {
        fetch(url, { method: "GET"})
       .then((response) => response.json())
       .then((data) => {
        //    console.log("dataItem", data);
           setArticleData(data);
       })
       .catch((error) => console.log(error));
   }, []);


    return (
        <div className="page article-page">
            <div className="container">
                <h1 className="title page-title">Pokemon name: {articleData?.species?.name}</h1>
                <div className="image-wrapper">
                    <img src={articleData?.sprites?.other?.dream_world.front_default} alt={articleData?.species?.name} />
                    {/* <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg" alt="" /> */}
                </div>
            </div>
        </div>
    )

}

export default Article;