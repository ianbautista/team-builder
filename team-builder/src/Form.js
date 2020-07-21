import React from "react";

export default function Form() {
	return (
		<div className="formDiv">
			<form className="formCard">
				<label name="">
					Name:&nbsp;
					<input />
				</label>{" "}
				<br />
				<label name="">
					Email:&nbsp;
					<input />
				</label>
			</form>
		</div>
	);
}
