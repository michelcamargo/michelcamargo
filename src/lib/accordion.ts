import { ReactNode } from "react";

export type CustomAccordionItem = {
	name: string,
	heading: ReactNode,
	content: ReactNode,
	highlighted?: boolean,
	active?: boolean
	backgroundImage?: string,
}
