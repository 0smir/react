import LoaderUrl from '../../../images/loader.svg';
function Loader(){
    return(
        <div className="loader__wrapper">
            <img className="loader" src={LoaderUrl} alt="loader" />
        </div>
    )
    
}

export default Loader;