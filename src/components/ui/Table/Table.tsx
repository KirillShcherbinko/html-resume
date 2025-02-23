import Style from './Table.module.css';

import Title from '../Title/Title';
import Card from '../Card/Card';
import { Children, ReactNode } from 'react';

interface Props {
  title: string,
  children: ReactNode,
  border: string
}

export default function Table({title, children, border}: Props) {
  return (
    <div className={Style.Table}>
      <Title>{title}</Title>
      {Children.map(children, (child , index) => (
        <Card
          key={index}
          children={child}
          direction='column'
          border={border}
        />
      ))}
    </div>
  )
}