import { Button } from "react-bootstrap"; // Importa botão estilizado do Bootstrap

function ButtonHome({ text, onClick, type = "button", className = "" }) {
  return (
    <Button
      variant="info"
      onClick={onClick}
      type={type}
      className={`my-2 ${className}`} 
    >
      {text}
    </Button>
  );
}

export default ButtonHome;
