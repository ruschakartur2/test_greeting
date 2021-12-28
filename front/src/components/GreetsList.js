import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const GreetsList = () => {
    const [greetedList, setGreetedList] = useState([]);
    const [error, setError] = useState('З нами ще ніхто не привітався');

    useEffect(()=>{
        axios.get('http://0.0.0.0:8080/greeted_names')
            .then((res)=>{
                setGreetedList(res.data)
        })
            .catch((e)=> {
                setError('Sorry, ' + e.message)
            })
    }, [])

    return (
        <div className={"greet-list"}>
            <h2>Бажаєш привітатись? <br/> <Link to={"/"}>Клікай</Link></h2> <br/>
            {greetedList && (<h3>З нами вже привітались: </h3>) && greetedList.length >= 1 ? greetedList.map((name, key)=>(
                <p key={key}>{name}</p>
            )): (<h4>{error}</h4>)}
        </div>
    );
};

export default GreetsList;