import data from '../../../locales/ru.json';

import '../../../styles/List.css';

import Card from '../../ui/Card/Card';
import Title from '../../ui/Title/Title';
import Text from '../../ui/Text/Text';
import Enum from '../../ui/Enum/Enum';

export default function Projects() {
  const projectsData = data.projects;
  return (
    <div className='List'>
      <Title>{projectsData.title}</Title>
      {projectsData.cards.map((card, index) => (
        <Card
          key={index}
          direction='column'
          borderCard={true}
        >
          <Title>{card.title}</Title>
          <Text>{card.text}</Text>
          <Enum text={card.stack}/>
        </Card>
      ))}
    </div>
  )
}