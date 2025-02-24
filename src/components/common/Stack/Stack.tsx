import data from '../../../locales/ru.json';

import '../../../styles/Article.css';

import Enum from '../../ui/Enum/Enum';
import Title from '../../ui/Title/Title';

export default function Stack() {
  const stackData = data.stack;
  return (
    <article className='Article'>
      <Title>{stackData.title}</Title>
      <Enum text={stackData.text}/>
    </article>
   
  )
}