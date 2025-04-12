export type InputProps = Partial<HTMLInputElement> & {
	handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	label: string;
};

export type FormValues = {
	isCompany: boolean;
	company_tax_id_number?: string;
	personal_tax_id_number?: string;
};
