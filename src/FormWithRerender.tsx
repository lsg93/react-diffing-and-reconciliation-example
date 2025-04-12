import { useState } from "react";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import { FormValues } from "./types";

export function FormWithRerenderWithBugFixedByControlledComponents() {
	const [formValues, setFormValues] = useState<FormValues>({
		isCompany: false,
	});

	const toggleIsCompany = () => {
		setFormValues((prev) => {
			return {
				...prev,
				isCompany: !prev.isCompany,
				...(isCompany
					? { company_tax_id_number: "" }
					: { personal_tax_id_number: "" }),
			};
		});
	};

	const { isCompany } = formValues;

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
						value={formValues?.company_tax_id_number}
					/>
				) : (
					<Input
						label="Personal Tax ID Number"
						id="personal-tax-id-number"
						placeholder="Enter your company ID."
						value={formValues?.personal_tax_id_number}
					/>
				)}
			</div>
		</>
	);
}

function FormWithRerenderWithBug() {
	const [isCompany, setIsCompany] = useState<boolean>(false);

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
				) : (
					<Input
						label="Personal Tax ID Number"
						id="personal-tax-id-number"
						placeholder="Enter your company ID."
					/>
				)}
			</div>
		</>
	);
}

export default FormWithRerenderWithBug;
