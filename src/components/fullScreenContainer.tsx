import {FC, ReactNode} from "react";

interface IProps {
  id: string
  children: ReactNode,
}

export const FullWidthContainer: FC<IProps> = ({children, id= ""}) => {
  return (
      <div
        id={id}
        className="h-screen w-screen"
      >
        {children}
      </div>
  )
}
