import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const initialState = [
    {
        "id": "e0d1ac75-4924-4cae-ad13-f80dc638eb1b",
        "images": [
            "https://www.inspiredtaste.net/wp-content/uploads/2021/03/Chicken-Curry-Recipe-2-1200.jpg",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=400,363",
            "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png",
            "https://static.onecms.io/wp-content/uploads/sites/9/2021/03/10/spicy-chicken-curry-FT-RECIPE0321.jpg"
        ],
        "title": "First Recipe",
        "ingredients": [
            "Agurkas",
            "Morka",
            "Pomidoras"
        ],
        "prepTime": 20,
        "prepSteps": [
            "First",
            "Second",
            "Third",
            "Fourth"
        ],
        "avgRating": "3.67",
        "reviews": [
            {
                "rating": 5,
                "comment": "Ir ziema ir vasar agurkai labai skanu"
            },
            {
                "rating": 2,
                "comment": "nemegstu pomidoro labai"
            },
            {
                "rating": 4,
                "comment": "skaniausia valgyti uzsaldyta"
            }
        ]
    },
    {
        "id": "8deb5fe8-6d35-41e0-b3ea-62431921e6dd",
        "images": [
            "data:image/jpeg;base64,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",
            "https://vegconom.de/vegconomistcom/wp-content/uploads/sites/3/Ohayo-Valley-741x555.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/13/dc/62/15/stake.jpg"
        ],
        "title": "Steak",
        "ingredients": [
            "Steak",
            "Potato",
            "Butter",
            "Olive Oil"
        ],
        "prepTime": 15,
        "prepSteps": [
            "Buy steak",
            "Cook steak",
            "Eat steak"
        ],
        "avgRating": "3.75",
        "reviews": [
            {
                "rating": 5,
                "comment": "Labai gardus uzkandis prie alaus"
            },
            {
                "rating": 1,
                "comment": "AS VEGANAS!!!"
            },
            {
                "rating": 4,
                "comment": "megstu vasara pasiganyti su karvutemis"
            },
            {
                "rating": 5,
                "comment": "Nuostabu!"
            }
        ]
    }
]

export const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        value: {
            recipes: initialState,
            favRecipes: [],
            filteredRecipes: {
                ingredient: "",
                quantityIng: 0,
                prepTime: 0,
                reviewsCount: 0,
                rating: null
            },
            createRecipe: {
                images: [],
                title: "",
                ingredients: [],
                prepTime: "",
                prepSteps: []
            }
        }
    },
    reducers: {
        createImage: ({value}, {payload}) => {
            value.createRecipe.images.push(payload)
        },
        createTitle: ({value}, {payload}) => {
            value.createRecipe.title = payload
        },
        createIngredients: ({value}, {payload}) => {
            value.createRecipe.ingredients.push(payload)
        },
        createPrepTime: ({value}, {payload}) => {
            value.createRecipe.prepTime = payload
        },
        createPrepSteps: ({value}, {payload}) => {
            value.createRecipe.prepSteps.push(payload)
        },
        addRecipe: ({value}, {payload}) => {
            if (value.createRecipe.images.length === 0) return alert("You are missing picture!")
            if (value.createRecipe.title === "") return alert("You are missing title!")
            if (value.createRecipe.ingredients.length === 0) return alert("You are missing ingredients!")
            if (value.createRecipe.prepTime === "") return alert("You are missing prep time!")
            if (value.createRecipe.prepSteps.length === 0) return alert("You are missing prep steps!")
            value.recipes.push({
                id: uuid(),
                images: value.createRecipe.images,
                title: value.createRecipe.title,
                ingredients: value.createRecipe.ingredients,
                prepTime: Number(value.createRecipe.prepTime),
                prepSteps: value.createRecipe.prepSteps,
                avgRating: null,
                reviews: []
            })
            value.createRecipe = {
                images: [],
                title: "",
                ingredients: [],
                prepTime: "",
                prepSteps: []
            }
        },
        addToFavourites: ({value}, {payload}) => {
            value.favRecipes.push(payload)
        },
        removeFromFavourites: ({value}, {payload}) => {
            value.favRecipes = value.favRecipes.filter(x => x.id !== payload.id)
        },
        addComment: ({value}, {payload}) => {
            const {id, rating, comment} = payload
            const pushReview = value.recipes.find(x => x.id === id)
            pushReview.reviews.push({rating, comment})
            pushReview.avgRating = (pushReview.reviews.map(x => x.rating).reduce((a, b) => (a + b)) / pushReview.reviews.length).toFixed(2)
        },
        filter: ({value}, {payload}) => {
            const {ingredient,
                    quantityIng,
                    prepTime,
                    reviewsCount,
                    rating} = payload
            value.filteredRecipes = {
                ingredient: ingredient,
                quantityIng: Number(quantityIng),
                prepTime: Number(prepTime),
                reviewsCount: Number(reviewsCount),
                rating: rating
            }
        },
        clearFiltered: ({value}, {payload}) => {
            value.filteredRecipes = {
                ingredient: "",
                    quantityIng: 0,
                    prepTime: 0,
                    reviewsCount: 0,
                    rating: null
            }
        }
    }
})

export const {
    createImage, createTitle, createIngredients, createPrepSteps, createPrepTime,
    addRecipe, addToFavourites, removeFromFavourites, addComment, filter, clearFiltered
} = recipeSlice.actions

export default recipeSlice.reducer