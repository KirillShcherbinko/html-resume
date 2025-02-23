import Style from './Enum.module.css';

import Frame from '../Frame/Frame';

interface Props {
  text: string
}

export default function Article({text}: Props) {
  return (
    <div className={Style.Enum}>
        {text.split(" ").map((elem, index) => (
          <Frame key={index}>{elem}</Frame>
        ))}
    </div>
  )
}