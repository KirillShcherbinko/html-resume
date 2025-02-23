import Style from './List.module.css';

import Title from '../Title/Title';
import Card from '../Card/Card';
import { Children, ReactNode } from 'react';

interface Props {
  title: string,
  children: ReactNode,
  border: string
}

export default function List({title, children, border}: Props) {
  return (
    <div className={Style.List}>
      <Title>{title}</Title>
      {Children.map(children, (child , index) => (
        <Card
          key={index}
          children={child}
          direction='row'
          border={border}
        />
      ))}
    </div>
  )
}