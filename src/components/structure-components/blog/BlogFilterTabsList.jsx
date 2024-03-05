import BlogFilterTab from '../../structure-components/blog/BlogFilterTab';
import Button from '../Button';
import '../../../styles/common_styles.scss';
import '../../../styles/_blog_filter.scss';

function BlogFilterTabs(props){

    function  scrollToCenter(e, name){
        let currentEl = e.currentTarget;
            
        if(name !== 'all'){
            let offset,
                wrapper = currentEl.closest(".filter__wrapper"),
                wrapperWidth = wrapper.clientWidth,
                activeItem = currentEl.parentElement,
                activeWidth = activeItem.clientWidth,
                activePos = activeItem.offsetLeft;
            if((wrapperWidth/2) > (activePos + (activeWidth/2))){
                wrapper.scrollLeft = 0
            }else{
                offset =  (activeWidth/2) + activePos - (wrapperWidth/2);
                wrapper.scrollLeft = offset;
            }
        }


        toggleActive(e, name);
    };

    function toggleActive(e, name) {
        let currentEl = e.currentTarget,
            type = name;
        let allBtn = document.getElementsByClassName('filter__btn--all')[0],
            siblingsList = document.getElementsByClassName("filter__btn");

            
        if(type !== 'all') {
            if(allBtn.classList.contains('active')) allBtn.classList.remove('active');
            
            for(let i=0; i < siblingsList.length; ++i){
                if(siblingsList[i].classList.contains('active')){
                    siblingsList[i].classList.remove('active');
                }
            }
        } else {
            for(let i=0; i < siblingsList.length; ++i){
                if (siblingsList[i].classList.contains('active')){
                    siblingsList[i].classList.remove('active');
                }
            }
        }

        currentEl.classList.add('active');
        props.onFilterChange(name);
    }

    return(
        <div className="blog-types__wrapper"> 
            <Button hendleBtnClick={(e) => toggleActive(e, "all")} className="filter__btn filter__btn--all active" data-type-name="all">SEE ALL</Button> 
            <div className="filter__wrapper">
                <ul className="filter__content">
                    {(props.types).map((item, index) => <BlogFilterTab key={index} {...item} onTypeSelect={(e) => {scrollToCenter(e, item.name)}}/>)}
                </ul>
            </div>
        </div>
    );
}

export default BlogFilterTabs