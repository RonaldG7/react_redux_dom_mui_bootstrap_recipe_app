import {useRef, useState} from 'react';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Rating from "@mui/material/Rating";
import {useParams} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {addToFavourites, removeFromFavourites, addComment} from "../features/RecipeFeature";
import TextField from "@mui/material/TextField";

const ViewSingleRecipe = () => {

    const [value, setValue] = useState(null)
    const params = useParams()
    const dispatch = useDispatch()
    const favList = useSelector(state => state.recipe.value.favRecipes)
    const singleProduct = useSelector(state => state.recipe.value.recipes)
    const item = singleProduct.find(x => x.id === params.id)
    const addedToFav = favList.find(x => x.id === item.id)
    const commentRef = useRef()

    function addFav() {
        if (addedToFav) {
            dispatch(removeFromFavourites(item))
        } else {
            dispatch(addToFavourites(item))
        }
    }

    function submitComment () {
        if (value === null) return alert("Please rate recipe!")
        if (commentRef.current.value.length === 0) return alert("Please write a comment!")
        dispatch(addComment({id: item.id, rating: value, comment: commentRef.current.value}))
        setValue(null)
        commentRef.current.value = ""
    }

    return (
        <div className="d-flex j-center">
            <div className="viewSingleRecipe d-flex column">
                <div className="d-flex mb-4">
                    <div className="viewCarouselSize">
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
                    <div className="m-4">
                        <h4 className="overFlowBreakWord">Title: {item.title}</h4>
                        <Typography className="mb-2" component="legend">Average Rating ({item.avgRating})</Typography>
                        <div className="d-flex mb-2">
                            <Rating name="read-only" value={Number(item.avgRating)} precision={0.1} readOnly />
                            <Typography className="ms-2" component="legend">{item.reviews.length} Ratings</Typography>
                        </div>
                        <p><b>Prep. Time:</b> {item.prepTime}min</p>
                        <div>
                            <Button variant="contained"
                                onClick={() => addFav()}>{addedToFav ? "Remove From Favourites" : "Add To Favourites"}</Button>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="flex-grow-1 overFlowBreakWord">
                        <p><b>Ingredients:</b></p>
                        <ul>
                            {item.ingredients.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                    </div>
                    <div className="flex-grow-1 overFlowBreakWord">
                        <p><b>Preparation Steps:</b></p>
                        <ol>
                            {item.prepSteps.map((x, i) => <li key={i}>{x}</li>)}
                        </ol>
                    </div>
                </div>
                <div>
                    <h4>Leave a review</h4>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <div className="d-flex a-center">
                        <TextField
                            className="mt-2 mb-2"
                            inputRef={commentRef}
                            fullWidth
                            label="Leave Your Comment Here Please"
                        />
                        <Button variant="contained" onClick={submitComment} className="ms-2">Submit</Button>
                    </div>
                </div>
                    {item.reviews.map((x, i) => <div key={i}>
                        <Rating name="read-only" value={x.rating} readOnly />
                        <p><b>Review:</b> {x.comment}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default ViewSingleRecipe;