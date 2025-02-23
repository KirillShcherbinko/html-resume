import data from '../../../locales/ru.json';
import List from '../../ui/List/List';

export default function Contact() {
  const contactData = data.contact;
  return (
    <List
      title={contactData.title}
      images={contactData.images}
      alts={contactData.alts}
      texts={contactData.texts}
    />
  )
}