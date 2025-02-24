import data from '../../../locales/ru.json';
import Article from '../../ui/Article/Article';
import Title from '../../ui/Title/Title';
import Text from '../../ui/Text/Text';


export default function Education() {
  const educationData = data.education;
  return (
    <Article>
      <Title>{educationData.title}</Title>
      {educationData.texts.map((text, index) => (
        <Text key={index}>{text}</Text>
      ))}
    </Article>
  )
}