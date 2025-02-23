import Style from './Article.module.css';

import Text from '../Text/Text';
import Title from '../Title/Title';

interface Props {
  title: string,
  texts: string[]
}

export default function Article({title, texts}: Props) {
  return (
    <article className={Style.Article}>
      <Title>{title}</Title>
      {texts.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </article>
  )
}