import Style from './Table.module.css';

import Card from '../Card/Card';
import Title from '../Title/Title';

interface Props {
  title: string,
  images: string[],
  alts: string[],
  texts: string[]
}

export default function Table({title, images, alts, texts}: Props) {
  return (
    <div className={Style.Table}>
      <Title>{title}</Title>
      {texts.map((text:string, index: number) => (
        <Card
          key={index}
          imageSrc={`/assets/${images[index]}`}
            imageAlt={alts[index]}
            text={text}
            direction='column'
        />
      ))}
    </div>
  )
}