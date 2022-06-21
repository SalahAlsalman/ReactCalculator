import './App.css';
import Form from "./components/form/Form";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';

function App() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [total, setTotal] = useState('')
    const [listOfButtons] = useState(['+', '-', '*', '/', '%']);

    const onChangeValue1 = (e) => {
        if (isNaN(parseInt(e.target.value))) {
            setValue1('');
            return;
        }
        setValue1(parseInt(e.target.value))
    }

    const onChangeValue2 = (e) => {
        if (isNaN(parseInt(e.target.value))) {
            setValue2('');
            return;
        }
        setValue2(parseInt(e.target.value))
    }

    const onClick = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.innerHTML) {
            case '+':
                setTotal(parseInt(value1) + parseInt(value2))
                break;
            case '-':
                setTotal(parseInt(value1) - parseInt(value2))
                break;
            case '*':
                setTotal(parseInt(value1) * parseInt(value2))
                break;
            case '/':
                setTotal(parseInt(value1) / parseInt(value2))
                break;
            case '%':
                setTotal(parseInt(value1) % parseInt(value2))
                break;
        }
    }

    return (
        <div className="container">
            <h1 className="display-3 text-center">Calculator</h1>
            <hr></hr>
            <Form value1={value1} value2={value2} listOfButtons={listOfButtons} onChangeValue1={onChangeValue1}
                  onChangeValue2={onChangeValue2} onClick={onClick} total={total}/>
        </div>
    );
}

export default App;
