import Style from './Contact.module.css';

import text from '../../../locales/ru.json';

import mailImage from '../../../assets/mail-icon.png';
import phoneImage from '../../../assets/phone-icon.png';
import locationImage from '../../../assets/location-icon.png';

import Title from '../../ui/Title/Title';
import ContactItem from './ContactItem/Contactitem';

const imageMailAlt = 'Иконка Почты';
const imagePhoneAlt = 'Иконка Почты';
const imageLocationAlt = 'Иконка Почты';


export default function Contact() {
  return (
    <div className={Style.Contact}>
      <Title>{text.contact.title}</Title>
      <ContactItem
        imageSrc={mailImage}
        imageAlt={imageMailAlt}
        text={text.contact.mail}
      />
      <ContactItem
        imageSrc={phoneImage}
        imageAlt={imagePhoneAlt}
        text={text.contact.phone}
      />
      <ContactItem
        imageSrc={locationImage}
        imageAlt={imageLocationAlt}
        text={text.contact.location}
      />
    </div>
  )
}