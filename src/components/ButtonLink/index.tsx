import { ReactNode } from 'react';
import Link from "next/link";

import Styled from './styles';

interface Props {
  children: ReactNode,
  href: string,
  target?: '_blank' | '_self' | '_parent',
  isLoading?: boolean,
  isDisabled?: boolean,
}

const ButtonLink = ({children, href, target, isLoading, isDisabled}: Props) => {
  return (
    <Styled.Btn isLoading={isLoading} isDisabled={isDisabled}>
      <Link href={href} target={target ?? '_self'}>
        {children}
      </Link>
    </Styled.Btn>
  );
};

export default ButtonLink;
