import Style from './Wrapper.module.css';
import { ReactNode } from 'react';

interface Props {
  color: string,
  children: ReactNode
}

export default function Wrapper({color, children}: Props) {
  return <div 
      style={{ backgroundColor: color }}
      className={Style.Wrapper}
    >
    {children}
  </div>
}