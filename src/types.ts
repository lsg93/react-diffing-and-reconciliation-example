export type InputProps = Partial<HTMLInputElement> & {
	handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	label: string;
};
