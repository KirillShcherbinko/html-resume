import data from '../../../locales/ru.json';

import List from '../../ui/List/List';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import { Fragment } from 'react';

export default function Contact() {
  const contactData = data.contact;
  return (
    <List
      title={contactData.title}
      border='none'
    >
      {contactData.texts.map((text, index) => (
        <Fragment key={index}>
          <Image
            imageSrc={`/assets/${contactData.images[index]}`}
            imageAlt={contactData.alts[index]}
          />
          <Text>{text}</Text>
        </Fragment>
      ))}
    </List>
  )
}