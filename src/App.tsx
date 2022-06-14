import './assets/styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageT from "./pages/PageT";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminApp from "./admin/AdminApp";

require('./tools/scrollMenu');

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"/contact"} element={<Contact/>} />
                    <Route path={"/test"} element={<PageT/>}/>
                    <Route path={"/admin/*"} element={<AdminApp/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
