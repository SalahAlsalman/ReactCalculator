const Button = ({name, onClick}) => {
    return (
        <button type="button" className="btn btn-secondary p-2" style={{width: 75}}
                onClick={onClick}>{name}</button>
    );
};

export default Button;
