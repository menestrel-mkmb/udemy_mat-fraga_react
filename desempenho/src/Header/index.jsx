import { memo } from "react";

export const Header = ({name}) => {
  console.log("render");
  
  return (
   <h3>renderizou {name}</h3>
  )
}

export default memo(Header);