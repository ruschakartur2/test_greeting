import React, {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Greet = () => {
    const [answer,setAnswer] = useState('')
    const [name, setName] = useState('')
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleGreet = (e) => {
        e.preventDefault();
        axios.post('http://137.184.139.64:8080/greet', {'name': name})
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
            <input type="text" value={name} onChange={handleName}/>
             <button type={"submit"}>Привітатись</button>
            </form>
            {answer}
        </div>
        </div>
    );
};

export default Greet;
