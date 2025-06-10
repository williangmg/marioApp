import React from "react";
// import marioImage from "./fotos/marioCruzado.png"; // Adjust the path as necessary
import ButtonHome from "../components/ButtonHome"; // Adjust the path as necessary
import styles from "./home.module.scss"; // Adjust the path as necessary

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1>Bem vindo ao Perfil Profissional do Mario</h1>
        <h1>Welcome to the Mario's Professional Profile</h1>
      <ButtonHome text="Sobre mim" onClick={() => alert("Sobre mim")} className="sobreMim" />
      <ButtonHome text="Start" onClick={() => alert("Start")} className="startButton" />
      </div>
        {/* <img src={marioImage} alt="Mario" className="marioImage"/> */}
    </>
  );
}

export default Home;
