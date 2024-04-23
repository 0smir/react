import { GlobalContext } from "../../../Context";
import Button from "./Button";

import '../../../styles/_base_modal.scss';

function BaseModalComponent({title, children}){
   const {isModalOpen, closeModal} = GlobalContext();
    return(
        <div className={`modal modal-overlay ${isModalOpen ? 'open' : ''}`}>
            <div className="modal__body">
                <div className="modal__header">
                    <h2 className="modal__title">{title}</h2>
                    <Button className="btn btn--filled btn-close modal__btn-close" hendleBtnClick={closeModal}>
                        <span className="icon icon--close">+</span>
                    </Button>
                </div>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default BaseModalComponent;