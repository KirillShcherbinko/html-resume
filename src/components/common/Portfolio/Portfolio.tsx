import data from '../../../locales/ru.json';

import List from '../../ui/List/List';
import Card from '../../ui/Card/Card';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';

export default function Contact() {
  const portfolioData = data.portfolio;
  return (
    <List
      title={portfolioData.title}
    >
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
    </List>
  )
}