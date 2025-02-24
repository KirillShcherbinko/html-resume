import Style from './Article.module.css';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

export default function Article({children}: Props) {
  return (
    <article className={Style.Article}>
      {children}
    </article>
  )
}