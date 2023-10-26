import * as React from 'react';
import { FC, SyntheticEvent, useState } from "react";

import { CustomAccordionItem } from "@/lib/accordion";

import Styled from './styles';

interface Props<T> {
  items: Array<CustomAccordionItem>,
  summaryComponent: FC<T>,
  contentComponent: FC<T>,
}

const CustomAccordion = <T,>({ items }: Props<T>) => {
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
        
        return (
          <Styled.AccordionItem key={itemName} expanded={expanded === itemName} onChange={handleChange(itemName)}>
            <Styled.AccordionSummary aria-controls={`${itemName}d-content`} id={`${itemName}d-header`}>
              {HeadingComponent}
            </Styled.AccordionSummary>
            <Styled.AccordionDetails>
              {ContentComponent}
            </Styled.AccordionDetails>
          </Styled.AccordionItem>
        );
      }) }
    </div>
  );
};

export default CustomAccordion;
