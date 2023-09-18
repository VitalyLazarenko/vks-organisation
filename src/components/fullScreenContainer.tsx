import {FC, ReactNode} from "react";

interface IProps {
  styles: string,
  children: ReactNode,
}

export const FullWidthContainer: FC<IProps> = ({children, styles = ''}) => {
  return (
      <div
        className={"h-screen w-full " + styles}
      >
        {children}
      </div>
  )
}
