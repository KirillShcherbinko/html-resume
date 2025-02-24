import Style from './Card.module.css';
import classNames from 'classnames';
import { ReactNode } from 'react';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface Props {
  children: ReactNode,
  direction: FlexDirection,
  borderCard?: boolean,
}

export default function Card({children, direction, borderCard = false}: Props) {
  return (
    <div 
      className = {borderCard ? classNames(Style.Card, Style.BorderCard) : Style.Card}
      style={{ flexDirection: direction }}
    >
      {children}
    </div>
  )
}