import { InputProps } from "../types";

function Checkbox({ handleChange, id, label, name, value }: InputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				onChange={handleChange}
				id={id}
				type="checkbox"
				name={name}
				value={value}
			/>
		</>
	);
}

export default Checkbox;
