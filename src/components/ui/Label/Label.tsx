import Style from './Label.module.css';
import Image from '../Image/Image';
import Text from '../Text/Text';

interface Props {
  imageSrc: string,
  imageAlt: string,
  text: string
}

export default function Label({imageSrc, imageAlt, text}: Props) {
  return (
    <div className={Style.Label}>
      <Image
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <Text>{text}</Text>
    </div>
  )
}