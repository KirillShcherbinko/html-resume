import myAvatar from '/assets/my-avatar.jpg';

import data from '../../../locales/ru.json';

import '../../../styles/Article.css';

import Heading from '../../ui/Heading/Heading';
import Subheading from '../../ui/Subheading/Subheading';
import Avatar from '../../ui/Avatar/Avatar';


export default function Profile(){
  const myAlt: string = 'Фото автора';

  return (
    <div className='Article'>
      <Avatar imageSrc={myAvatar} imageAlt={myAlt}></Avatar>
      <Heading>{data.profile.heading}</Heading>
      <Subheading>{data.profile.subheading}</Subheading>
    </div>
  )
}