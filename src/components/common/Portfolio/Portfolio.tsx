import data from '../../../locales/ru.json';

import List from '../../ui/List/List';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import { Fragment } from 'react';

export default function Contact() {
  const portfolioData = data.portfolio;
  return (
    <List
      title={portfolioData.title}
      border='none'
    >
      {portfolioData.texts.map((text, index) => (
        <Fragment key={index}>
          <Image
            imageSrc={`/assets/${portfolioData.images[index]}`}
            imageAlt={portfolioData.alts[index]}
          />
          <Text>{text}</Text>
        </Fragment>
      ))}
    </List>
  )
}