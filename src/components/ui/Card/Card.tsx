import Style from './Card.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface Props {
  imageSrc: string,
  imageAlt: string,
  text: string,
  direction: FlexDirection
}

export default function Card({imageSrc, imageAlt, text, direction}: Props) {
  return (
    <div 
      className={Style.Card}
      style={{ flexDirection: direction }}
    >
      <Image
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <Text>{text}</Text>
    </div>
  )
}