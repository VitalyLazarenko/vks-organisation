import {FC, ReactNode} from "react";

interface IProps {
  styles: string,
  children: ReactNode,
}

export const FullWidthContainer: FC<IProps> = ({children, styles = ''}) => {
  return (
      <div
        className={"h-screen w-screen " + styles}
      >
        {children}
      </div>
  )
}
