export type FormFieldSet<T> = {
	name: keyof T;
	type: string;
	label: string;
	initialValue?: string,
	placeholder?: string
}
