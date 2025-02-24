import { ReactNode } from 'react';
import Style from './Heading.module.css';

interface Props {
  children: ReactNode
}

export default function Heading({children}: Props) {
  return <p className={Style.Heading}>{children}</p>
}