import Style from './Image.module.css';

interface Props {
  imageSrc: string,
  imageAlt: string
}

export default function Image({imageSrc, imageAlt}: Props) {
  return <img
    className={Style.Image}
    src={imageSrc}
    alt={imageAlt}
  />
}