import React from "react";
import styles from "./navBarTopo.module.scss"; // Assuming you have a CSS file for styling

function NavBarTopo() {
  return (
    <nav className={styles.navBarTopo}>
      <ul>
        <li>Home</li>
        <li>Jurídico</li>
        <li>Imobiliário</li>        
        <li>Contato</li>
        <li>Sobre mim</li>
      </ul>
    </nav>
  );
}

export default NavBarTopo;
