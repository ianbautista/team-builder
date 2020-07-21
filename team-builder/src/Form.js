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
						MaxLength="40"
					/>
				</label>{" "}
				<br />
				<label htmlFor="emailInput">
					Email:&nbsp;&nbsp;
					<input
						id="emailInput"
						name="email"
						type="email"
						placeholder="e.g. email@domain.com"
						MaxLength="50"
					/>
				</label>
				<br />
				<button>Add</button>
			</form>
		</div>
	);
}
