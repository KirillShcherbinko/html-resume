import data from '../../../locales/ru.json';
import Enum from '../../ui/Enum/Enum';
import Title from '../../ui/Title/Title';

export default function Stack() {
  const stackData = data.stack;
  return (
    <>
      <Title>{stackData.title}</Title>
      <Enum
        text={stackData.text}
      />
    </>
   
  )
}