import { ReactNode } from 'react';
import Style from './Frame.module.css';

interface Props {
  children: ReactNode,
}

export default function Text({children}: Props) {
  return <p className={Style.Frame}>{children}</p>
}