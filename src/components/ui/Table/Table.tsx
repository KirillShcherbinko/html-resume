import Style from './Table.module.css';

import Title from '../Title/Title';
import { ReactNode } from 'react';

interface Props {
  title: string,
  children: ReactNode,
}

export default function Table({title, children}: Props) {
  return (
    <div className={Style.Table}>
      <Title>{title}</Title>
      {children}
    </div>
  )
}