import data from '../../../locales/ru.json';
import Article from '../../ui/Article/Article';

export default function Stack() {
  const stackData = data.stack;
  return (
    <Article
      title={stackData.title}
      texts={stackData.texts}
    />
  )
}