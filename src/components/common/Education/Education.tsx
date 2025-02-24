import data from '../../../locales/ru.json';

import '../../../styles/Article.css';

import Title from '../../ui/Title/Title';
import Text from '../../ui/Text/Text';


export default function Education() {
  const educationData = data.education;
  return (
    <article className='Article'>
      <Title>{educationData.title}</Title>
      {educationData.texts.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </article>
  )
}