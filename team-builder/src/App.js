import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import Member from "./Member";
import { v4 as uuid } from "uuid";

const initialValues = {
	id: uuid(),
	name: "",
	email: "",
	role: "select",
};

const fakeAxiosGet = () => {
	return Promise.resolve({ status: 200, success: true, data: initialMemberList });
};
const fakeAxiosPost = (url, { name, email, role }) => {
	const newMember = { id: uuid(), name, email, role };
	return Promise.resolve({ status: 200, success: true, data: newMember });
};

const initialMemberList = [
	{
		id: uuid(),
		name: "Christian",
		email: "christian@lambda.com",
		role: "Junior Front-End",
	},
];

function App() {
	const [members, setMembers] = useState([]);
	const [values, setValues] = useState(initialValues);

	useEffect(() => {
		fakeAxiosGet("fakeapi.com").then((response) => setMembers(response.data));
	}, []);

	const formUpdater = (inputName, inputValue) => {
		const updatedValues = { ...values, [inputName]: inputValue };
		setValues(updatedValues);
	};

	const addMember = () => {
		const newMember = {
			name: values.name.trim(),
			email: values.email.trim(),
			role: values.role,
		};
		if (!newMember.name || !newMember.email || !newMember.role) return;

		fakeAxiosPost("fakeapi.com", newMember).then((response) => {
			const memberFromAPI = response.data;
			setMembers([memberFromAPI, ...members]);
			setValues(initialValues);
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Member List</h1>
				<div className="container">
					<Form values={values} formUpdater={formUpdater} addMember={addMember} />
					{members.map((member) => {
						return <Member key={member.id} member={member} />;
					})}
				</div>
			</header>
		</div>
	);
}
export default App;
