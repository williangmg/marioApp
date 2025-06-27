import styles from "./navBarTopo.module.scss"; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom";

function NavBarTopo() {
  const navigate = useNavigate();
  return (
    <nav className={styles.navBarTopo}>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/juridico")}>Jurídico</li>
        <li onClick={() => navigate("/imobiliario")}>Imobiliário</li>
        <li onClick={() => navigate("/contato")}>Contato</li>
        <li onClick={() => navigate("/sobre")}>Sobre mim</li>
      </ul>
    </nav>
  );
}

export default NavBarTopo;
