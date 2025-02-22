import '../../../styles/list.css';

import text from '../../../locales/ru.json';

import mailImage from '../../../assets/mail-icon.png';
import phoneImage from '../../../assets/phone-icon.png';
import locationImage from '../../../assets/location-icon.png';

import Title from '../../ui/Title/Title';
import Label from '../../ui/Label/Label';

const imageMailAlt = 'Иконка Почты';
const imagePhoneAlt = 'Иконка Почты';
const imageLocationAlt = 'Иконка Почты';


export default function Contact() {
  return (
    <div className="list">
      <Title>{text.contact.title}</Title>
      <Label
        imageSrc={mailImage}
        imageAlt={imageMailAlt}
        text={text.contact.mail}
      />
      <Label
        imageSrc={phoneImage}
        imageAlt={imagePhoneAlt}
        text={text.contact.phone}
      />
      <Label
        imageSrc={locationImage}
        imageAlt={imageLocationAlt}
        text={text.contact.location}
      />
    </div>
  )
}