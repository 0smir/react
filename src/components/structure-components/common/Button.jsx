function Button({children, hendleBtnClick, ...props}) {
 
    return (
        <button {...props} onClick={hendleBtnClick} type="button">{children}</button>
    );
}

export default Button;