const Input = ({value, onChangeValue, type}) => {
    return (
        <input onChange={onChangeValue} type="number" className="form-control p-2" value={value} disabled={type}
               style={type ? {textAlign: "center"} : {}}/>

    );
};

export default Input;
