import data from '../../../locales/ru.json';
import Table from '../../ui/Table/Table';

export default function Interest() {
  const interestData = data.interest;
  return (
    <Table
      title={interestData.title}
      images={interestData.images}
      alts={interestData.alts}
      texts={interestData.texts}
    />
  )
}