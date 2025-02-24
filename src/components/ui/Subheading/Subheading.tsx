import { ReactNode } from 'react';
import Style from './Subheading.module.css';

interface Props {
  children: ReactNode
}

export default function Subheading({children}: Props) {
  return <p className={Style.Subheading}>{children}</p>
}