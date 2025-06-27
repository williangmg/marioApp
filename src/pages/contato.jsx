import marioImage from "../components/fotos/marioImage.jpg";
import ButtonHome from "../components/buttonHome.jsx";
import styles from "./home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Contato() {
  return (
    <Container fluid>
      <Row className={styles.rowFullHeight}>
        <Col md={6} className={styles.textContainer}>
          <div className={styles.textContent}>
            <h1>vvvvvvvvvvvvvvvvv</h1>
            <h2>7777777777777777777</h2>
            <p>ttttttttttttttttttttttttttttttttttttttttttttttttttttt</p>
          </div>
          <div className={styles.meioContainer}>
            <ButtonHome text="Jurídico" onClick={() => alert("Jurídico")} />
            <ButtonHome
              text="Imobiliário"
              onClick={() => alert("Imobiliário")}
            />
            <ButtonHome text="Contato" onClick={() => alert("Contato")} />
            <ButtonHome text="Sobre Mim" onClick={() => alert("Sobre Mim")} />
          </div>
        </Col>
        <Col md={6} className={styles.imageContainer}>
          <img
            src={marioImage}
            alt="Mário Spalatti"
            className={` ${styles.marioImage}`}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;
