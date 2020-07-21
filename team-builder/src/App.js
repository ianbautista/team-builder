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

	const addMember = () => {
		const newMember = {
			name: values.name.trim(),
			email: values.email.trim(),
		};
		if (!newMember.name || !newMember.email) return null;
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
