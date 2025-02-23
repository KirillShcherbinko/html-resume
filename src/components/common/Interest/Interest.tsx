import data from '../../../locales/ru.json';

import Table from '../../ui/Table/Table';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import { Fragment } from 'react';

export default function Contact() {
  const interestData = data.interest;
  return (
    <Table
      title={interestData.title}
      border='none'
    >
      {interestData.texts.map((text, index) => (
        <Fragment key={index}>
          <Image
            imageSrc={`/assets/${interestData.images[index]}`}
            imageAlt={interestData.alts[index]}
          />
          <Text>{text}</Text>
        </Fragment>
      ))}
    </Table>
  )
}