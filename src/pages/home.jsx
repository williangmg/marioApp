import marioImage from "../components/fotos/marioImage.jpg";
import ButtonHome from "../components/buttonHome.jsx";
import styles from "./home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row className={styles.rowFullHeight}>
        <Col md={4} className={styles.textContainer}>
          <div className={styles.textContent}>
            <h1>Mário Spalatti</h1>
            <h2>Empresário e advogado</h2>
            <p>
              Mário Spalatti é um empresário renomado, conhecido por sua visão
              inovadora e liderança no setor. Com uma carreira marcada por
              sucessos, ele continua a inspirar e trabalhar com integridade e
              paixão.
            </p>
          </div>
        </Col>
        <Col md={4} className={styles.meioContainer}>
          <h1>Bem vindo ao empresário Mário Spalatti</h1>
          <ButtonHome text="Jurídico" onClick={() => alert("Jurídico")} />
          <ButtonHome text="Imobiliário" onClick={() => alert("Imobiliário")} />
          <ButtonHome text="Contato" onClick={() => alert("Contato")} />
          <ButtonHome text="Sobre Mim" onClick={() => alert("Sobre Mim")} />
        </Col>
        <Col md={4} className={styles.imageContainer}>
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

export default Home;
