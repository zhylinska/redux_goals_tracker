import React from "react";
import './App.css';
import Form from "../components/form/form";
import GoalsList from "../components/goalsList/goalsList"

function App() {
    return (
        <div className="App">
            <h1>Plans are nothing. Planning is everything)</h1>
            <Form/>
            <GoalsList/>
        </div>
    );
}

export default App;
