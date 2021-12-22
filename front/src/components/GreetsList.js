import React, {useEffect, useState} from 'react';
import axios from "axios";

const GreetsList = () => {
    const [greetedList, setGreetedList] = useState([]);
    useEffect(()=>{
        axios.get('http://0.0.0.0:8080/greeted_names').
            then((res)=>{
                setGreetedList(res.data)
        })
    }, greetedList)
    return (
        <div className={"center"}>
            <h3>З нами вже привітались: </h3>
            {greetedList && greetedList.map((name, key)=>(
                <p key={key}>{name}</p>
            ))}
        </div>
    );
};

export default GreetsList;