import SingleRecipe from "./SingleRecipe";
import {useSelector} from "react-redux";

const BlockRecipes = () => {

    const viewRecipe = useSelector(state => state.recipe.value.recipes)
    const filteredRef = useSelector(state => state.recipe.value.filteredRecipes)

    const filtered = viewRecipe.filter(x => {
        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x

        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && filteredRef.quantityIng === 0 && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x

        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x
        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && x.avgRating >= filteredRef.rating) return x
        if (x.ingredients.includes(filteredRef.ingredient) && filteredRef.quantityIng === 0 && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x
        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x

        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x

        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x
        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && x.avgRating >= filteredRef.rating) return x
        if (filteredRef.ingredient === "" && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            x.reviews.length === filteredRef.reviewsCount && x.avgRating >= filteredRef.rating) return x

        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && x.prepTime === filteredRef.prepTime &&
            x.reviews.length === filteredRef.reviewsCount && filteredRef.rating === null) return x
        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && x.prepTime === filteredRef.prepTime &&
            filteredRef.reviewsCount === 0 && x.avgRating >= filteredRef.rating) return x

        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && x.prepTime === filteredRef.prepTime &&
            x.reviews.length === filteredRef.reviewsCount && x.avgRating >= filteredRef.rating) return x

        if (filteredRef.ingredient === "" && filteredRef.quantityIng === 0 && filteredRef.prepTime === 0 &&
            x.reviews.length === filteredRef.reviewsCount && x.avgRating >= filteredRef.rating) return x

        if (x.ingredients.includes(filteredRef.ingredient) && x.ingredients.length === filteredRef.quantityIng && x.prepTime === filteredRef.prepTime &&
            x.reviews.length === filteredRef.reviewsCount && x.avgRating >= filteredRef.rating) return x
    })

    return (
        <div className="d-flex">
            {filtered.map((x, i) => <SingleRecipe key={i} item={x} />)}
        </div>
    );
};

export default BlockRecipes;