import React, { FC } from "react";
import "./Header.styles.css";
import { HeaderProps } from "./Header.types";

export const HeaderComponent: FC<HeaderProps> = ({ firstLink, secondLink }) => {
  return (
    <header>
      <ul>
        <li>
          <a href="search image.html">{firstLink}</a>
        </li>
        <li>
          <a href="search advanced.html">{secondLink}</a>
        </li>
      </ul>
    </header>
  );
};
