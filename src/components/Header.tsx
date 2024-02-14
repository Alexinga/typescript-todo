import { type ReactNode } from "react";
import image from "../assets/react.svg";
type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <>
      <img src={image} alt="react" />
      <h1 className="text-sm pb-4 md:text-lg">{children}</h1>
    </>
  );
}

export default Header;
