import React from "react";

export default function Form() {
	return (
		<div className="formDiv">
			<form className="formCard">
				<label htmlFor="name">
					Name:&nbsp;
					<input
						id="nameInput"
						name="name"
						type="text"
						placeholder="Enter name here"
						maxLength="40"
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
					/>
				</label>
				<br />
				<select name="role">
					<option disabled value="">
						select
					</option>
					<option value="designer">Designer</option>
					<option value="juniorFrontEnd">Junior Front-End</option>
					<option value="seniorFrontEnd">Senior Front-End</option>
					<option value="backEndEngineer">Back-End Engineer</option>
					<option value="projectManager">Project Manager</option>
				</select>
				<br />
				<button>Add</button>
			</form>
		</div>
	);
}
