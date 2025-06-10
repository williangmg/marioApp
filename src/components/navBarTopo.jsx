import React from "react";
import styles from "./navBarTopo.module.scss"; // Assuming you have a CSS file for styling

function NavBarTopo() {
  return (
    <nav className={styles.navBarTopo}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBarTopo;
