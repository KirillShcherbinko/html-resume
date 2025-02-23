import data from '../../../locales/ru.json';
import Article from '../../ui/Article/Article';

export default function Education() {
  const educationData = data.education;
  return (
    <Article
      title={educationData.title}
      texts={educationData.texts}
    />
  )
}