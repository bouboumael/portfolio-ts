import './assets/styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageT from "./pages/PageT";
import Contact from "./pages/Contact";

require('./tools/scrollMenu');



function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"/contact"} element={<Contact/>} />
                    <Route path="/test" element={<PageT/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
