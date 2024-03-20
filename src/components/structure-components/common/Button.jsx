function Button({children, hendleBtnClick, type, ...props}) {
 
    return (
        <button {...props} onClick={hendleBtnClick} type={type || 'button'}>{children}</button>
    );
}

export default Button;