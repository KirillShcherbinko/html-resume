import data from '../../../locales/ru.json';

import Article from '../../ui/Article/Article';
import Enum from '../../ui/Enum/Enum';
import Title from '../../ui/Title/Title';

export default function Stack() {
  const stackData = data.stack;
  return (
    <Article>
      <Title>{stackData.title}</Title>
      <Enum
        text={stackData.text}
      />
    </Article>
   
  )
}