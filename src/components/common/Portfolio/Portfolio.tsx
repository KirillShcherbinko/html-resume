import data from '../../../locales/ru.json';

import '../../../styles/List.css'

import Card from '../../ui/Card/Card';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import Title from '../../ui/Title/Title';

export default function Contact() {
  const portfolioData = data.portfolio;
  return (
    <div className='List'>
      <Title>{portfolioData.title}</Title>
      {portfolioData.texts.map((text, index) => (
        <Card 
          key={index}
          direction='row'
        >
          <Image
            imageSrc={`/assets/${portfolioData.images[index]}`}
            imageAlt={portfolioData.alts[index]}
          />
          <Text>{text}</Text>
        </Card>
      ))}
    </div>
  )
}