import { useState } from "react";
import ControlledInput from "./components/ControlledInput";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import { FormValues } from "./types";

export function FormWithRerenderWithBugFixedByControlledComponents() {
	const [formValues, setFormValues] = useState<FormValues>({
		isCompany: false,
		company_tax_id_number: "",
		personal_tax_id_number: "",
	});

	const toggleIsCompany = () => {
		setFormValues((prev) => {
			return {
				...prev,
				isCompany: !prev.isCompany,
				company_tax_id_number: "",
				personal_tax_id_number: "",
			};
		});
	};

	const setTaxNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues((prev) => {
			return {
				...prev,
				[name]: value,
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
					<ControlledInput
						label="Company Tax ID Number"
						id="company-tax-id-number"
						placeholder="Enter your company tax ID."
						handleChange={setTaxNumber}
						name="company_tax_id_number"
						value={formValues?.company_tax_id_number}
					/>
				) : (
					<ControlledInput
						label="Personal Tax ID Number"
						id="personal-tax-id-number"
						placeholder="Enter your personal tax ID."
						handleChange={setTaxNumber}
						name="personal_tax_id_number"
						value={formValues?.personal_tax_id_number}
					/>
				)}
			</div>
		</>
	);
}

export function FormWithRerenderWithBugFixedByArray() {
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
				) : null}
				{!isCompany ? (
					<Input
						label="Personal Tax ID Number"
						id="personal-tax-id-number"
						placeholder="Enter your company ID."
					/>
				) : null}
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
