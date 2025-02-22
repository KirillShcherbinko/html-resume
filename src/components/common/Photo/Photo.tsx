import Style from "../Photo/Photo.module.css";

interface Props {
  imageSrc: string,
  imageAlt: string
}

export default function Photo({imageSrc, imageAlt}: Props) {
  return <img 
    className={Style.Photo}
    src={imageSrc}
    alt={imageAlt}
  />
}