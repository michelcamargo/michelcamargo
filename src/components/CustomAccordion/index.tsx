import * as React from 'react';
import { FC, SyntheticEvent, useState } from "react";

import { CustomAccordionItem } from "@/lib/accordion";

import Styled, { StyledCustomAccordionProps } from './styles';

interface Props<T> extends StyledCustomAccordionProps {
  items: Array<CustomAccordionItem>,
  summaryComponent: FC<T>,
  contentComponent: FC<T>,
}

const CustomAccordion = <T,>({ items, no_spacing, background, content_divisor }: Props<T>) => {
	const [expanded, setExpanded] = useState<string | false>('panel1');

	const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    	setExpanded(newExpanded ? panel : false);
    };

	return (
		<div>
			{ items.map((accordion, index) => {
				const { heading: HeadingComponent, content: ContentComponent, name } = accordion;
				const itemName = `panel_${name}${index}`;
				const accordionBackgroundString = accordion.backgroundImage
					? `url('${accordion.backgroundImage}') no-repeat center/100%`
					: undefined;
        
				return (
					<Styled.AccordionItem
						key={itemName}
						expanded={expanded === itemName}
						onChange={handleChange(itemName)}
						no_spacing={no_spacing}
						// background={background ? background : accordionBackgroundString }
						sx={{ padding: no_spacing === 'true' ? 0 : 'inherit' }}
					>
						<Styled.AccordionSummary
							aria-controls={`${itemName}d-content`}
							id={`${itemName}d-header`}
							sx={{ padding: no_spacing === 'true' ? 0 : 'inherit' }}
							// background={background ? background : accordionBackgroundString }
							no_spacing={no_spacing}
						>
							{ no_spacing === 'true' && <Styled.LeftOffset /> }
							{HeadingComponent}
						</Styled.AccordionSummary>
						<Styled.AccordionDetails
							content_divisor={content_divisor}
							sx={{ padding: no_spacing === 'true' ? 0 : 'inherit' }}
							no_spacing={no_spacing}
							background={background ? background : accordionBackgroundString }
						>
							{ContentComponent}
						</Styled.AccordionDetails>
					</Styled.AccordionItem>
				);
			}) }
		</div>
	);
};

export default CustomAccordion;
