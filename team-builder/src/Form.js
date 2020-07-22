import React from "react";

export default function Form(props) {
	const { values, formUpdater, addMember } = props;

	const formUpdate = (evt) => {
		const name = evt.target.name;
		const value = evt.target.value;

		formUpdater(name, value);
	};

	const formSubmit = (evt) => {
		evt.preventDefault();
		addMember();
	};
	return (
		<div className="formDiv">
			<form className="formCard" onSubmit={formSubmit}>
				<label htmlFor="name">
					Name:&nbsp;
					<input
						id="nameInput"
						name="name"
						type="text"
						placeholder="Enter name here"
						maxLength="40"
						onChange={formUpdate}
						values={values.name}
					/>
				</label>
				<br />
				<label htmlFor="emailInput">
					Email:&nbsp;&nbsp;
					<input
						id="emailInput"
						name="email"
						type="email"
						placeholder="e.g. email@domain.com"
						maxLength="50"
						onChange={formUpdate}
						values={values.email}
					/>
				</label>
				<br />
				<select className="decorated" name="role" onChange={formUpdate}>
					<option disabled value="" selected>
						select
					</option>
					<option value="Designer">Designer</option>
					<option value="Junior Front-End">Junior Front-End</option>
					<option value="Senior Front-End">Senior Front-End</option>
					<option value="Back-End Engineer">Back-End Engineer</option>
					<option value="Project Manager">Project Manager</option>
				</select>
				<br />
				<button>Add</button>
			</form>
		</div>
	);
}
