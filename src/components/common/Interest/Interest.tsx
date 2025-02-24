import data from '../../../locales/ru.json';

import Table from '../../ui/Table/Table';
import Card from '../../ui/Card/Card';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';

export default function Contact() {
  const interestData = data.interest;
  return (
    <Table
      title={interestData.title}
    >
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
    </Table>
  )
}