import Style from "../Avatar/Avatar.module.css";

interface Props {
  imageSrc: string,
  imageAlt: string
}

export default function Avatar({imageSrc, imageAlt}: Props) {
  return <img 
    className={Style.Avatar}
    src={imageSrc}
    alt={imageAlt}
  />
}