import { ReactNode } from 'react';
import Style from './Title.module.css';

interface Props {
  children: ReactNode,
}

export default function Title({children}: Props) {
  return <p className={Style.Title}>{children}</p>
}