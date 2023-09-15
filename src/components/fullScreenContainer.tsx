import {FC, ReactNode} from "react";

interface IProps {
  children: ReactNode,
}

export const FullWidthContainer: FC<IProps> = ({children}) => {
  return (
      <div
        className="h-screen w-full"
      >
        {children}
      </div>
  )
}
