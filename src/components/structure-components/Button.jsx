function Button({children, hendleBtnClick, ...props}) {
 
    return (
        <button {...props} onClick={hendleBtnClick}>{children}</button>
    );
}

export default Button;