import { ReactNode } from 'react';
import Style from './Position.module.css';

interface Props {
  children: ReactNode
}

export default function Position({children}: Props) {
  return <p className={Style.Position}>{children}</p>
}