import data from '../../../locales/ru.json';
import Article from '../../ui/Article/Article';

export default function Extras() {
  const experienceData = data.experience;
  return (
    <Article
      title={experienceData.title}
      texts={experienceData.texts}
    />
  )
}