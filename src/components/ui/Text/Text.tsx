import { ReactNode } from 'react';
import Style from './Text.module.css';

interface Props {
  children: ReactNode,
}

export default function Text({children}: Props) {
  return <p className={Style.Text}>{children}</p>
}