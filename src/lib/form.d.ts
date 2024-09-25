export type FormFieldSet<T> = {
	name: keyof T;
	type: string;
	label: string;
	initialValue?: string,
	placeholder?: string
}

// export enum ContactFormStep {
// 	// eslint-disable-next-line no-unused-vars
//   intro = 0,
//   // eslint-disable-next-line no-unused-vars
//   personal = 1,
// }
