import data from '../../../locales/ru.json';

import List from '../../ui/List/List';
import Card from '../../ui/Card/Card';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';

export default function Contact() {
  const contactData = data.contact;
  return (
    <List
      title={contactData.title}
    >
      {contactData.texts.map((text, index) => (
        <Card 
          key={index}
          direction='row'
        >
          <Image
            imageSrc={`/assets/${contactData.images[index]}`}
            imageAlt={contactData.alts[index]}
          />
          <Text>{text}</Text>
        </Card>
      ))}
    </List>
  )
}