import { ReactNode } from 'react';
import Style from './Text.module.css';

interface Props {
  text: ReactNode,
}

export default function Text({text}: Props) {
  return <p className={Style.Text}>{text}</p>
}