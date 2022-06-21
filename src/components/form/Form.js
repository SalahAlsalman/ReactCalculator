import Input from "./Input";
import Button from "./Button";

const Form = ({value1, value2, listOfButtons, onClick, onChangeValue1, onChangeValue2, total}) => {
    return (
        <>
            <div className="d-flex justify-content-between" style={{width: 400}}>
                <Input key={1} value={value1} onChangeValue={onChangeValue1} type={false}/>&nbsp;&nbsp;&nbsp;
                <Input key={2} value={value2} onChangeValue={onChangeValue2} type={false}/>
            </div>
            <div className="justify-content-between d-flex mt-3">
                {listOfButtons.map((buttonName, index) => <Button key={index} name={buttonName}
                                                                  onClick={onClick}/>)}
            </div>
            <div className="mt-3">
                <hr></hr>
                <Input key={3} value={total} type={true}/>
            </div>
        </>
    );
};

export default Form;
