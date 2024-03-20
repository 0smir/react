import {useState} from "react";
import Button from "./Button";
import icon_send from "../../../images/contacts/send.svg";
import icon_envelop from "../../../images/contacts/envelop_small.svg";
import "../../../styles/_subscribe_form.scss"

function SubscribeForm() {
    const placeholder_text = 'Enter your email address';
    const [email, setEmail] = useState();
    const [error, setError] = useState({hasError: false, errorText: ''});

    function sendForm(e) {
        e.preventDefault();
        let form = e.currentTarget;
        let formInfo = new FormData(form),
            newEmail = formInfo.get('email').trim(),
            isValidationPassed = e.currentTarget.getElementsByClassName('input')[0].validity.valid;
       
        if(!isValidationPassed){
            toggleError(newEmail, isValidationPassed);
        } else {
            submitData(newEmail);
        }
        // e.currentTarget.reset();
    };
    function toggleError(val, isCorrect){
        
        if(val.length === 0){
            let newError = {hasError: false, errorText: 'This field is requerid, please enter email'};        
            setError(()=> newError);
           
        } else if(val.length < 4 ){
            let newError = {hasError: false, errorText: 'Min-length of email is 3 symbols'};
            setError(()=> newError);
    
        }

        if(!isCorrect) {
            let newError = {hasError: true, errorText: 'Please, check your mail'};
            setError(()=> newError);
        } else {
            let newError = {hasError: false, errorText: ''};
            setError(()=> newError);
        }
    };
    function submitData(val) {
        //TODO: add request with freeform API
        console.log('submited data: ', val);
    }

    return(

        <div className="subscribe-form__wrapper">
            <h3 className="subscribe-form__title">Subscribe to our newsletter for latest updates</h3>
            <div className="subscribe-form__content">
                <form className="subscribe-form" onSubmit={sendForm} noValidate={true}>
                    <div className="input-group subscribe-form__input-group">
                        <span className="icon icon--envelop">
                           <img src={icon_envelop} alt="send" /> 
                        </span>
                        <input 
                            value={email} 
                            type="email" 
                            name="email" 
                            placeholder={placeholder_text}
                            required="required"
                            className={`input subscribe-form__input ${error.hasError ? 'error' : ''}`} 
                        />
                       {(error.hasError && error?.errorText) && (<span className="error-text">{error.errorText}</span>)}
                        <Button type="submit" alt="send subscribe form" className="subscribe-form__btn">
                            <img src={icon_send} alt="send" className="icon icon--send" />
                        </Button> 
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SubscribeForm;