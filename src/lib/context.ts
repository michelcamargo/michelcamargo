import { Dispatch, SetStateAction } from "react";

export type CustomContext<T> = {
	value: T,
	setValue: Dispatch<SetStateAction<T>>
} | null;
