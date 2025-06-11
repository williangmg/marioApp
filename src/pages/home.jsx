import marioImage from "../components/fotos/marioCruzado.png";
import ButtonHome from "../components/ButtonHome";
import styles from "./home.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        {" "}
        {/* Adicione alinhamento vertical */}
        <Col md={4} className={styles.textContainer}>
          {" "}
          {/* Renomeei a classe */}
          <div className={styles.textContent}>
            {" "}
            {/* Adicionei uma div para estilização */}
            <h1>Mario Spalatti</h1>
            <h2>Empresário</h2>
            <p>
              Mario Spalatti é um empresário renomado, conhecido por sua visão
              inovadora e liderança no setor. Com uma carreira marcada por
              sucessos, ele continua a inspirar e liderar com integridade e
              paixão.
            </p>
          </div>
        </Col>
        <Col md={4} className={styles.homeContainer}>
          <div>
            <h1>Bem vindo ao empresário Mario Spalatti</h1>
            <h1>Welcome to businessman Mario Spalatti</h1>
            <ButtonHome
              text="Sobre mim"
              onClick={() => alert("Sobre mim")}
              type="sobreMim"
            />
            <ButtonHome
              text="Start"
              onClick={() => alert("Start")}
              type="start"
            />
          </div>
        </Col>
        <Col md={4} className={styles.imageContainer}>
          {" "}
          {/* Renomeei a classe */}
          <img
            src={marioImage}
            alt="Mario"
            className={` ${styles.marioImage}`}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
