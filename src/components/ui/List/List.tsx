import Style from './List.module.css';

import Title from '../Title/Title';
import Label from '../Label/Label';

interface Props {
  title: string,
  images: string[],
  alts: string[],
  texts: string[]
}

export default function List({title, images, alts, texts}: Props) {
  return (
    <div className={Style.List}>
      <Title>{title}</Title>
      {texts.map((text:string , index: number) => (
        <Label
          key={index}
          imageSrc={`/assets/${images[index]}`}
          imageAlt={alts[index]}
          text={text}
        />
      ))}
    </div>
  )
}