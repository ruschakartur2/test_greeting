import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Greet = () => {
    const [answer,setAnswer] = useState('')
    const [name, setName] = useState('')


    const onChangeName = (e) => {
        let  name = e.target.value;
        name = name.replace(/[^A-Za-zwА-Яа-яІЄЇ ]+/ig, '')
        setName(name);
    };

    const handleGreet = (e) => {
        e.preventDefault();
        axios.post('http://0.0.0.0:8080/greet', {'name': name})
            .then((res)=>{
                setAnswer(res.data.message)
            })
            .catch((e)=>{
                setAnswer(e.message);
            })
    }
    return (
        <div className={"center"}>

        <Link to={"list"}>З нами вже привітались</Link>
        <div className={"greet-block"}>
            <form className={"greet-form"} action="" onSubmit={handleGreet}>
            <input type="text"
                   value={name}
                   required={true}
                   onChange={onChangeName}/>
             <button type={"submit"}>Привітатись</button>
            </form>
            {answer}
        </div>
        </div>
    );
};

export default Greet;