import { useState } from "react";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";

function Form() {
	const [isCompany, setIsCompany] = useState(false);

	const toggleIsCompany = () => {
		setIsCompany((prev) => !prev);
	};

	return (
		<>
			{/**  Rest of form */}
			<div className="form-row">
				<Checkbox
					label="Signing up as company?"
					handleChange={toggleIsCompany}
				/>
			</div>
			<div className="form-row">
				{isCompany ? (
					<Input
						label="Company Tax ID Number"
						id="company-tax-id-number"
						placeholder="Enter your company ID."
					/>
				) : null}
			</div>
		</>
	);
}

export default Form;
