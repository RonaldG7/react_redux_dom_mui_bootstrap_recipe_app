import InputsRecipe from "../components/InputsRecipe";
import CreateSingleRecipe from "../components/CreateSingleRecipe";

const CreateRecipePage = () => {
    return (
        <div className="d-flex">
            <InputsRecipe/>
            <CreateSingleRecipe/>
        </div>
    );
};

export default CreateRecipePage;