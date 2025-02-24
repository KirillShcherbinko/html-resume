import Style from './List.module.css';

import Title from '../Title/Title';
import { ReactNode } from 'react';

interface Props {
  title: string,
  children: ReactNode,
}

export default function List({title, children}: Props) {
  return (
    <div className={Style.List}>
      <Title>{title}</Title>
      {children}
    </div>
  )
}