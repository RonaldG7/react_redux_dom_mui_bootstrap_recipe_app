import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

const Toolbar = () => {
    return (
        <div className="d-flex s-around m-2">
            <Link to="/" >
                <Button variant="contained">Main Page</Button>
            </Link>
            <Link to="/favourites" >
                <Button variant="contained">Favourites</Button>
            </Link>
            <Link to="/create" >
                <Button variant="contained">Create Recipe</Button>
            </Link>
        </div>
    );
};

export default Toolbar;