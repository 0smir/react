import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import BlogTags from "../../structure-components/blog/BlogTag";
import {Link} from "react-router-dom";
import "../../../components/pages/blog/article.scss";

function Article(){
    const { id } = useParams(),
        [articleData, setArticleData] = useState([]),
        url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  
    useEffect(() => {
        fetch(url, { method: "GET"})
       .then((response) => response.json())
       .then((data) => {
           setArticleData(data);
       })
       .catch((error) => console.log(error));
   }, []);

if(articleData){
    return (
        <div className="page article-page">
            <div className="container">
                <div className="article article__content">
                     <h1 className="title page-title">Common pokemon information</h1>
                    <div className="article__image-wrapper">
                        <img className="article__image" src={articleData?.sprites?.other?.dream_world.front_default} alt={articleData?.species?.name} />
                        {/* <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg" alt="" /> */}
                    </div>
                     
                    <div className="article__info">
                        <h2 className='title'>Pokédex data</h2>
                        <div className="data_prop">Pokemon name:</div>
                        <div className="data_value name">{articleData?.species?.name}</div>

                        <div className="data_prop">Types:</div>
                        <div className="data_value types_list">
                            { articleData?.types && 
                                <BlogTags postItemsList={articleData.types} />
                            }
                        </div>
                        <div className="data_prop">Weight:</div>
                        <div className="data_value weight">
                            { articleData?.weight && 
                                <span>{articleData.weight}</span>
                            }
                        </div>

                        <div className="data_prop">Height: </div>
                        <div className="data_value height"> {articleData.height}</div>

                        <div className="data_prop">Abilities: </div>
                        <div className="data_value abilities">
                        { articleData?.abilities && 
                            (articleData.abilities).map((abilityItem, index) => { 
                               if(!abilityItem.is_hidden ) {
                                return <span className='ability-name' key={index}>{abilityItem.ability.name}</span>
                               }else {
                                return <span className='ability-name' key={index}>{`${abilityItem.ability.name} (hidden ability)`}</span>
                               }  
                            })   
                        }
                        </div> 
                        <div className="data_prop">Base experience</div>
                        <div className="data_value ">{ articleData?.base_experience}</div>
                    </div>
                </div>
                <div className="article__statistic">
                    <h2 className="title table-title">Base stats</h2>
                    <table className='table table--vitals'>
                        <tbody className='table__body'>
                        { articleData?.stats && 
                            (articleData.stats).map((statItem, index) => {
                               return (<tr className='table__row' aria-label={"row-index-" + index} key={index + "__row"}>
                                         <th className='table__header'>{statItem.stat.name}</th><td className='table__data'>{statItem.base_stat}</td>
                                    </tr> )
                            })
                        }
                       </tbody>

                    </table>
                </div>
               
            </div>
        </div>
    )
    }
}

export default Article;