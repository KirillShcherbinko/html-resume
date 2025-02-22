import { ReactNode } from "react";
import Style from "../Resume/Resume.module.css";

interface Props {
  children: ReactNode
}

export default function Resume({children}: Props) {
  return <div className={Style.Resume}>
    {children}
  </div>
}