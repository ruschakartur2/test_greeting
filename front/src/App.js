import {Routes, Route, BrowserRouter} from "react-router-dom";

import Greet from "./components/Greet";
import GreetsList from "./components/GreetsList";
import "./App.css";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Greet/>}/>
                <Route path="list/" element={<GreetsList/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
