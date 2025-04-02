import { InputProps } from "../types";

function Input({ label, id, name, placeholder }: InputProps) {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input type="text" id={id} placeholder={placeholder} name={name} />
		</>
	);
}

export default Input;
