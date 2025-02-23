import Style from './Card.module.css';
import { ReactNode } from 'react';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface Props {
  children: ReactNode,
  direction: FlexDirection,
  border: string
}

export default function Card({children, direction, border}: Props) {
  return (
    <div 
      className={Style.Card}
      style={{ flexDirection: direction, border: border }}
    >
      {children}
    </div>
  )
}