import data from '../../../locales/ru.json';

import '../../../styles/List.css';

import Card from '../../ui/Card/Card';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import Title from '../../ui/Title/Title';

export default function Contact() {
  const contactData = data.contact;
  return (
    <div className='List'>
      <Title>{contactData.title}</Title>
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
    </div>
  )
}