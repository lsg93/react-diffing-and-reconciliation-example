function Input({ id, placeholder, name }: Partial<HTMLInputElement>) {
	return <input type="text" id={id} placeholder={placeholder} name={name} />;
}

export default Input;
