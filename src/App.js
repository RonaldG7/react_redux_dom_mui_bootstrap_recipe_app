import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import MainRecipePage from "./pages/MainRecipePage";
import FavouritesRecipePage from "./pages/FavouritesRecipePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import SingleRecipePage from "./pages/SingleRecipePage";
import Toolbar from "./components/Toolbar";

function App() {
    return (
        <>
            <nav>
                <Toolbar/>
            </nav>
            <Routes>
                <Route path="/" element={<MainRecipePage/>} />
                <Route path="/favourites" element={<FavouritesRecipePage/>} />
                <Route path="/create" element={<CreateRecipePage />} />
                <Route path="/:id" element={<SingleRecipePage />} />
            </Routes>
        </>
    );
}

export default App;
