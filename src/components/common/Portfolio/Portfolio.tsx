import '../../../styles/list.css';

import text from '../../../locales/ru.json';

import browserImage from '../../../assets/browser-icon.png';

import Title from '../../ui/Title/Title';
import Label from '../../ui/Label/Label';

export default function Portfolio() {
  const imageBrowserAlt = 'Иконка браузера';

  return (
    <div className="list">
      <Title>{text.portfolio.title}</Title>
      <Label
        imageSrc={browserImage}
        imageAlt={imageBrowserAlt}
        text={text.portfolio.github}
      />
    </div>
  )
}