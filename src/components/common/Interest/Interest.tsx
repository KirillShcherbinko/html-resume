import data from '../../../locales/ru.json';

import '../../../styles/Table.css';

import Card from '../../ui/Card/Card';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import Title from '../../ui/Title/Title';

export default function Contact() {
  const interestData = data.interest;
  return (
    <div  className='Table'>
      <Title>{interestData.title}</Title>
      {interestData.texts.map((text, index) => (
        <Card 
          key={index}
          direction='column'
        >
          <Image
            imageSrc={`/assets/${interestData.images[index]}`}
            imageAlt={interestData.alts[index]}
          />
          <Text>{text}</Text>
        </Card>
      ))}
    </div>
  )
}