import React from "react";
import marioImage from "./fotos/marioImage.jpg"; // Adjust the path as necessary

function Home() {
  return (
    <div>
      <h1>Welcome to the Mario App</h1>
      <img src={marioImage} alt="Mario" />
    </div>
  );
}

export default Home;