import Carousel from 'react-bootstrap/Carousel'
import {useSelector} from "react-redux";


const CreateSingleRecipe = () => {

    const createRecipe = useSelector(state => state.recipe.value.createRecipe)

    return (
        <div className="flex-grow-1">
            <div className="singleRecipe">
                <div className="carouselSize">
                    <Carousel>
                        {createRecipe.images.map((x, i) =>
                            <Carousel.Item key={i}>
                                <img
                                    className="d-block w-100"
                                    src={x}
                                    alt="First slide"
                                />
                            </Carousel.Item>)}
                    </Carousel>
                </div>
                <h2>{createRecipe.title}</h2>
                <p><b>Preparation TIme:</b> {createRecipe.prepTime}min</p>
                <p><b>Ingredients:</b></p>
                <ul>
                    {createRecipe.ingredients.map((x, i) => <li key={i}>{x}</li>)}
                </ul>
                <p><b>Preparation Steps:</b></p>
                <ol>
                    {createRecipe.prepSteps.map((x, i) => <li key={i}>{x}</li>)}
                </ol>
            </div>
        </div>
    );
};

export default CreateSingleRecipe;