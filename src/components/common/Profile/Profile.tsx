import Style from './Profile.module.css';

import myPhoto from '/assets/my-photo.jpg';

import data from '../../../locales/ru.json';

import Author from './Author/Author';
import Position from './Position/Postion';
import Photo from './Photo/Photo';


export default function Profile(){
  const myAlt: string = 'Фото автора';

  return (
    <div className={Style.Profile}>
      <Photo imageSrc={myPhoto} imageAlt={myAlt}></Photo>
      <Author>{data.profile.name}</Author>
      <Position>{data.profile.position}</Position>
    </div>
  )
}