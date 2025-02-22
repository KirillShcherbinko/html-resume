import Style from './ContactItem.module.css';
import Image from '../../../ui/Image/Image';
import Text from '../../../ui/Text/Text';

interface Props {
  imageSrc: string,
  imageAlt: string,
  text: string
}

export default function ContactItem({imageSrc, imageAlt, text}: Props) {
  return (
    <div className={Style.ContactItem}>
      <Image
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
      <Text>{text}</Text>
    </div>
  )
}