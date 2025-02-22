import './App.css';
import myPhoto from './assets/my-photo.jpg';
import Column from './components/Column/Column';
import Photo from './components/Photo/Photo';
import Resume from './components/Resume/Resume';

function App() {
  const myAlt: string = 'Фото автора';

  return (
    <>
      <Resume>
        <Column color="#CBD0CC">
          <Photo imageSrc={myPhoto} imageAlt={myAlt}></Photo>
        </Column>
        <Column color="white">
          <></>
        </Column>
      </Resume>
    </>
  )
}

export default App
