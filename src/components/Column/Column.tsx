import Style from './Column.module.css';
import { ReactNode } from 'react';

interface Props {
  color: string,
  children: ReactNode
}

export default function Column({color, children}: Props) {
  return <div style={{ backgroundColor: color }} className={Style.Column}>
    {children}
  </div>
}