import SingleRecipe from "../components/SingleRecipe";
import {useSelector} from "react-redux";

const FavouritesRecipePage = () => {

    const favList = useSelector(state => state.recipe.value.favRecipes)

    return (
        <div className="d-flex wrap">
            {favList.map((x, i) => <SingleRecipe key={i} item={x} />)}
        </div>
    );
};

export default FavouritesRecipePage;