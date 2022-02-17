import Carousel from "react-bootstrap/Carousel";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom"
import {addToFavourites, removeFromFavourites} from "../features/RecipeFeature";
import {useDispatch, useSelector} from "react-redux";

const SingleRecipe = ({item}) => {

    const nav = useNavigate()
    const dispatch = useDispatch()
    const favList = useSelector(state => state.recipe.value.favRecipes)

    function openSingleRecipe() {
        nav(`/${item.id}`)
    }
    const addedToFav = favList.find(x => x.id === item.id)
    function addFav() {
        if (addedToFav) {
            dispatch(removeFromFavourites(item))
        } else {
            dispatch(addToFavourites(item))
        }
    }

    return (
        <div className="singleRecipe">
            <div className="carouselSize">
                <Carousel>
                    {item.images.map((x, i) =>
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-100"
                                src={x}
                                alt="First slide"
                            />
                        </Carousel.Item>)}
                </Carousel>
            </div>
            <h4>Title: {item.title}</h4>
            <p><b>Prep. Time:</b> {item.prepTime}min</p>
            <p><b>Ingredients:</b> {item.ingredients.length}</p>
            <p><b>Preparation Steps:</b> {item.prepSteps.length}</p>
            <p><b>Average Rating:</b> {item.avgRating}</p>
            <p><b>Reviews:</b> {item.reviews.length}</p>
            <div className="d-flex j-center">
                <Button variant="contained" onClick={() => openSingleRecipe()}>View Recipe</Button>
                <Button variant="contained" onClick={() => addFav()}>{addedToFav ? "Remove From Favourites" : "Add To Favourites"}</Button>
            </div>
        </div>
    );
};

export default SingleRecipe;