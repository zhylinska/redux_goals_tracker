import {useDispatch} from "react-redux";
import {addGoal} from "../../redux/action/goalAction";
import {useState} from "react";
import nextId from "react-id-generator";
import "./form.css"


const Form = () => {
    const dispatch = useDispatch()
    const [goal, setGoal] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault()

        dispatch(
            addGoal({
                id: nextId(),
                text: goal,
            })
        )
        resetForm()
    }

    const resetForm = () => {
        setGoal("")
    }

    return (
            <form
                onSubmit={handleFormSubmit}
                className="form"
            >
                <input
                    className="formInput"
                    type="text"
                    name="goal"
                    onChange={(event) => setGoal(event.target.value)}
                    value={goal}
                    placeholder="enter new goal"
                    required
                />
                <button
                    className="formButton btn">Add to list</button>
            </form>
    )
}


export default Form



