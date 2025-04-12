import { InputProps } from "../types";

function ControlledInput({
	label,
	id,
	name,
	placeholder,
	value,
	handleChange,
}: InputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				id={id}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</>
	);
}

export default ControlledInput;
