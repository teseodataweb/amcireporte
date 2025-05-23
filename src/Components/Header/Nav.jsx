import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <a href="#inicio">Home</a>
      </li>
      <li className="menu-item-has-children">
        <a href="#acercaDe">Acerca de</a>
      </li>
      <li className="menu-item-has-children">
        <a href="#proyectos">Cómo funciona</a>
      </li>
    </ul>
  );
}
