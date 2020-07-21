import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

const initialValues = {
	name: "",
	email: "",
};

function App() {
	const [members, setMembers] = useState([]);
	const [values, setValues] = useState(initialValues);

	const formUpdater = (inputName, inputValue) => {
		const updatedValues = { ...values, [inputName]: inputValue };
		setValues(updatedValues);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1> Member List</h1>
				<div className="container">
					<Form />
				</div>
			</header>
		</div>
	);
}
export default App;
