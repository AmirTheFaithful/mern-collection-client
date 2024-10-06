import { ReactElement, FC } from "react";
import { AiFillFire } from "react-icons/ai";

import "./navbar.scss";

export default function Navbar(): ReactElement {
  handlePageScroll();

  return (
    <nav className="navbar hidden">
      <Icon />
      <LinksContainer />
    </nav>
  );
}

const Icon: FC = (): ReactElement => {
  return (
    <a className="nav-logo" href="/">
      <img src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png" />
    </a>
  );
};

const LinksContainer: FC = (): ReactElement => {
  return (
    <div className="links-container">
      <a href="/">Home</a>
      <a href="/">Projects</a>
    </div>
  );
};

const handlePageScroll = (): void => {
  window.addEventListener("scroll", (): void => {
    const navbar: HTMLElement | null = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY < 30) {
      navbar.classList.remove("showing");
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
      navbar.classList.add("showing");
    }
  });
};
