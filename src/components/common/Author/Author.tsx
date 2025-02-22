import { ReactNode } from 'react';
import Style from './Author.module.css';

interface Props {
  children: ReactNode
}

export default function Author({children}: Props) {
  return <p className={Style.Author}>{children}</p>
}