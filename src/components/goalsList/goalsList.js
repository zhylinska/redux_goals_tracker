import {useDispatch, useSelector} from "react-redux";
import {removeGoal} from "../../redux/action/goalAction";
import "./goalsList.css"

const GoalsList = () => {
    const goals = useSelector((state) => state.goals)

    const dispatch = useDispatch()

    const handleRemoveGoal = (goal) => {
        dispatch(removeGoal(goal))
    }

    return (
        <div className="goalsList">
                {goals.map((goal) =>
                (
                    <div
                        className="goalsListItem"
                        key={goal.id}>
                        <li className="goal">{goal.text}</li>
                        <button
                            className="add btn"
                            onClick={() => handleRemoveGoal(goal)}
                        >
                           Done!
                        </button>
                    </div>
                ))}
        </div>
    )
}

export default GoalsList
