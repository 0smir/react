function Button({className, children, hendleBtnClick}) {
 
    return (
        <button className={className} onClick={hendleBtnClick}>{children}</button>
    );
}

export default Button;