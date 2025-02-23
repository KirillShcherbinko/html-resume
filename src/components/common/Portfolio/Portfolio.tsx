import data from '../../../locales/ru.json';
import List from '../../ui/List/List';

export default function Portfolio() {
  const portfolioData = data.portfolio;
  return (
    <List
      title={portfolioData.title}
      images={portfolioData.images}
      alts={portfolioData.alts}
      texts={portfolioData.texts}
    />
  )
}