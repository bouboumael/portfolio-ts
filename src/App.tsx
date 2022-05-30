import './assets/styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageT from "./pages/PageT";

require('./tools/scrollMenu');


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/test" element={<PageT/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
