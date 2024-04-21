import PageTitle from "../../../components/structure-components/common/PageTitle";
import Button from "../../structure-components/common/Button";
import BaseModalComponent from '../../../components/structure-components/common/BaseModalComponent';
import { GlobalContext } from "../../../Context";


function ServicePage() {
    const {isModalOpen, openModal} = GlobalContext();
    return(
        <div className="page">
            <div className="container">
                 <PageTitle text={'Service'}/>
            </div>
            <div className="container">
                <div className="btn__weapper">
                  <Button className="btn btn--outline" hendleBtnClick={openModal}>open modal</Button>
                </div>
            </div>
            <BaseModalComponent title="Example of modal Title">
                <div className="modal-content">
                    <p className="modal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id a debitis quos inventore asperiores dolor veniam hic saepe, quae similique necessitatibus sunt in doloribus natus temporibus expedita est qui?</p>
                    <p className="modal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id a debitis quos inventore asperiores dolor veniam hic saepe, quae similique necessitatibus sunt in doloribus natus temporibus expedita est qui?</p>
                </div>
            </BaseModalComponent>
        </div>
    )
}

export default ServicePage;