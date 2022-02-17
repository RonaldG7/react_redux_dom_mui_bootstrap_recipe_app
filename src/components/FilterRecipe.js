import {useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {filter, clearFiltered} from "../features/RecipeFeature";
import TextField from '@mui/material/TextField';

const FilterRecipe = () => {

    const [value, setValue] = useState(null);
    const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const inputRefs = {
        ingredient: useRef(),
        quantityIng: useRef(),
        prepTime: useRef(),
        reviewsCount: useRef(),
        rating: value
    }

    function onFilter() {
        dispatch(filter({
            ingredient: inputRefs.ingredient.current.value,
            quantityIng: inputRefs.quantityIng.current.value,
            prepTime: inputRefs.prepTime.current.value,
            reviewsCount: inputRefs.reviewsCount.current.value,
            rating: value
        }))
    }

    function clearFilter () {
        dispatch(clearFiltered())
    }

    return (
        <div className="d-flex column a-center">
           <div>
                <TextField
                    className="m-2"
                    inputRef={inputRefs.ingredient}
                    id="outlined-number"
                    label="Ingredient"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="m-2"
                    inputRef={inputRefs.quantityIng}
                    id="outlined-number"
                    label="Ingredient Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    className="m-2"
                    inputRef={inputRefs.prepTime}
                    id="outlined-number"
                    label="Preparation Time"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div className="d-flex a-center">
                <TextField
                    className="m-2"
                    inputRef={inputRefs.reviewsCount}
                    id="outlined-number"
                    label="Reviews Count"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Box sx={{width: 150}}>
                    <Slider
                        className="m-2"
                        aria-label="Volume"
                        value={value}
                        min={1}
                        max={5}
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                    />
                </Box>
                <Button className="ms-4" variant="contained" onClick={() => onFilter()}>Filter Recipe</Button>
                <Button className="ms-2" variant="contained" onClick={() => clearFilter()}>Clear Filter</Button>
            </div>

        </div>
    );
};

export default FilterRecipe;