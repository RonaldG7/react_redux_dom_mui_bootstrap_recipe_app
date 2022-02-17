import {useRef} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {createImage, createTitle, createIngredients, createPrepSteps, createPrepTime,
    addRecipe } from "../features/RecipeFeature";
import {useDispatch} from "react-redux";

const InputsRecipe = () => {

    const dispatch = useDispatch()

    const inputRefs = {
        imageRef: useRef(),
        titleRef: useRef(),
        ingredientsRef: useRef(),
        prepTimeRef: useRef(),
        prepStepsRef: useRef()
    }

    function setImage () {
        if (inputRefs.imageRef.current.value.length < 1) return
        if (!inputRefs.imageRef.current.value.startsWith("http")) return
        dispatch(createImage(inputRefs.imageRef.current.value))
        inputRefs.imageRef.current.value = ""
    }

    function setIngredients () {
        if (inputRefs.ingredientsRef.current.value.length < 1) return
        dispatch(createIngredients(inputRefs.ingredientsRef.current.value))
        inputRefs.ingredientsRef.current.value = ""
    }

    function setPrepSteps () {
        if (inputRefs.prepStepsRef.current.value.length < 1) return
        dispatch(createPrepSteps(inputRefs.prepStepsRef.current.value))
        inputRefs.prepStepsRef.current.value = ""
    }

    return (
        <div className="d-flex flex-grow-1 column ms-2">
            <div className="d-flex a-center mb-3">
                <TextField
                    inputRef={inputRefs.imageRef}
                    id="outlined-textarea"
                    label="Picture..."
                    placeholder="Type here please..."
                    multiline
                />
                <Button className="ms-2" variant="contained" onClick={() => setImage()} >Add Picture</Button>
            </div>
            <div className="d-flex a-center mb-3">
                <TextField
                    onChange={() => dispatch(createTitle(inputRefs.titleRef.current.value))}
                    inputRef={inputRefs.titleRef}
                    id="outlined-textarea"
                    label="Title..."
                    placeholder="Type here please..."
                    multiline
                />
            </div>
            <div className="d-flex a-center mb-3">
                <TextField
                    inputRef={inputRefs.ingredientsRef}
                    id="outlined-textarea"
                    label="Ingredients..."
                    placeholder="Type here please..."
                    multiline
                />
                <Button className="ms-2" variant="contained"
                    onClick={() => setIngredients()}>
                    Add Ingredients</Button>
            </div>
            <div className="d-flex a-center mb-3">
                <TextField
                    onChange={() => dispatch(createPrepTime(inputRefs.prepTimeRef.current.value))}
                    inputRef={inputRefs.prepTimeRef}
                    id="outlined-textarea"
                    label="Preparation Time..."
                    placeholder="Type here please..."
                    multiline
                />
            </div>
            <div className="d-flex a-center mb-3">
                <TextField
                    inputRef={inputRefs.prepStepsRef}
                    id="outlined-textarea"
                    label="Preparation Steps..."
                    placeholder="Type here please..."
                    multiline
                />
                <Button className="ms-2" variant="contained"
                    onClick={() => setPrepSteps()}>
                    Add Preparation Step</Button>
            </div>
            <div>
                <Button variant="contained" onClick={() => dispatch(addRecipe())}>Add Recipe</Button>
            </div>
        </div>
    );
};

export default InputsRecipe;