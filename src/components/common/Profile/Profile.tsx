import Style from './Profile.module.css';

import myPhoto from '/assets/my-photo.jpg';

import text from '../../../locales/ru.json';

import Author from './Author/Author';
import Position from './Position/Postion';
import Photo from './Photo/Photo';


export default function Profile(){
  const myAlt: string = 'Фото автора';

  return (
    <div className={Style.Profile}>
      <Photo imageSrc={myPhoto} imageAlt={myAlt}></Photo>
      <Author>{text.profile.name}</Author>
      <Position>{text.profile.position}</Position>
    </div>
  )
}

